import React from "react";

const NotFountPage = ({ staticContext={} }) => { // staticContext is only available on server side
  staticContext.notFound = true;
  return <h1>Opps, page is not found...</h1>
};

export default {
  component: NotFountPage
};
