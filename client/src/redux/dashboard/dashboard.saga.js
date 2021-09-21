import { takeLatest, all, call, put } from "redux-saga/effects";

import axios from "axios";
import { message } from "antd";

import { dashboardFetchSuccess, dashboardFetchFail } from "./dashboard.action";

// Update user
export function* getDashboard() {
  try {
    const { data } = yield axios.get(`/api/v1/dashboard/`);

    yield put(dashboardFetchSuccess(data));
  } catch (error) {
    yield message.error(error.response.data.msg);
    yield put(dashboardFetchFail(error.response.data.msg));
  }
}

export function* onGetDashboard() {
  yield takeLatest("FETCH_DASHBOARD_DATA", getDashboard);
}

export function* dashboardSaga() {
  yield all([call(onGetDashboard)]);
}
