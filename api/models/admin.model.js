const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AdminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Provide admin name"],
      min: [5, "Admin name cannot be below 5 characters"],
      max: [50, "Admin name cannot be more than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Provide admin email"],
      max: 100,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Provide admin password"],
      min: [6, "password cannot be below 6 characters"],
      select: false,
    },
    phoneNo: {
      type: Number,
      required: [true, "Provide phone no"],
    },
    location: {
      area: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
        default: "India",
      },
      pincode: {
        type: Number,
        required: true,
      },
    },
    role: {
      type: String,
      default: "admin",
    },
  },
  { timestamps: true }
);

// Secure password before adding
AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare password
AdminSchema.methods.comparePassword = async function (enteredpassword) {
  return await bcrypt.compare(enteredpassword, this.password);
};

// generate jwt token
AdminSchema.methods.generateJwtToken = async function () {
  return await jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

module.exports = mongoose.model("Admin", AdminSchema);
