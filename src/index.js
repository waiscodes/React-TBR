import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import SignUp from "./components/Signup";
import LightDarkMode from "./reducers/rLightDarkMode";

const myStore = createStore(
  LightDarkMode,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={myStore}>
    <SignUp />
  </Provider>,
  document.getElementById("root")
);
