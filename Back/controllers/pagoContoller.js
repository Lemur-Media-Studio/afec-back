var pagoModel = require("../models/pagoModel")




module.exports = {
    create: async function (req, res, next) {

        try {
            let pago = await pagoModel.create({ id: req.body.id, idPrice: req.body.idPrice, idSub: req.body.idSub, 
                refUser: req.body.refUser, linkIn: req.body.linkIn })

            res.status(201).json(pago)
        } catch (e) {

            console.log(e)
            next(e)
        }
    },
    getAll: async function (req, res, next) {

        let pago = await pagoModel.find()

        //console.log(pago)
        res.status(200).json({ data: pago })
    },

    delete: async function (req, res, next) {
        //let data = await pagoModel.findByIdAndUpdate(req.params.id,req.body)
        let data = await pagoModel.deleteOne({ _id: req.params.id });
        res.status(201).json({ "stauts": "ok", "data": data })
    },

}