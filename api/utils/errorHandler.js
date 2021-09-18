// Errror handler
const ErrorHandler = (message, code, res) => {
  if (message.name === "ValidationError") {
    return res.status(code).json({ success: false, msg: "Fill all fields" });
  }

  // Handling Mongoose duplicate key errors
  if (message.code === 11000) {
    const errmessage = `Duplicate ${Object.keys(message.keyValue)} entered`;
    return res.status(400).json({ success: false, msg: errmessage });
  }

  // Handling wrong JWT error
  if (message.name === "JsonWebTokenError") {
    const errmessage = "JSON Web Token is invalid. Try Again!!!";
    return res.status(400).json({ success: false, msg: errmessage });
  }

  return res.status(code).json({ success: false, msg: message });
};

module.exports = ErrorHandler;
