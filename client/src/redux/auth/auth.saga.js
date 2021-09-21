import { takeLatest, all, call, put } from "redux-saga/effects";
import AuthActionTypes from "./auth.action.types";
import axios from "axios";

import { message } from "antd";
import {
  adminSignInFail,
  adminSignInSuccess,
  getLoggedInUserFail,
  getLoggedInuserSuccess,
  signOutFail,
  signOutSuccess,
  registerUserFail,
  registerUserSuccess,
  userSignInSuccess,
  userSignInFail,
} from "./auth.action";

// Admin SignIn
export function* AdminSignIn({ payload }) {
  try {
    const { data } = yield axios.post("/api/v1/auth/admin/login", payload);

    yield localStorage.setItem("loggedIn", true);
    yield put(adminSignInSuccess(data.user));
    yield message.success("Signed in succesffully");
  } catch (error) {
    yield localStorage.removeItem("loggedIn");
    yield put(adminSignInFail(error.response.data.msg));
    yield message.error(error.response.data.msg);
  }
}

export function* onAdminSignInStart() {
  yield takeLatest(AuthActionTypes.ADMIN_SIGNIN_START, AdminSignIn);
}
// Get logged in user
export function* GetLoggedInUser() {
  try {
    const { data } = yield axios.get("/api/v1/auth/me");
    yield localStorage.setItem("loggedIn", true);
    yield put(getLoggedInuserSuccess(data.user));
  } catch (error) {
    yield localStorage.removeItem("loggedIn");
    yield put(getLoggedInUserFail(error.response.data.msg));
  }
}

export function* onGetLoggedInUser() {
  yield takeLatest(AuthActionTypes.GET_LOGGED_IN_USER_START, GetLoggedInUser);
}

//Handle signout
export function* SignOut() {
  try {
    yield axios.get("/api/v1/auth/logout");
    yield message.success("Sign Out");
    yield localStorage.removeItem("loggedIn");
    yield put(signOutSuccess());
    yield window.location.reload();
  } catch (error) {
    yield message.success("Error Signing Out");
    yield put(signOutFail(error.response.data.msg));
  }
}

export function* onSignOutStart() {
  yield takeLatest(AuthActionTypes.SIGNOUT_START, SignOut);
}

// Register user
export function* RegisterUser({ payload }) {
  try {
    const { data } = yield axios.post("/api/v1/auth/customer/register", payload);
    yield message.success("Registration Success");
    yield put(registerUserSuccess(data.user));
  } catch (error) {
    yield message.error(error.response.data.msg);
    yield put(registerUserFail(error.response.data.errMessage));
  }
}

export function* onRegisterUser() {
  yield takeLatest(AuthActionTypes.REGISTER_USER_START, RegisterUser);
}

//User SignIn

export function* SignIn({ payload }) {
  try {
    const { data } = yield axios.post("/api/v1/auth/customer/login", payload);

    yield localStorage.setItem("loggedIn", true);
    yield put(userSignInSuccess(data.user));
    yield message.success("Signed in succesffully");
  } catch (error) {
    yield localStorage.removeItem("loggedIn");
    yield put(userSignInFail(error.response.data.msg));
    yield message.error(error.response.data.msg);
  }
}

export function* onSignInStart() {
  yield takeLatest(AuthActionTypes.USER_SIGNIN_START, SignIn);
}
//User SignIn

export function* AgentSignIn({ payload }) {
  try {
    const { data } = yield axios.post("/api/v1/auth/agent/login", payload);

    yield localStorage.setItem("loggedIn", true);
    yield put(userSignInSuccess(data.user));
    yield message.success("Signed in succesffully");
  } catch (error) {
    yield localStorage.removeItem("loggedIn");
    yield put(userSignInFail(error.response.data.msg));
    yield message.error(error.response.data.msg);
  }
}

export function* onAgentSignInStart() {
  yield takeLatest(AuthActionTypes.AGENT_SIGNIN_START, AgentSignIn);
}

// export auth saga
export function* authSaga() {
  yield all([
    call(onAdminSignInStart),
    call(onGetLoggedInUser),
    call(onSignOutStart),
    call(onRegisterUser),
    call(onSignInStart),
    call(onAgentSignInStart),
  ]);
}
