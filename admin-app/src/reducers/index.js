import { combineReducers } from "redux";
import loginReducer from "./auth";
import { registerReducer } from "./register";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer
});

export default rootReducer;
