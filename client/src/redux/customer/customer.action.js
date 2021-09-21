import AgentActionTypes from "./agent.action.types";
// Get all Agents
export const getAllAgentsAction = (keyword) => ({
  type: AgentActionTypes.GET_ALL_AGENTS_START,
  payload: keyword,
});
export const getAllAgentsSuccess = (data) => ({
  type: AgentActionTypes.GET_ALL_AGENTS_SUCCESS,
  payload: data,
});
export const getAllAgentsFail = (error) => ({
  type: AgentActionTypes.GET_ALL_AGENTS_FAIL,
  payload: error,
});

// Get Single Agent
export const getSingleAgentAction = (id) => ({
  type: AgentActionTypes.GET_SINGLE_AGENT_START,
  payload: id,
});
export const getSingleAgentSuccess = (mall) => ({
  type: AgentActionTypes.GET_SINGLE_AGENT_SUCCESS,
  payload: mall,
});
export const getSingleAgentFail = (error) => ({
  type: AgentActionTypes.GET_SINGLE_AGENT_FAIL,
  payload: error,
});

// Update Agent
export const updateAgentAction = (newData) => ({
  type: AgentActionTypes.UPDATE_AGENT_START,
  payload: newData,
});
export const updateAgentSuccess = (mall) => ({
  type: AgentActionTypes.UPDATE_AGENT_SUCCESS,
  payload: mall,
});
export const updateAgentFail = (error) => ({
  type: AgentActionTypes.UPDATE_AGENT_FAIL,
  payload: error,
});

// Add Agent
export const addAgentAction = (data) => ({
  type: AgentActionTypes.ADD_AGENT_START,
  payload: data,
});
export const addAgentSuccess = (mall) => ({
  type: AgentActionTypes.ADD_AGENT_SUCCESS,
  payload: mall,
});
export const addAgentFail = (error) => ({
  type: AgentActionTypes.ADD_AGENT_FAIL,
  payload: error,
});

// delete mall
export const deleteAgentAction = (id) => ({
  type: AgentActionTypes.DELETE_AGENT_START,
  payload: id,
});
export const deleteAgentSuccess = () => ({
  type: AgentActionTypes.DELETE_AGENT_SUCCESS,
});
export const deleteAgentFail = (error) => ({
  type: AgentActionTypes.DELETE_AGENT_FAIL,
  payload: error,
});
