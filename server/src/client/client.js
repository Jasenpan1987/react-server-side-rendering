import "babel-polyfill";
// entry for client side js
import React from "react";
import reactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import axios from "axios";

import rootReducer from "./reducers";

import Routes from "./Routes";

const axiosInstance = axios.create({ // create axios instance and pass it with thunk
  baseURL: "/api"
});

// this is the store on the client side, and we will have a store on the server side too
const store = createStore(
  rootReducer,
  window.INITIAL_STATE, // from server
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

reactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root"));
