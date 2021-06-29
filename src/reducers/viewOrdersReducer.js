import { VIEW_ORDERS, RESET_ORDERS } from "../types/types";

const INITIAL_STATE = {
  userOrders: {},
};

export const viewOrdersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VIEW_ORDERS:
      return { ...state.userOrders, ...action.payload };
    case RESET_ORDERS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
