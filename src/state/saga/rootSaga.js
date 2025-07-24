import { all } from "redux-saga/effects";
import loginSagas from "./loginSaga";
import scheduleSagas from "./scheduleSaga";
import externalizationSagas from "./externalization";
import reportSagas from "./reportsSaga";

export default function* rootSaga() {
  yield all([loginSagas(), scheduleSagas(), externalizationSagas(), reportSagas()]);
}
