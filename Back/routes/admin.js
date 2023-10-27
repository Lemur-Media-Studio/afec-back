var express = require('express');
var router = express.Router();

var adminController = require("../controllers/adminController")

/* GET home page. */
//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},adminController.getAll);

//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},adminController.getAll);

router.get('/usuarios',adminController.getAll);
router.delete('/:id', adminController.delete);
router.get('/answerC1',adminController.getAllAnswerC2);
router.get('/answerC2',adminController.getAllAnswerC1);
router.get('/pagos',adminController.getAllPagos);



module.exports = router;