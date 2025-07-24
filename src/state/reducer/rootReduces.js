import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";
import { scheduleReducer } from "./scheduleReducer";
import { externalizationReducer } from "./externalizationReducer";
import { reportsReducer } from "./reportsReducer";

const appReducer = combineReducers({
  loginReducer,
  scheduleReducer,
  externalizationReducer,
  reportsReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
