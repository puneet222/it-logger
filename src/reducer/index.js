import { combineReducers } from "redux";
import logReducer from "./logsReducer";

export default combineReducers({
  logs: logReducer
});
