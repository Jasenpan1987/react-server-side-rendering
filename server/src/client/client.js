// entry for client side js
import React from "react";
import reactDOM from "react-dom";
import Home from "./components/Home";

reactDOM.hydrate(<Home />, document.querySelector("#root"));
