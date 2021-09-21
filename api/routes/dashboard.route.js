const router = require("express").Router();

const { adminDashboard } = require("../controllers/dashboard.controller");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth.middleware");

router.route("/").get(isAuthenticatedUser, authorizeRoles("admin"), adminDashboard);

module.exports = router;
