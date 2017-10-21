import React from "react";

import Home from "./components/Home";
import UsersList, { loadData } from "./components/UsersList";

// need to convert the jsx syntax to this object syntax in order to fits the react-router-config
export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    loadData,
    path: "/users",
    component: UsersList
  }
];
