var pagosModel = require("../models/pagosModel")
const stripe = require("stripe")(process.env.STRIPE_KEY);


module.exports = {
    getAll: async function (req, res, next) {
        let respuestas = await pagosModel.find()

        res.status(200).json({ data: respuestas })
    },


    getById: async function (req, res, next) {
        console.log(req.params.id)
        let pagos = await pagosModel.findById(req.params.id)
        console.log(pagos)
        res.status(200).json(pagos)
    },
    create: async function (req, res, next) {
        console.log(req.body.images)
        stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount

        }, (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        })

    },


}