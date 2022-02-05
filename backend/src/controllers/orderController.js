const Order = require('../models/orderModel');

exports.createOrder = async (req, res, next) => {
  const { userId, products, amount, address, status } = req.body;
  try {
    const order = await Order.create({
      userId,
      products,
      amount,
      address,
      status,
    });

    res.status(201).json({
      status: 'success',
      order,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateOrder = async (req, res, next) => {
  const { products, amount, adress, status } = req.body;
  try {
    const order = await Order.findOneAndUpdate(
      { userId: req.params.id },
      {
        products,
        amount,
        adress,
        status,
      },
      { new: true }
    );
    res.status(200).json({
      status: 'success',
      order,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();

    res.status(200).json({
      status: 'success',
      totalCarts: orders.length,
      orders,
    });
  } catch (error) {
    next(error);
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      order,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    await Order.findOneAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
    });
  } catch (error) {
    next(error);
  }
};

exports.stats = async (req, res, next) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: {
            $month: '$createdAt',
          },
          sales: '$amount',
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: '$amount' },
        },
      },
    ]);

    res.status(200).json({
      status: 'success',
      income,
    });
  } catch (error) {
    next(error);
  }
};


