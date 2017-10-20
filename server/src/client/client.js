// entry for client side js
import React from "react";
import reactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

reactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.querySelector("#root"));
