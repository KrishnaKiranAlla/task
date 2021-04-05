import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import configStore from "./store";
const storeInfo = configStore();

export default class Routes extends Component {
  render() {
    return (
      <Provider store={storeInfo.store}>
        <PersistGate loading={null} persistor={storeInfo.persistor}>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}
