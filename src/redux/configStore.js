import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger/src";
import { rate } from "./reducers/rate";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

export const store = createStore(
  combineReducers({ rate }),
  applyMiddleware(logger, thunk)
);
