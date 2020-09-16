import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

const myStore = createStore();

ReactDOM.render(
  <Provider store={myStore}>
    <></>
  </Provider>,
  document.getElementById("root")
);
