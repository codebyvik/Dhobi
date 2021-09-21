const cloudinary = require("cloudinary");
const ErrorHandler = require("../utils/errorHandler");

const Customer = require("../models/customer.model");

// update User => api/v1/user/:id
exports.updateUser = async (req, res, next) => {
  const { name, email, password, phoneNo, location } = req.body;

  try {
    const newDetails = {
      name,
      email,
      password,
      phoneNo,
      location,
    };

    const customer = await Customer.findByIdAndUpdate(req.params.id, newDetails, {
      new: true,
      useFindAndModify: false,
    });

    res.status(200).json({ success: true, user: customer });
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};
