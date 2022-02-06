const stripe = require('stripe')(process.env.STRIPE_KEY)
const ErrorResponse = require('../utils/ErrorResponse');

exports.addPayment = async (req, res, next) => {
  const { tokenId, amount } = req.body;
  await stripe.charges.create(
    {
      tokenId,
      amount,
      currency: 'usd',
    },
    (err, res) => {
      if (err) {
        return next(new ErrorResponse('Failed to make the payment', 500));
      } else {
        res.status(200).json({
          status: 'success',
          res,
        });
      }
    }
  );
};
