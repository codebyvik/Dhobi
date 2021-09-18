const Admin = require("../models/admin.model");
// const User = require("../models/userSchema");

const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");

// Checks if user is authenticated or not
exports.isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return ErrorHandler("Login first to access this resource.", 401, res);
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  const admin = await Admin.findById(decoded.id);
  // const user = await User.findById(decoded.id);

  // if (admin) {
  //   req.user = admin;
  // } else if (user) {
  //   req.user = user;
  // }

  req.user = admin;
  next();
};

// Authorize roles
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return ErrorHandler(`Role (${req.user.role}) is not allowed to acccess this resource`, 403);
    }
    next();
  };
};
