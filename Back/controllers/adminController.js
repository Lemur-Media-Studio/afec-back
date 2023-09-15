var usuariosModel = require("../models/usuariosModel")




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

}