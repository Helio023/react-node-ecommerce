const User = require('../models/userModel');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({username, email, password});
    res.status(201).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (e) {
    res.status(500).json(e);
  }
};
