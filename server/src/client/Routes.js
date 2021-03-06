import React from "react";

import App from "./App";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";

// need to convert the jsx syntax to this object syntax in order to fits the react-router-config
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...UsersListPage,
        path: "/users",
      },
      {
        ...AdminsListPage,
        path: "/admins"
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
