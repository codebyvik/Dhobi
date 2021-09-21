const ErrorHandler = require("../utils/errorHandler");
const Admin = require("../models/admin.model");
const Agent = require("../models/agent.model");
const Customer = require("../models/customer.model");
const Order = require("../models/order.model");
const Shop = require("../models/shop.model");

// update User => api/v1/user/:id
exports.adminDashboard = async (req, res, next) => {
  try {
    const totalAgent = await Agent.countDocuments();
    const TotalOrders = await Order.countDocuments();
    const CompletedOrders = await Order.countDocuments({ status: 2 });
    const TotalShops = await Shop.countDocuments();
    const TotalCustomers = await Customer.countDocuments();

    res.status(200).json({
      success: true,
      totalAgent,
      TotalOrders,
      CompletedOrders,
      TotalShops,
      TotalCustomers,
    });
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};
