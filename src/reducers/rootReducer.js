import { combineReducers } from "redux";
import paymentReducer from "./paymentReducer";
import userReducer from "./userReducer";
import { connectRouter } from "connected-react-router";
import { createHashHistory } from "history";

const history = createHashHistory();

export default combineReducers({
  payments: paymentReducer,
  user: userReducer,
  router: connectRouter(history),
});
