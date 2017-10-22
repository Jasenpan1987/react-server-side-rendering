import React from "react";
import serialize from "serialize-javascript"; // protect us from XSS attacks
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import Routes from "../client/Routes";

// We should have two routings for both of the client render and
// the server render. On the server side, we have to use the 
// StaticRouter rather than the BrowserRouter in the client Routes

export default function(req, store, context) {
  // console.log(context);
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.path}
        context={context} // for some redirect and error handling
      >
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  return `
    <html>
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}
