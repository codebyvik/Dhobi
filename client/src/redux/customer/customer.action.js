import UserActionTypes from "./customer.action.types";

export const updateUserAction = (newData) => ({
  type: UserActionTypes.UPDATE_USER_START,
  payload: newData,
});
export const updateUserSuccess = () => ({
  type: UserActionTypes.UPDATE_USER_SUCCESS,
});
export const updateUserFail = (error) => ({
  type: UserActionTypes.UPDATE_USER_FAIL,
  payload: error,
});

// update password
export const updatePasswordAction = (password) => ({
  type: UserActionTypes.UPDATE_PASSWORD_START,
  payload: password,
});
export const updatePasswordSuccess = () => ({
  type: UserActionTypes.UPDATE_PASSWORD_SUCCESS,
});
export const updatePasswordFail = (error) => ({
  type: UserActionTypes.UPDATE_PASSWORD_FAIL,
  payload: error,
});
