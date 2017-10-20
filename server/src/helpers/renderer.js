import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";

// We should have two routings for both of the client render and
// the server render. On the server side, we have to use the 
// StaticRouter rather than the BrowserRouter in the client Routes

export default function(req) {
  const content = renderToString(
    <StaticRouter
      location={req.path}
      context={{}} // for some redirect and error handling
    >
      <Routes />
    </StaticRouter>
  );
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}