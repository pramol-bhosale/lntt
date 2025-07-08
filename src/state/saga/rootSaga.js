import { all } from "redux-saga/effects";
import loginSagas from "./loginSaga";
import scheduleSagas from "./scheduleSaga";
import externalizationSagas from "./externalization";

export default function* rootSaga() {
  yield all([loginSagas(), scheduleSagas(), externalizationSagas()]);
}
