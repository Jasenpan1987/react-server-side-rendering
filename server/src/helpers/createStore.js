import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

import rootReducer from "../client/reducers";

export default function(req) {
  const axiosInstance = axios.create({
    baseURL: "http://react-ssr-api.herokuapp.com/",
    headers: { cookie: req.get("cookie") || "" }
  });
  const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
  return store;
}
