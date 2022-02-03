const router = require('express').Router();
const {
  getAllUsers,
  updateUser,
  deleteUser,
  userStats,
} = require('../controllers/userController');
const { protectAdmin, protect } = require('../controllers/authController');

router.route('/user').get(protectAdmin, getAllUsers);
router.route('/user/stats').get(protectAdmin, userStats);
router.route('/user/:id').post(protect, updateUser);
router.route('/user/:id').delete(protectAdmin, deleteUser);

module.exports = router;
