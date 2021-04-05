import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import { createHashHistory } from "history";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const composeEnhancers = composeWithDevTools({});
const history = createHashHistory();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "payments"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configStore(initialState = { demo: null, user: null }) {
  const middleware = composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(history))
  );
  let store = createStore(persistedReducer, initialState, middleware);
  let persistor = persistStore(store);
  const storeInfo = {};
  storeInfo.store = store;
  storeInfo.persistor = persistor;
  return storeInfo;
}
