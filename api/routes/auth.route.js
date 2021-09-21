const router = require("express").Router();

const {
  registerAdmin,
  adminLogin,
  GetUser,
  logOut,
  registerAgent,
  registerCustomer,
  agentSignIn,
  customerSignIn,
} = require("../controllers/auth.controller");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth.middleware");

router.route("/admin/register").post(registerAdmin);
router.route("/agent/register").post(isAuthenticatedUser, authorizeRoles("admin"), registerAgent);
router.route("/customer/register").post(registerCustomer);

router.route("/admin/login").post(adminLogin);
router.route("/agent/login").post(agentSignIn);
router.route("/customer/login").post(customerSignIn);

router.route("/me").get(isAuthenticatedUser, GetUser);
router.route("/logOut").get(logOut);

module.exports = router;
