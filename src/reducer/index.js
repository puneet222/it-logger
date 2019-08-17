import { combineReducers } from "redux";
import logReducer from "./logsReducer";
import techsReducer from "./techsReducer";

export default combineReducers({
  log: logReducer,
  tech: techsReducer
});
