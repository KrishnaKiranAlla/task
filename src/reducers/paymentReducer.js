import { ADD_PAYMENTS, DELETE_PAYMENTS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_PAYMENTS:
      return action.payload;
    case DELETE_PAYMENTS:
      return null;
    default:
      return state;
  }
};
