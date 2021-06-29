import { RESET_CART } from "../types/types";

const INITIAL_STATE = {};

const resetCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESET_CART:
      return {};
    default:
      return state;
  }
};

export default resetCartReducer;
