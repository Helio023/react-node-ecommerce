const Cart = require('../models/cartModel');

exports.createCart = async (req, res, next) => {
  const { userId, products } = req.body;
  try {
    const cart = await Cart.create({
      userId,
      products,
    });

    res.status(201).json({
      status: 'success',
      cart,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateCart = async (req, res, next) => {
  const { products } = req.body;
  try {
    const cart = await Cart.findOneAndUpdate(
      { userId: req.params.id },
      {
        products,
      },
      { new: true }
    );
    res.status(200).json({
      status: 'success',
      cart,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllCarts = async (req, res, next) => {
  try {
    const carts = await Cart.find();

    res.status(200).json({
      status: 'success',
      totalCarts: carts.length,
      carts,
    });
  } catch (error) {
    next(error);
  }
};

exports.getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      cart,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteCart = async (req, res, next) => {
  try {
    await Cart.findOneAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
    });
  } catch (error) {
    next(error);
  }
};
