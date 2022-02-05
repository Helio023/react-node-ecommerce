const router = require('express').Router();
const {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protectAdmin } = require('../controllers/authController');

router.route('/products').get(getAllProducts);
router
  .route('/products/:id')
  .get(getProduct)
  .patch(protectAdmin, updateProduct)
  .delete(protectAdmin, deleteProduct);
router.route('/products').post(protectAdmin, createProduct);

module.exports = router;
