import { ADD_PAYMENTS } from "./types";

function addPayment(data) {
  return async (dispatch) => {
    return dispatch({
      type: ADD_PAYMENTS,
      payload: data,
    });
  };
}

export { addPayment };
