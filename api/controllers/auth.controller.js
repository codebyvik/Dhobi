const cloudinary = require("cloudinary");
const crypto = require("crypto");
const sendToken = require("../utils/sendToken");
const ErrorHandler = require("../utils/errorHandler");
const sendEmail = require("../utils/sendResetEmail");

const Admin = require("../models/admin.model");

// REGISTER ADMIN => /api/v1/auth/admin/register
exports.registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExist = await Admin.findOne({ email });
    if (userExist) {
      return ErrorHandler("User already Exists", 404, res);
    }
    const admin = await Admin.create({
      name,
      email,
      password,
    });

    sendToken(admin, 200, res);
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};

// ADMIN LOGIN => /api/v1/auth/admin/login
exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    //   check if user exist
    const findAdmin = await Admin.findOne({ email }).select("+password");
    if (!findAdmin) {
      return ErrorHandler("User doesnt exist", 404, res);
    }

    const isPasswordMatched = await findAdmin.comparePassword(password);
    if (!isPasswordMatched) {
      return ErrorHandler("Invalid email or password", 400, res);
    }

    const admin = await Admin.findOne({ email });
    sendToken(admin, 200, res);
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};

// Get logged in user => /api/v1/auth/me
exports.GetUser = async (req, res, next) => {
  try {
    if (req.user.role === "admin") {
      const admin = await Admin.findById(req.user.id);
      return res.status(200).json({
        success: true,
        user: admin,
      });
    } else if (req.user.role === "seller") {
      const user = await User.findById(req.user.id);
      const seller = await Seller.findOne({ seller: user._id });
      const Userdata = { ...user };
      const Sellerdata = { ...seller };
      const data = Object.assign(Sellerdata._doc, Userdata._doc);

      return res.status(200).json({
        success: true,
        user: data,
      });
    } else if (req.user.role === "customer") {
      const user = await User.findById(req.user.id);

      return res.status(200).json({
        success: true,
        user: user,
      });
    }
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};

// Logout user   =>   /api/v1/auth/logout
exports.logOut = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
      msg: "Logged out",
    });
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};
