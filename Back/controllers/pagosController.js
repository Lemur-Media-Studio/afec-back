var pagosModel = require("../models/pagosModel")
const stripe = require("stripe")(process.env.STRIPE_KEY);

module.exports = {
    getAll: async function(req, res, next) {
        let respuestas = await pagosModel.find()

        res.status(200).json({data:respuestas})
      },


    getById: async function(req, res, next) {
        console.log(req.params.id)
        let pagos = await pagosModel.findById(req.params.id)
        console.log(pagos)
        res.status(200).json(pagos)
    },
    create: async function(req, res, next) {
        console.log(req.body.images)
        let pago = new pagosModel.stripe.charges.create({
            id: req.body.id,
        })
        let data = await pago.save();
        res.status(201).json({"stauts":"ok","data":data})
    },


}