const router = require("express").Router();

const {
  addShop,
  getAllShops,
  getShopById,
  updateShop,
  deleteShop,
  review,
  deleteReview,
} = require("../controllers/shop.controller");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth.middleware");

router.route("/").get(getAllShops);
router.route("/add").post(isAuthenticatedUser, authorizeRoles("admin"), addShop);
router.route("/:id").get(getShopById).put(updateShop).delete(deleteShop);
router.route("/review").post(isAuthenticatedUser, review).delete(isAuthenticatedUser, deleteReview);

module.exports = router;
