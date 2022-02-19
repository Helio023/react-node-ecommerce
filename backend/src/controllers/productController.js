const Product = require('../models/productModel');

exports.createProduct = async (req, res, next) => {
  const { title, description, image, size, price, color, categories, inStock } =
    req.body;
  try {
    const product = await Product.create({
      title,
      description,
      image,
      size,
      price,
      color,
      categories,
      inStock
    });

    res.status(201).json({
      status: 'success',
      product,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  const { title, description, image, size, price, color, categories } =
    req.body;
  try {
    const product = await Product.findOneAndUpdate(
      req.params.id,
      {
        title,
        description,
        image,
        size,
        price,
        color,
        categories,
      },
      { new: true }
    );
    res.status(200).json({
      status: 'success',
      product,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllProducts = async (req, res, next) => {
  const queryNew = req.query.new;
  const queryCategory = req.query.category;

  try {
    let products;
    if (queryNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (queryCategory) {
      products = await Product.find({
        categories: {
          $in: [queryCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json({
      status: 'success',
      totalProducts: products.length,
      products,
    });
  } catch (error) {
    next(error);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      product,
    });
  } catch (error) {
    next(error);
  }
};
exports.deleteProduct = async (req, res, next) => {
  try {
    await Product.findOneAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
    });
  } catch (error) {
    next(error);
  }
};
