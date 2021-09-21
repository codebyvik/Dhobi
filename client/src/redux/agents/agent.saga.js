import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  addAgentFail,
  addAgentSuccess,
  deleteAgentFail,
  deleteAgentSuccess,
  getAllAgentsFail,
  getAllAgentsSuccess,
  getSingleAgentFail,
  getSingleAgentSuccess,
  updateAgentFail,
  updateAgentSuccess,
} from "./agent.action";
import AgentActionTypes from "./agent.action.types";
import axios from "axios";
import { message } from "antd";

// get all malls
export function* GetAllAgents({ payload }) {
  const { keyword = "", area = "", sort = "name", page = 1 } = payload;
  try {
    const { data } = yield axios.get(
      `/api/v1/agent?keyword=${keyword}&area=${area}&sort=${sort}&page=${page}`
    );
    yield put(getAllAgentsSuccess(data));
  } catch (error) {
    yield put(getAllAgentsFail(error.response.data.msg));
  }
}
export function* onGetAllAgents() {
  yield takeLatest(AgentActionTypes.GET_ALL_AGENTS_START, GetAllAgents);
}

// get single Agent
export function* GetSingleAgent({ payload }) {
  try {
    const { data } = yield axios.get(`/api/v1/agent/${payload}`);
    yield put(getSingleAgentSuccess(data.agent));
  } catch (error) {
    yield put(getSingleAgentFail(error.response.data.msg));
  }
}
export function* onGetSingleAgent() {
  yield takeLatest(AgentActionTypes.GET_SINGLE_AGENT_START, GetSingleAgent);
}
// Update  Agent
export function* UpdateAgent({ payload }) {
  try {
    const { data } = yield axios.put(`/api/v1/agent/${payload.id}`, payload);
    yield put(updateAgentSuccess(data.agent));
    yield message.success("Updated");
  } catch (error) {
    yield put(updateAgentFail(error.response.data.msg));
    yield message.error("Error Updating");
  }
}
export function* onUpdateAgent() {
  yield takeLatest(AgentActionTypes.UPDATE_AGENT_START, UpdateAgent);
}
// Add  Agent
export function* AddAgent({ payload }) {
  try {
    const { data } = yield axios.post(`/api/v1/auth/agent/register`, payload);
    yield put(addAgentSuccess(data.agent));
    yield message.success("Added");
  } catch (error) {
    yield put(addAgentFail(error.response.data.msg));
    yield message.error(`${error.response.data.msg}`);
  }
}
export function* onAddAgent() {
  yield takeLatest(AgentActionTypes.ADD_AGENT_START, AddAgent);
}
// Delete  Agent
export function* DeleteAgent({ payload }) {
  try {
    yield axios.delete(`/api/v1/agent/${payload}`);
    yield put(deleteAgentSuccess());
    yield message.success("Deleted");
    yield window.location.reload();
  } catch (error) {
    yield put(deleteAgentFail(error.response.data.msg));
    yield message.error(`${error.response.data.msg}`);
  }
}
export function* onDeleteAgent() {
  yield takeLatest(AgentActionTypes.DELETE_AGENT_START, DeleteAgent);
}

// export function
export function* agentSagas() {
  yield all([
    call(onGetAllAgents),
    call(onGetSingleAgent),
    call(onUpdateAgent),
    call(onAddAgent),
    call(onDeleteAgent),
  ]);
}
