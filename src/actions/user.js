import { LOGIN_USER, LOGOUT_USER } from "./types";

function loginUser(data) {
  return async (dispatch) => {
    return dispatch({
      type: LOGIN_USER,
      payload: data,
    });
  };
}

function logOutUser() {
  return async (dispatch) => {
    return dispatch({
      type: LOGOUT_USER,
      payload: null,
    });
  };
}

export { loginUser, logOutUser };
