const router = require('express').Router();
const { addPayment } = require('../controllers/stripeController');

router.route('/payment').post(addPayment);
module.exports = router;
