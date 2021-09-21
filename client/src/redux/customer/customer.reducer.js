import UserActionTypes from "./customer.action.types";

const InititalState = {
  updating: false,
  error: "",
};

export const userReducer = (state = InititalState, action) => {
  switch (action.type) {
    case UserActionTypes.UPDATE_USER_START:
    case UserActionTypes.UPDATE_PASSWORD_START:
      return {
        ...state,
        updating: true,
        error: "",
      };
    case UserActionTypes.UPDATE_USER_SUCCESS:
    case UserActionTypes.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        updating: false,
        error: "",
      };
    case UserActionTypes.UPDATE_PASSWORD_FAIL:
    case UserActionTypes.UPDATE_USER_FAIL:
      return {
        ...state,
        updating: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
