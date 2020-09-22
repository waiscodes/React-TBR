import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import Header from "./components/Header";
import LightDarkMode from "./reducers/rLightDarkMode";
import Signup from "./components/Signup";

const myStore = createStore(
  LightDarkMode,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={myStore}>
    <Signup />
  </Provider>,
  document.getElementById("root")
);
