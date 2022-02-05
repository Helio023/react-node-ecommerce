const router = require('express').Router();
const {
  createCart,
  getAllCarts,
  deleteCart,
  getCart,
  updateCart,
} = require('../controllers/cartController');
const { protectAdmin, protect } = require('../controllers/authController');

router.route('/carts').post(protect, createCart).get(protectAdmin, getAllCarts);
router
  .route('/carts/:id')
  .patch(protect, updateCart)
  .get(protect, getCart)
  .delete(protect, deleteCart);
module.exports = router;
