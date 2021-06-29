import { VIEW_CART, RESET_CART } from "../types/types";

const INITIAL_STATE = {
  userCart: {},
};

export const viewCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VIEW_CART:
      return { ...state.userCart, ...action.payload };
    case RESET_CART:
      return INITIAL_STATE;
    default:
      return state;
  }
};
