var answerC1Model = require("../models/answerC1Model")
//require multer for the file uploads
var multer = require('multer');
// set the directory for the uploads to the uploaded to
var DIR = './public/images/';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var upload = multer({dest: DIR}).single('photo');

module.exports = {
    getAll: async function(req, res, next) {
        /*let productos = await productosModel.paginate({},{
            populate:'category',
            limit:2,
            sort:{name:1},
            page:(req.query.page?req.query.page:1)
        })*/
        let productos = await productosModel.find()
        .populate('category')
        console.log(productos)
        res.status(200).json({data:productos})
      },

    getById: async function(req, res, next) {
        console.log(req.params.id)
        let productos = await answerC1Model.findById(req.params.id)
        console.log(productos)
        res.status(200).json(productos)
    },
    create: async function(req, res, next) {
        console.log(req.body.images)
        let producto = new productosModel({
            id: req.body.id,
            q1: req.body.q1, 
            q2:req.body.q2,
            q3:req.body.q3,
            q4:req.body.q4,
            q5:req.body.q5,
            q6:req.body.q6,
            q7:req.body.q7,
            q8:req.body.q8,
            q9:req.body.q9,
        })
        let data = await producto.save();
        res.status(201).json({"stauts":"ok","data":data})
    },


}