const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Provide user name"],
      min: [5, " name cannot be below 5 characters"],
      max: [50, " name cannot be more than 50 characters"],
    },
    email: {
      type: String,
      require: [true, "Provide user email"],
      max: 100,
      unique: true,
    },
    phoneNo: {
      type: Number,
      required: [true, "Provide phone no"],
    },
    password: {
      type: String,
      require: [true, "Provide  password"],
      min: [6, "password cannot be below 6 characters"],
      select: false,
    },
    location: {
      area: {
        type: String,
        default: "",
      },
      city: {
        type: String,
        default: "",
      },
      pincode: {
        type: Number,
        min: 6,
        default: "",
      },
      country: {
        type: String,
        default: "India",
      },
    },

    role: {
      type: String,
      default: "customer",
    },
    StripeId: {
      type: String,
      default: "",
      select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

// Secure password before adding
CustomerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare password
CustomerSchema.methods.comparePassword = async function (enteredpassword) {
  return await bcrypt.compare(enteredpassword, this.password);
};

// generate jwt token
CustomerSchema.methods.generateJwtToken = async function () {
  return await jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};
// Generate password reset token
CustomerSchema.methods.getResetPasswordToken = function () {
  // Generate token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash and set to resetPasswordToken
  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

  // Set token expire time
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("Customer", CustomerSchema);
