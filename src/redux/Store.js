import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import Reducer from "./Reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
