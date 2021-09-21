const cloudinary = require("cloudinary");
const crypto = require("crypto");
const sendToken = require("../utils/sendToken");
const ErrorHandler = require("../utils/errorHandler");
const sendEmail = require("../utils/sendResetEmail");

const Admin = require("../models/admin.model");
const Agent = require("../models/agent.model");
const Customer = require("../models/customer.model");

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
    } else if (req.user.role === "agent") {
      const agent = await Agent.findById(req.user.id);
      return res.status(200).json({
        success: true,
        user: agent,
      });
    } else if (req.user.role === "customer") {
      const user = await Customer.findById(req.user.id);

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

// Register agent => /api/v1/auth/agent/register

exports.registerAgent = async (req, res) => {
  const { name, email, password, phoneNo, location } = req.body;

  try {
    const userExist = await Admin.findOne({ email });
    if (userExist) {
      return ErrorHandler("User already Exists", 404, res);
    }
    const agent = await Agent.create({
      name,
      email,
      password,
      phoneNo,
      location,
    });

    sendToken(agent, 200, res);
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};

// Agent SignIn = > /api/v1/auth/agent/signin

exports.agentSignIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    //   check if user exist
    const findAgent = await Agent.findOne({ email }).select("+password");
    if (!findAgent) {
      return ErrorHandler("Agent doesnt exist", 404, res);
    }

    const isPasswordMatched = await findAgent.comparePassword(password);
    if (!isPasswordMatched) {
      return ErrorHandler("Invalid email or password", 400, res);
    }

    const agent = await Agent.findOne({ email });
    sendToken(agent, 200, res);
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};

// Register customer => /api/v1/auth/customer/register

exports.registerCustomer = async (req, res) => {
  console.log("hey");
  const { name, email, password, phoneNo, location } = req.body;

  try {
    const userExist = await Customer.findOne({ email });
    if (userExist) {
      return ErrorHandler("User already Exists", 404, res);
    }
    const customer = await Customer.create({
      name,
      email,
      password,
      phoneNo,
      location,
    });

    sendToken(customer, 200, res);
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};

// customer SignIn = > /api/v1/auth/customer/signin

exports.customerSignIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    //   check if user exist
    const findCustomer = await Customer.findOne({ email }).select("+password");
    if (!findCustomer) {
      return ErrorHandler("User doesnt exist", 404, res);
    }

    const isPasswordMatched = await findCustomer.comparePassword(password);
    if (!isPasswordMatched) {
      return ErrorHandler("Invalid email or password", 400, res);
    }

    const customer = await Customer.findOne({ email });
    sendToken(customer, 200, res);
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};
