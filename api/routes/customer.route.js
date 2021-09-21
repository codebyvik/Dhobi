const router = require("express").Router();

const { updateUser } = require("../controllers/customer.controller");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth.middleware");

router.route("/:id").put(isAuthenticatedUser, authorizeRoles("customer"), updateUser);

module.exports = router;
