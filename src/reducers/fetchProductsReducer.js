import { FETCH_PRODUCTS } from "../types/types";

const INITIAL_STATE = {
  products: {},
};

const fetchProductsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default fetchProductsReducer;
