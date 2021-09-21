const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    shippingInfo: {
      address: {
        type: String,
        required: true,
      },
      area: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      phoneNo: {
        type: String,
        required: true,
      },
      pincode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Customer",
    },
    orderItems: [
      {
        cloth: {
          type: String,
          required: true,
        },

        service_name: {
          type: String,
        },
        price: {
          type: Number,
        },

        qty: {
          type: Number,
        },
      },
    ],
    paymentInfo: {
      id: {
        type: String,
      },
      status: {
        type: String,
      },
    },
    paidAt: {
      type: Date,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    orderStatus: {
      type: Number,
      required: true,
      default: 0,
    },
    deliveredAt: {
      type: Date,
    },
    shop: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Shop",
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
