var express = require('express');
var router = express.Router();
const stripe = require('stripe')('sk_test_51NpwRSDCxZVJxL3fgj7tsJ85VkpWy2DsDKp0rhMItM3EoJHyBryBlk6JKMaFnqoFvoiKmchq9pK5lgzFYCrRjubo00EflBfuoM');


router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1NpwVkDCxZVJxL3fJNHGpzm2',
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `https://afec.onrender.com/success`,
      cancel_url: `https://afec.onrender.com/cancel`,
    });
  
    res.redirect(303, session.url);
  });

  module.exports = router;
  