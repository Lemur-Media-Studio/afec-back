var express = require('express');
var router = express.Router();

var answerC1Controller = require("../controllers/answerC1Controller")

/* GET home page. */
//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},answerC1Controller.getAll);

//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},answerC1Controller.getAll);
router.get('/respuestas', answerC1Controller.getAll);
router.get('/respuestas/:id',(req,res,next)=>{req.app.validateUser(req,res,next)}, answerC1Controller.getById);
router.post('/respuestas', answerC1Controller.create);


module.exports = router;
