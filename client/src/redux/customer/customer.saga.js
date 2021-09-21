import { takeLatest, all, call, put } from "redux-saga/effects";

import axios from "axios";
import { message } from "antd";
import UserActionTypes from "./customer.action.types";
import { updateUserFail, updateUserSuccess } from "./customer.action";

// Update user
export function* UpdateUser({ payload }) {
  try {
    yield axios.put(`/api/v1/customer/${payload.id}`, payload);
    yield message.success("Updated");
    yield put(updateUserSuccess());
  } catch (error) {
    yield message.error(error.response.data.msg);
    yield put(updateUserFail(error.response.data.msg));
  }
}

export function* onUpdateUser() {
  yield takeLatest(UserActionTypes.UPDATE_USER_START, UpdateUser);
}

export function* userSaga() {
  yield all([call(onUpdateUser)]);
}
