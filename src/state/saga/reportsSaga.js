import { call, put, takeLatest } from "redux-saga/effects";
import reports from "../../api/reports";
import {
  reportsFailure,
  reportsSuccess,
  smeSuggestionSuccess,
} from "../action/reports";
import {
  REPORTS_REQUESTED,
  SME_SUGGESTION_REQUESTED,
} from "../../utils/Constants";

function* fetchReports(action) {
    console.log(action)
  const { response, error } = yield call(reports.getReports, action.payload);
  if (response) {
    yield put(reportsSuccess(response));
  } else {
    yield put(reportsFailure(error));
  }
}

function* fetchSMESuggestions(action) {
  const { response, error } = yield call(
    reports.getSuggestions,
    action.payload
  );
  if (response) {
    yield put(smeSuggestionSuccess(response));
  } else {
    yield put(reportsFailure(error));
  }
}

export default function* reportSagas() {
  yield takeLatest(REPORTS_REQUESTED, fetchReports);

  yield takeLatest(SME_SUGGESTION_REQUESTED, fetchSMESuggestions);
}
