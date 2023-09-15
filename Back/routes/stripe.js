const stripe = require('stripe')('sk_test_51NpwRSDCxZVJxL3fgj7tsJ85VkpWy2DsDKp0rhMItM3EoJHyBryBlk6JKMaFnqoFvoiKmchq9pK5lgzFYCrRjubo00EflBfuoM');
var router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1NpwVkDCxZVJxL3fJNHGpzm2',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `/success=true`,
      cancel_url: `/canceled=true`,
    });
  
    res.redirect(303, session.url);
  });
  