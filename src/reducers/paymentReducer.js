import { ADD_PAYMENTS } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case ADD_PAYMENTS:
      let index;
      const result = state.filter((test, i) => {
        if (test?.id === action.payload?.id) {
          index = i;
          return test;
        }
      });
      if (result?.length > 0) {
        state[index] = action.payload;
        return state;
      } else {
        return [...state, action.payload];
      }
    default:
      return state;
  }
};
