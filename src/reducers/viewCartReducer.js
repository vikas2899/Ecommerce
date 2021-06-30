import { VIEW_CART, RESET_CART, DELETE_CART } from "../types/types";

const INITIAL_STATE = {
  userCart: {},
};

export const viewCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VIEW_CART:
      return { ...state.userCart, ...action.payload };
    case RESET_CART:
      return INITIAL_STATE;
    case DELETE_CART:
      if (action.payload !== []) {
        return { ...action.payload };
      } else {
        return null;
      }
    default:
      return state;
  }
};
