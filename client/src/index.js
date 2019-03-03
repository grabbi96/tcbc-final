import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import jwtDecode from "jwt-decode";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store/index";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { setUser } from "./store/actions/authAction";
import { setToastMessage } from "./store/actions/metaAction";
import setAuthToken from "./utils/setAuthToken";

axios.defaults.baseURL = "http://localhost:8000";

let token = localStorage.getItem("auth_token");

if (token) {
  let decode = jwtDecode(token);

  if (decode.exp * 1000 > new Date().getTime()) {
    store.dispatch(setUser(decode));
    setAuthToken(token);
  } else {
    store.dispatch(setToastMessage("Login expired"));
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
