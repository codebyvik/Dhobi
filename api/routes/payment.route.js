const router = require("express").Router();

const { getStripeApi, processPayment } = require("../controllers/payment");
const { isAuthenticatedUser } = require("../middlewares/auth.middleware");

router.route("/").get(isAuthenticatedUser, getStripeApi);
router.route("/process").post(isAuthenticatedUser, processPayment);

module.exports = router;
