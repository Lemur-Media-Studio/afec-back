var usuariosModel = require("../models/usuariosModel")




module.exports = {
    getAll: async function(req, res, next) {

        let usuarios = await usuariosModel.find()
      
        //console.log(usuarios)
        res.status(200).json({data:usuarios})
      },

}