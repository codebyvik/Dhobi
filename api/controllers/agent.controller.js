const cloudinary = require("cloudinary");
const ErrorHandler = require("../utils/errorHandler");
const SearchFeature = require("../utils/searchFeature");
const Agent = require("../models/agent.model");

// GET ALL Agents => api/v1/shops?keyword=dd
exports.getAllAgents = async (req, res) => {
  const resPerPage = 4;
  const count = await Agent.countDocuments();
  const countAgentsInArea = await Agent.countDocuments({ "location.area": req.query.area });
  const searchApi = await new SearchFeature(Agent.find(), req.query).searchShop().filterShop();

  searchApi.ShopPagination(resPerPage);
  const agents = await searchApi.query;

  res.status(200).json({ success: true, agents, count, agentsInArea: countAgentsInArea });
};

// DELETE Agent BY ID => api/v1/shop/:id
exports.deleteAgent = async (req, res) => {
  const agent = await Agent.findById(req.params.id);
  if (!agent) {
    return ErrorHandler(`Agent not found with id: ${req.params.id}`, 404, res);
  }
  try {
    await agent.remove();
    res.status(200).json({ success: true, msg: "Deleted" });
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};

// GET MALL BY ID => api/v1/malls/:id
exports.getAgentById = async (req, res) => {
  const agent = await Agent.findById(req.params.id);
  try {
    if (!agent) {
      return ErrorHandler(`Agent not found with id: ${req.params.id}`, 404, res);
    }
    res.status(200).json({ success: true, agent });
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};

// UPDATE MALL  => api/v1/malls/:id
exports.updateAgent = async (req, res) => {
  const { name, email, password, phoneNo, location } = req.body;
  const newAgentDetails = {
    name,
    email,
    password,
    phoneNo,
    location,
  };

  try {
    const agent = await Agent.findByIdAndUpdate(req.params.id, newAgentDetails, {
      new: true,
      useFindAndModify: false,
    });

    res.status(200).json({ success: true, agent });
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};
