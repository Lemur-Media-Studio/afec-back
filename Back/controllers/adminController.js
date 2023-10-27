var usuariosModel = require("../models/usuariosModel")
var answerC1Model = require("../models/answerC1Model")
var answerC2Model = require("../models/answerC2Model")
var pagoModel = require("../models/pagoModel")




module.exports = {
    getAll: async function (req, res, next) {

        let usuarios = await usuariosModel.find()

        //console.log(usuarios)
        res.status(200).json({ data: usuarios })
    },

    delete: async function (req, res, next) {
        //let data = await usuariosModel.findByIdAndUpdate(req.params.id,req.body)
        let data = await usuariosModel.deleteOne({ _id: req.params.id });
        res.status(201).json({ "stauts": "ok", "data": data })
    },

    getAllPagos: async function (req, res, next) {

        let pago = await pagoModel.find()

        //console.log(pago)
        res.status(200).json({ data: pago })
    },

    getAllAnswerC1: async function (req, res, next) {
        /*let productos = await productosModel.paginate({},{
            populate:'category',
            limit:2,
            sort:{name:1},
            page:(req.query.page?req.query.page:1)
        })*/
        let respuestas = await answerC1Model.find()

        res.status(200).json({ data: respuestas })
    },

    getAllAnswerC2: async function (req, res, next) {
        /*let productos = await productosModel.paginate({},{
            populate:'category',
            limit:2,
            sort:{name:1},
            page:(req.query.page?req.query.page:1)
        })*/
        let respuestas = await answerC2Model.find()

        res.status(200).json({ data: respuestas })
    }

}