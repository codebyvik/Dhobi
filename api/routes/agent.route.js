const router = require("express").Router();

const {
  getAllAgents,
  getAgentById,
  updateAgent,
  deleteAgent,
} = require("../controllers/agent.controller");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth.middleware");

router.route("/").get(getAllAgents);
router
  .route("/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAgentById)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateAgent)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteAgent);

module.exports = router;
