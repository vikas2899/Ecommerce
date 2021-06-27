import { FETCH_PRODUCT } from "../types/types";

const INITIAL_STATE = {
  product: {},
};

const fetchProductReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default fetchProductReducer;
