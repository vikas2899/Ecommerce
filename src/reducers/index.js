import { combineReducers } from "redux";
import fetchProductsReducer from "./fetchProductsReducer";
import fetchProductReducer from "./fetchProductReducer";
import loginReducer from "./loginReducer";
import addToCartReducer from "./addToCartReducer";
import { viewCartReducer } from "./viewCartReducer";
import { viewOrdersReducer } from "./viewOrdersReducer";

export default combineReducers({
  fetchProducts: fetchProductsReducer,
  fetchProduct: fetchProductReducer,
  cart: addToCartReducer,
  userCart: viewCartReducer,
  auth: loginReducer,
  orders: viewOrdersReducer,
});
