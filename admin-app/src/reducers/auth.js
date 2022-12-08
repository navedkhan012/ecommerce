import * as actions from "../constants/index";

const initState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
  },
  authenticate: false,
  authenticating: false,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        ...action.payload
      };

    case actions.LOGIN_SUCCESS:
      return {
        user: action.payload.user,
        token: action.payload.token,
        authenticating: false,
        authenticate: true,
      };

    case actions.LOGIN_FAILS:
      return {
        error: action.payload.error,
      };

      case actions.LOGOUT_REQUEST:
        return {
          ...initState,
        };

    default:
      return state;
  }
};

export default loginReducer;
