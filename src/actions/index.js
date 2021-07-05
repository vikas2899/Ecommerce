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
  BUY_PRODUCT,
  VIEW_ORDERS,
  RESET_ORDERS,
  DELETE_ORDER,
  DELETE_CART,
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

export const addToCart = (userId, productId, pTitle, pPrice, pCategory) => {
  console.log(pTitle, pPrice, pCategory);
  return async function (dispatch, getState) {
    try {
      const resget = await jsonServer.get(`/usersCart/${userId}`);
      let oldCart = resget.data.cart;
      if (oldCart !== undefined) {
        if (oldCart.some((item) => item.productId === productId)) {
          return;
        }
        const res = await jsonServer.put(`/usersCart/${userId}`, {
          cart: [...oldCart, { productId, pTitle, pPrice, pCategory }],
          order: resget.data.order,
        });

        console.log("resput", res);
        dispatch({ type: ADD_TO_CART, payload: res.data.cart });
      } else {
        const res = await jsonServer.put(`/usersCart/${userId}`, {
          cart: [{ productId, pTitle, pPrice, pCategory }],
          order: resget.data.order, ///
        });
        console.log("else", res);
        dispatch({ type: ADD_TO_CART, payload: res.data.cart });
      }
    } catch (e) {
      const res = await jsonServer.post("/usersCart", {
        id: userId,
        cart: [{ productId, pTitle, pPrice, pCategory }],
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

export const deleteCart = (id, userId) => {
  console.log(id, userId);
  return async function (dispatch, getState) {
    const res = await jsonServer.get(`/usersCart/${userId}`);
    const currentCart = res.data.cart;
    let newCart = [];
    if (currentCart) {
      currentCart.map((c) => {
        if (c.productId !== id) {
          newCart.push(c);
        }
      });
      console.log("newCart", newCart);
      const res2 = await jsonServer.put(`/usersCart/${userId}`, {
        cart: newCart,
        order: res.data.order,
      });
      console.log("cart", res2);
      dispatch({ type: DELETE_CART, payload: res2.data.cart });
    }
  };
};

export const addToOrder = (userId, productId, pTitle, pPrice, pCategory) => {
  console.log(pTitle, pPrice, pCategory);
  return async function (dispatch, getState) {
    try {
      const resget = await jsonServer.get(`/usersCart/${userId}`);
      if (resget.data.order !== undefined) {
        let oldOrder = resget.data.order;
        if (oldOrder.some((item) => item.productId === productId)) {
          return;
        }
        const res = await jsonServer.put(`/usersCart/${userId}`, {
          order: [...oldOrder, { productId, pTitle, pPrice, pCategory }],
          cart: resget.data.cart,
        });

        console.log("resput", res);
      } else {
        const res = await jsonServer.put(`/usersCart/${userId}`, {
          id: userId,
          order: [{ productId, pTitle, pPrice, pCategory }],
          cart: resget.data.cart,
        });
        console.log("else", res);
      }
      // dispatch({ type: BUY_PRODUCT, payload: res.data.order });
    } catch (e) {
      console.log(e);
      const res = await jsonServer.post("/usersCart", {
        id: userId,
        order: [{ productId, pTitle, pPrice, pCategory }],
      });
      console.log("post", res.data);
      // dispatch({ type: BUY_PRODUCT, payload: res.data.order });
    }
  };
};

export const viewOrders = (userId) => {
  return async function (dispatch, getState) {
    const response = await jsonServer.get(`/usersCart/${userId}`);
    const order = response.data.order;
    dispatch({ type: VIEW_ORDERS, payload: order });
  };
};

export const resetOrder = () => {
  return {
    type: RESET_ORDERS,
  };
};

export const deleteOrder = (id, userId) => {
  return async function (dispatch, getState) {
    const res = await jsonServer.get(`/usersCart/${userId}`);
    const currentOrder = res.data.order;
    let newOrder = [];
    if (currentOrder) {
      currentOrder.map((o) => {
        if (o.productId !== id) {
          newOrder.push(o);
        }
      });
      const res2 = await jsonServer.put(`/usersCart/${userId}`, {
        cart: res.data.cart,
        order: newOrder,
      });
      console.log(res2);
      dispatch({ type: DELETE_ORDER, payload: res2.data.order });
    }
  };
};
