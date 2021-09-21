import AgentActionTypes from "./agent.action.types";

const InititalState = {
  loading: false,
  error: "",
  agents: null,
  agent: null,
  totalAgents: 0,
  updating: false,
  agentsInArea: 0,
};

export const agentReducer = (state = InititalState, action) => {
  switch (action.type) {
    case AgentActionTypes.GET_ALL_AGENTS_START:
    case AgentActionTypes.GET_SINGLE_AGENT_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case AgentActionTypes.UPDATE_AGENT_START:
    case AgentActionTypes.ADD_AGENT_START:
    case AgentActionTypes.DELETE_AGENT_START:
      return {
        ...state,
        updating: true,
        error: "",
      };
    case AgentActionTypes.DELETE_AGENT_SUCCESS:
      return {
        ...state,
        updating: false,
      };
    case AgentActionTypes.GET_ALL_AGENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        agents: action.payload.agents,
        totalAgents: action.payload.count,
        agentsInArea: action.payload.agentsInArea,
      };
    case AgentActionTypes.GET_SINGLE_AGENT_SUCCESS:
    case AgentActionTypes.UPDATE_AGENT_SUCCESS:
    case AgentActionTypes.ADD_AGENT_SUCCESS:
      return {
        ...state,
        loading: false,
        updating: false,
        agent: action.payload,
      };
    case AgentActionTypes.GET_ALL_AGENTS_FAIL:
    case AgentActionTypes.GET_SINGLE_AGENT_FAIL:
    case AgentActionTypes.UPDATE_AGENT_FAIL:
    case AgentActionTypes.ADD_AGENT_FAIL:
    case AgentActionTypes.DELETE_AGENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.type,
        updating: false,
      };

    default:
      return state;
  }
};
