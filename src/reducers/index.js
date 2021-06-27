import { combineReducers } from "redux";
import fetchProductsReducer from "./fetchProductsReducer";
import fetchProductReducer from "./fetchProductReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  fetchProducts: fetchProductsReducer,
  fetchProduct: fetchProductReducer,
  auth: loginReducer,
});
