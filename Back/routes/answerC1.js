var express = require('express');
var router = express.Router();

var productosController = require("../controllers/productosController")

/* GET home page. */
//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},productosController.getAll);

//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},productosController.getAll);
router.get('/', productosController.getAll);
router.get('/:id',(req,res,next)=>{req.app.validateUser(req,res,next)}, productosController.getById);
router.post('/', productosController.create);


module.exports = router;
