import { ADD_TO_CART } from "../types/types";

const INITIAL_STATE = {
  modalShow: false,
};

const addToCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, modalShow: true };
    default:
      return state;
  }
};

export default addToCartReducer;
