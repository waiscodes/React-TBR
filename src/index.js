import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import RUserProfile from "./reducers/RUsrProfile";
import Signup from "./components/Signup";

const myStore = createStore(RUserProfile);

ReactDOM.render(
  <Provider store={myStore}>
    <Signup />
  </Provider>,
  document.getElementById("root")
);
