import { combineReducers } from "redux";
import loginReducer from "./auth";
import { registerReducer } from "./register";
import { categoryReducer } from "./category";
import { getProductReducer } from "./products";
// import {ordersReducer} from './orders'
const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  categories: categoryReducer,
  products: getProductReducer,
  // orders: ordersReducer,
});

export default rootReducer;
