const router = require('express').Router();
const {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrder,
  updateOrder,
  stats
} = require('../controllers/orderController');

const { protectAdmin, protect } = require('../controllers/authController');

router
  .route('/orders')
  .post(protect, createOrder)
  .get(protectAdmin, getAllOrders);
router
  .route('/orders/:id')
  .patch(protect, updateOrder)
  .get(protect, getOrder)
  .delete(protect, deleteOrder);

router.route('/stats').get(stats)

module.exports = router;
