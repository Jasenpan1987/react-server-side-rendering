import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../client/reducers";

export default function() {
  const store = createStore(rootReducer, {}, applyMiddleware(thunk));
  return store;
}