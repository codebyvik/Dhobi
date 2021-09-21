const ErrorHandler = require("../utils/errorHandler");

const Order = require("../models/order.model");
const Shop = require("../models/shop.model");

// Create New Order
exports.newOrder = async (req, res) => {
  const { orderItems, shippingInfo, totalPrice, paymentInfo, shop } = req.body;

  try {
    const order = await Order.create({
      orderItems,
      shippingInfo,
      totalPrice,
      paymentInfo,
      shop,
      paidAt: Date.now(),
      customer: req.user._id,
    });

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};

// get my orders client
exports.getMyOrders = async (req, res) => {
  try {
    const count = await Order.countDocuments({ customer: req.user._id });
    const orders = await Order.find({ customer: req.user._id }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      orders,
      count,
    });
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};

// get single order details
exports.getOrderDetails = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};

// get all orders by area
exports.getAllOrders = async (req, res) => {
  const area = req.query.area
    ? {
        "shippingInfo.area": req.query.area,
      }
    : {};

  try {
    const count = await Order.countDocuments();
    const orders = await Order.find(area).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      orders,
      count,
    });
  } catch (error) {
    console.log(error);
    ErrorHandler(error, 500, res);
  }
};

// Update / Process order - ADMIN  =>   /api/v1/admin/order/:id
exports.updateOrder = async (req, res) => {
  const { status } = req.body;

  try {
    const order = await Order.findById(req.params.id);

    if (order.orderStatus === 2) {
      return ErrorHandler("You have already delivered this order", 400, res);
    }

    const deliverStatus = Number(status);

    if (deliverStatus === 2) {
      order.orderStatus = status;
      order.deliveredAt = Date.now();
      const data = await order.save();
      return res.status(200).json({
        success: true,
        order: data,
      });
    }

    order.orderStatus = deliverStatus;
    const data = await order.save();

    res.status(200).json({
      success: true,
      order: data,
    });
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};
