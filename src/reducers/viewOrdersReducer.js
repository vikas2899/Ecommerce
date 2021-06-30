import { VIEW_ORDERS, RESET_ORDERS, DELETE_ORDER } from "../types/types";

const INITIAL_STATE = {
  userOrders: {},
};

export const viewOrdersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VIEW_ORDERS:
      return { ...state.userOrders, ...action.payload };
    case RESET_ORDERS:
      return INITIAL_STATE;
    case DELETE_ORDER:
      if (action.payload !== []) {
        return { ...action.payload };
      } else {
        return null;
      }
    default:
      return state;
  }
};
