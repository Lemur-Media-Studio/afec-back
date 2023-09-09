var express = require('express');
var router = express.Router();

var etiquetasController = require("../controllers/etiquetasController")

/* GET home page. */
//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},etiquetasController.getAll);
router.post('/upload', etiquetasController.upload);
//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},etiquetasController.getAll);
router.get('/', etiquetasController.getAll);
router.get('/destacados', etiquetasController.getDestados);
router.get('/categoria/:id', etiquetasController.getByCategoria);
router.get('/:id', etiquetasController.getById);
router.post('/', etiquetasController.create);
router.put('/:id', etiquetasController.update);
router.delete('/:id', etiquetasController.delete);

module.exports = router;
