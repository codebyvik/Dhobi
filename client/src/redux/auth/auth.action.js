import AuthActionTypes from "./auth.action.types";

// Admin signIn
export const adminSignInAction = (LoginCredentials) => ({
  type: AuthActionTypes.ADMIN_SIGNIN_START,
  payload: LoginCredentials,
});

export const adminSignInSuccess = (user) => ({
  type: AuthActionTypes.ADMIN_SIGNIN_SUCCESS,
  payload: user,
});

export const adminSignInFail = (error) => ({
  type: AuthActionTypes.ADMIN_SIGNIN_FAIL,
  payload: error,
});

// get logged in user
export const getLoggedInUserAction = () => ({
  type: AuthActionTypes.GET_LOGGED_IN_USER_START,
});
export const getLoggedInuserSuccess = (user) => ({
  type: AuthActionTypes.GET_LOGGED_IN_USER_SUCCESS,
  payload: user,
});
export const getLoggedInUserFail = (error) => ({
  type: AuthActionTypes.GET_LOGGED_IN_USER_FAIL,
  payload: error,
});

// SignOut
export const signOutAction = () => ({
  type: AuthActionTypes.SIGNOUT_START,
});
export const signOutSuccess = () => ({
  type: AuthActionTypes.SIGNOUT_SUCCESS,
});
export const signOutFail = (error) => ({
  type: AuthActionTypes.SIGNOUT_FAIL,
  payload: error,
});

// SignOut
export const userSignInAction = (LoginCredentials) => ({
  type: AuthActionTypes.USER_SIGNIN_START,
  payload: LoginCredentials,
});
export const userSignInSuccess = (user) => ({
  type: AuthActionTypes.USER_SIGNIN_SUCCESS,
  payload: user,
});
export const userSignInFail = (error) => ({
  type: AuthActionTypes.USER_SIGNIN_FAIL,
  payload: error,
});

// Register User
export const registerUserAction = (UserData) => ({
  type: AuthActionTypes.REGISTER_USER_START,
  payload: UserData,
});
export const registerUserSuccess = (user) => ({
  type: AuthActionTypes.REGISTER_USER_SUCCESS,
  payload: user,
});
export const registerUserFail = (error) => ({
  type: AuthActionTypes.REGISTER_USER_FAIL,
  payload: error,
});

// Register User
export const agentSignInAction = (UserData) => ({
  type: AuthActionTypes.AGENT_SIGNIN_START,
  payload: UserData,
});
export const agentSignInSuccess = (user) => ({
  type: AuthActionTypes.AGENT_SIGNIN_SUCCESS,
  payload: user,
});
export const agentSignInFail = (error) => ({
  type: AuthActionTypes.AGENT_SIGNIN_FAIL,
  payload: error,
});
