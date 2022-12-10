import { combineReducers } from "redux";
import loginReducer from "./auth";
import { registerReducer } from "./register";
import { categoryReducer } from "./category";
// import { productsReducer } from "./products";
// import {ordersReducer} from './orders'
const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  categories: categoryReducer,
  // products: productsReducer,
  // orders: ordersReducer,
});

export default rootReducer;
