import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import SignUp from "./components/Signup";

const myStore = createStore();

ReactDOM.render(
  <Provider store={myStore}>
    <SignUp />
  </Provider>,
  document.getElementById("root")
);
