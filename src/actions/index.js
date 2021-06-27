import axios from "../axios/axios";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  SIGN_IN,
  SIGN_OUT,
} from "../types/types";

export const fetchProducts = () => {
  return async function (dispatch, getState) {
    const response = await axios.get("/products");
    dispatch({ type: FETCH_PRODUCTS, payload: response });
  };
};

export const fetchProductById = (productId) => {
  return async function (dispatch, getState) {
    const response = await axios.get(`/products/${productId}`);
    dispatch({ type: FETCH_PRODUCT, payload: response });
  };
};

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
