import AuthActionTypes from "./auth.action.types";

const InititalState = {
  loading: false,
  error: "",
  user: null,
  isAuthenticated: false,
  gettingUser: false,
};

export const authReducer = (state = InititalState, action) => {
  switch (action.type) {
    case AuthActionTypes.ADMIN_SIGNIN_START:
    case AuthActionTypes.USER_SIGNIN_START:
    case AuthActionTypes.REGISTER_USER_START:
      return {
        ...state,
        loading: true,
        error: "",
        isAuthenticated: false,
      };
    case AuthActionTypes.GET_LOGGED_IN_USER_START:
      return {
        ...state,
        gettingUser: true,
        error: "",
        isAuthenticated: false,
      };
    case AuthActionTypes.ADMIN_SIGNIN_SUCCESS:
    case AuthActionTypes.USER_SIGNIN_SUCCESS:
    case AuthActionTypes.GET_LOGGED_IN_USER_SUCCESS:
    case AuthActionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        gettingUser: false,
        user: action.payload,
        isAuthenticated: true,
      };
    case AuthActionTypes.ADMIN_SIGNIN_FAIL:
    case AuthActionTypes.GET_LOGGED_IN_USER_FAIL:
    case AuthActionTypes.USER_SIGNIN_FAIL:
    case AuthActionTypes.REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        gettingUser: false,
        user: null,
        error: action.type,
        isAuthenticated: false,
      };

    case AuthActionTypes.SIGNOUT_FAIL:
      return {
        ...state,
        error: action.type,
      };

    default:
      return state;
  }
};
