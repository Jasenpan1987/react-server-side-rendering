import React from "react";
import { renderRoutes } from "react-router-config"
import { connect } from "react-redux";

import Header from "./components/Header";
import { fetchCurrentUser } from "./actions";

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
}

function loadData(store) {
  return store.dispatch(fetchCurrentUser())
}

export default {
  loadData,
  component: App
}
