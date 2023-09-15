const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
var pagoModel = require("../models/pagoModel")

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "eur",
      receipt_email: req.body.email,
      description:req.body.description
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
        let pago = new pagoModel({
          data: stripeRes
      })
      let data = pago.save();
      res.status(201).json({"stauts":"ok","data":data})

        
      }
    }
  );
});

module.exports = router;