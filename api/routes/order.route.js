const router = require("express").Router();

const {
  newOrder,
  getMyOrders,
  getOrderDetails,
  getAllOrders,
  updateOrder,
} = require("../controllers/order.controller");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth.middleware");

router.route("/").get(isAuthenticatedUser, getAllOrders);
router.route("/new").post(isAuthenticatedUser, newOrder);
router.route("/getMyOrders").get(isAuthenticatedUser, getMyOrders);
router
  .route("/:id")
  .get(isAuthenticatedUser, getOrderDetails)
  .put(isAuthenticatedUser, authorizeRoles("agent"), updateOrder);

module.exports = router;
