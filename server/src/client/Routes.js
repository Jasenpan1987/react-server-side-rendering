import React from "react";

import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
// UserListPage: { component, loadData }

// need to convert the jsx syntax to this object syntax in order to fits the react-router-config
export default [
  {
    ...HomePage,
    path: "/",
    exact: true
  },
  {
    ...UsersListPage,
    path: "/users",
  }
];
