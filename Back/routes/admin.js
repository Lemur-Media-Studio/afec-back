var express = require('express');
var router = express.Router();

var adminController = require("../controllers/adminController")

/* GET home page. */
//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},adminController.getAll);

//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},adminController.getAll);

router.get('/usuarios',adminController.getAll);
router.delete('/:id', adminController.delete);



module.exports = router;