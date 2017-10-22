import "babel-polyfill";
import express from "express";
import proxy from "express-http-proxy";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const PROXY_BASE = "http://react-ssr-api.herokuapp.com";

const app = express();

// proxy has to be the first route or middleware
app.use("/api", proxy(PROXY_BASE, { // this second param is only required for this end point
  proxyReqOptDecorator(opts) {
    opts.headers["x-forwarded-host"] = "localhost:3000"; // come back destination
    return opts;
  }
})); // any request for /api will be send to proxy base

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  }); // returns an array of promises

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log("listen to port 3000");
});
