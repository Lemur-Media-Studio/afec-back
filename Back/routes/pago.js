var express = require('express');
var router = express.Router();

var pagoController = require("../controllers/pagoController")

/* GET home page. */
//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},pagoController.getAll);

//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},pagoController.getAll);

router.post('/success',pagoController.create);




module.exports = router;