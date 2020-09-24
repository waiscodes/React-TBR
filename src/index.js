import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Signup from "./components/Signup";
import { RUsrProfile } from "./reducers/RUsrProfile";
import HomePage from "./components/HomePage";
import BookCard from "./components/BookCard";

const rootReducer = combineReducers({
  user: RUsrProfile,
});

const myStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={myStore}>
    <Signup />
    <HomePage />
    <BookCard />
  </Provider>,
  document.getElementById("root")
);
