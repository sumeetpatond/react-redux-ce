import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import Reducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
