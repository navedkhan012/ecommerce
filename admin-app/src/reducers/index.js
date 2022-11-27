import { combineReducers } from "redux";
import loginReducer from "./auth";

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
