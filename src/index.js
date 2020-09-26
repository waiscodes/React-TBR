import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import "./index.css";

import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import BookCard from "./components/BookCard";
import AddNewBook from "./components/AddNewBook";

import RUsrProfile from "./reducers/RUsrProfile";
import Books from "./reducers/RBooks";
import { AddBooks } from "./actions/ABooks";

const rootReducer = combineReducers({
  user: RUsrProfile,
  books: Books,
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
    <AddNewBook />
  </Provider>,
  document.getElementById("root")
);
