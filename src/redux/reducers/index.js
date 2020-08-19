import { combineReducers } from "redux";
import { math } from "./math";
import { loggin } from "./loggin";

const reducers = combineReducers({
  math,
  loggin,
});

export default reducers;
