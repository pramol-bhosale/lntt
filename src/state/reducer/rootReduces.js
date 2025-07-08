import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";
import { scheduleReducer } from "./scheduleReducer";
import { externalizationReducer } from "./externalizationReducer";

const appReducer = combineReducers({
  loginReducer,
  scheduleReducer,
  externalizationReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
