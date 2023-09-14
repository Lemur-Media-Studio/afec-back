var express = require('express');
var router = express.Router();

var pagosController = require("../controllers/pagosController")

/* GET home page. */
//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},pagosController.getAll);

//router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},pagosController.getAll);

router.get('/pagos',pagosController.getAll);
router.get('/pagos/:id',pagosController.getById);
router.post('/pagos', pagosController.create);


module.exports = router;

/*
var router = require('express').Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
//fix


router.post("/payment", (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd"
    }, (stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr);
        }else{
            res.status(200).json(stripeRes);
        }


    });
});


module.exports = router;
*/