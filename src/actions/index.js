import fakeStore from "../axios/fakeStore";
import jsonServer from "../axios/jsonServer";

import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  SIGN_IN,
  SIGN_OUT,
  ADD_TO_CART,
  VIEW_CART,
  RESET_CART,
} from "../types/types";

export const fetchProducts = () => {
  return async function (dispatch, getState) {
    const response = await fakeStore.get("/products");
    dispatch({ type: FETCH_PRODUCTS, payload: response });
  };
};

export const fetchProductById = (productId) => {
  return async function (dispatch, getState) {
    const response = await fakeStore.get(`/products/${productId}`);
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

export const addToCart = (userId, productId, pTitle, pPrice) => {
  console.log(pTitle, pPrice);
  return async function (dispatch, getState) {
    try {
      const resget = await jsonServer.get(`/usersCart/${userId}`);
      let oldCart = resget.data.cart;
      if (oldCart.some((item) => item.productId === productId)) {
        return;
      }
      const res = await jsonServer.put(`/usersCart/${userId}`, {
        cart: [...oldCart, { productId, pTitle, pPrice }],
      });

      console.log("resput", res);
      dispatch({ type: ADD_TO_CART, payload: res.data.cart });
    } catch (e) {
      const res = await jsonServer.post("/usersCart", {
        id: userId,
        cart: [{ productId, pTitle, pPrice }],
      });
      console.log("post", res.data);
      dispatch({ type: ADD_TO_CART, payload: res.data.cart });
    }
  };
};

export const viewCart = (userId) => {
  return async function (dispatch, getState) {
    const response = await jsonServer.get(`/usersCart/${userId}`);
    const cart = response.data.cart;
    dispatch({ type: VIEW_CART, payload: cart });
  };
};

export const resetCart = () => {
  return {
    type: RESET_CART,
  };
};
