const router = require("express").Router();

const { registerAdmin, adminLogin, GetUser, logOut } = require("../controllers/auth.controller");
const { isAuthenticatedUser } = require("../middlewares/auth.middleware");

router.route("/admin/register").post(registerAdmin);

router.route("/admin/login").post(adminLogin);

router.route("/me").get(isAuthenticatedUser, GetUser);
router.route("/logOut").get(logOut);

module.exports = router;
