const ErrorHandler = require("../utils/errorHandler");

const Customer = require("../models/customer.model");

const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51IlbAnSCZcZQMjATisBpXIdSVr5nrdPilbMnoQAfqQxTZs5YAN8ie8jiWi3JVG52ACpOFlksRoXbuy0NuFRnki7R00TbvGjYuy"
);

// Get stripe key => /api/v1/payment/stripeapi
exports.getStripeApi = async (req, res) => {
  res.status(200).json({
    stripeApiKey: process.env.STRIPE_API_KEY,
  });
};

// process  payments
exports.processPayment = async (req, res) => {
  const { amount, id } = req.body;

  try {
    const user = await Customer.findById(req.user._id);

    if (user.StripeId) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "INR",
        customer: user.StripeId,
        description: "Software development services",
      });

      return res
        .status(200)
        .json({ success: true, clientSecret: paymentIntent.client_secret, paymentIntent });
    }

    const customer = await stripe.customers.create({
      email: req.user.email,
      name: req.user.name,
    });

    user.StripeId = customer.id;
    user.save();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "INR",
      customer: customer.id,
      description: "Software development services",
    });

    res
      .status(200)
      .json({ success: true, clientSecret: paymentIntent.client_secret, paymentIntent });
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};
