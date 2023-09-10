var express = require('express');
var router = express.Router();

var answerC2Controller = require("../controllers/answerC2Controller")

/* GET home page. */
//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},answerC1Controller.getAll);

//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},answerC1Controller.getAll);

router.get('/respuestas',answerC2Controller.getAll);
router.get('/respuestas/:id',answerC2Controller.getById);
router.post('/respuestas', answerC2Controller.create);


module.exports = router;
