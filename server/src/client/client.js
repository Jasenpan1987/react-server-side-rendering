import "babel-polyfill";
// entry for client side js
import React from "react";
import reactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import rootReducer from "./reducers";

import Routes from "./Routes";

// this is the store on the client side, and we will have a store on the server side too
const store = createStore(rootReducer, {}, applyMiddleware(thunk));

reactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root"));
