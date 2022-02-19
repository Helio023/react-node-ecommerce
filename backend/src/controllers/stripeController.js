const stripe = require('stripe')(process.env.STRIPE_KEY);
const ErrorResponse = require('../utils/ErrorResponse');

exports.addPayment = async (req, res, next) => {
  const { tokenId, amount } = req.body;
  stripe.charges.create(
    {
      source: tokenId,
      amount,
      currency: 'usd',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        return next(new ErrorResponse('Failed to make the payment', 500));
      } else if (stripeRes) {
        res.status(200).json({
          status: 'success',
          res,
        });
      }
    }
  );
};
