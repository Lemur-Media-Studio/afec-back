var etiquetasModel = require("../models/etiquetasModel")
var categoriesModel = require("../models/categoriasModel")
//require multer for the file uploads
var multer = require('multer');
// set the directory for the uploads to the uploaded to
var DIR = './public/images/';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var upload = multer({dest: DIR}).single('photo');

module.exports = {
    getAll: async function(req, res, next) {
        /*let etiquetas = await etiquetasModel.paginate({},{
            populate:'category',
            limit:2,
            sort:{name:1},
            page:(req.query.page?req.query.page:1)
        })*/
        let etiquetas = await etiquetasModel.find()
        .populate('category')
        console.log(etiquetas)
        res.status(200).json({data:etiquetas})
      },
      getByCategoria: async function(req, res, next) {
  
        let etiquetas = await etiquetasModel.paginate({category:req.params.id},{
            populate:'category',
            limit:2,
            sort:{name:1},
            page:(req.query.page?req.query.page:1)
        })
        console.log(etiquetas)
        res.status(200).json(etiquetas)
      },
    
    getDestados: async function(req, res, next) {
        let etiquetas = await etiquetasModel.find({'destacado':1})
        console.log(etiquetas)
        res.status(200).json(etiquetas)
    },
    getById: async function(req, res, next) {
        console.log(req.params.id)
        let etiquetas = await etiquetasModel.findById(req.params.id)
        console.log(etiquetas)
        res.status(200).json(etiquetas)
    },
    create: async function(req, res, next) {
        //console.log(req.body.images)
        let producto = new etiquetasModel({
            n:req.body.n,
            categoria:req.body.categoria,
            momento: req.body.momento, 
            fase: req.body.fase,
            macro: req.body.macro, 
            micro: req.body.micro,
            igualdad: req.body.igualdad,
            direccion: req.body.direccion,
            espacios: req.body.espacios,
            img:req.body.img,
            video:req.body.video,
        })
        let data = await producto.save();
        res.status(201).json({"stauts":"ok","data":data})
    },
    update: async function(req, res, next) {
        //let data = await etiquetasModel.findByIdAndUpdate(req.params.id,req.body)
        let data = await etiquetasModel.update({ _id: req.params.id}, req.body, { multi: false })
        res.status(201).json({"stauts":"ok","data":data})
    },
    delete: async function(req, res, next) {
        //let data = await etiquetasModel.findByIdAndUpdate(req.params.id,req.body)
        let data = await etiquetasModel.deleteOne({_id:req.params.id});
        res.status(201).json({"stauts":"ok","data":data})
    },
    upload: async function(req, res, next) {
        try{
            var path = '';
            upload(req, res, function (err) {

                    if (err) {
                        // An error occurred when uploading
                        console.log(err);
                        next()
                    }  
                    // No error occured.
                    path = req.file.path;
                    res.status(201).json({status: "success", message: "Imagen cargada exitosamente", data: req.file});
            });  
        }catch(e){
        
            console.log(e)
            next(e)
        }
    }
}