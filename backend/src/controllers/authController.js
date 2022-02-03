const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const ErrorResponse = require('../utils/ErrorResponse')

const createToken = (user, statusCode, res) => {
  const token = user.signToken();

  res.status(statusCode).json({
    status: 'success',
    token,
  });
};

exports.register = async (req, res, next) => {
  const { username, email, password, isAdmin } = req.body;
  try {
    const user = await User.create({ username, email, password, isAdmin });
    createToken(user, 201, res);
  } catch (error) {
    next(error)
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!(email || password)) {
    return next(new ErrorResponse('Please provide email and password', 403));
  }
  try {
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.matchPassword(password))) {
      return next(new ErrorResponse('Invalid credentials', 403));
    }

    createToken(user, 200, res);
  } catch (error) {
    next(error)
  }
};

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new ErrorResponse('You are not logged in!', 403));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse('No user found', 404));
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

exports.protectAdmin = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new ErrorResponse('You are not logged in!', 403));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.isAdmin === false) {
      return next(new ErrorResponse('You have no permission to performe this action!', 403));
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
