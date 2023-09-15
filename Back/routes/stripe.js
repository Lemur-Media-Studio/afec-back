var express = require('express');
var router = express.Router();
const stripe = require('stripe')('sk_test_51NpwRSDCxZVJxL3fgj7tsJ85VkpWy2DsDKp0rhMItM3EoJHyBryBlk6JKMaFnqoFvoiKmchq9pK5lgzFYCrRjubo00EflBfuoM');

router.post('/create-token', function(req,res){

});



router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: req.body.price,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `https://afec.onrender.com/pay?success=true`,
      cancel_url: `https://afec.onrender.com/pay?canceled=true`,
    });

    res.status(201).json({"data":session.url})

   

  });

  module.exports = router;