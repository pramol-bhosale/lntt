import { call, put, takeLatest } from "redux-saga/effects";
import Login from "../../api/Login";
import LoginAction, { loginFailure, loginSuccess } from "../action/LoginAction";
import {
  CURRENT_USER_SCHEDULE_REQUEST,
  LOGIN_REQUEST,
  SCHEDULE_CREATE_REQUEST,
  SCHEDULE_DELETE_REQUEST,
  SCHEDULE_UPDATE_REQUEST,
  SME_AVAILABILITY_REQUEST,
} from "../../utils/Constants";
import schedule from "../../api/schedule";
import {
  scheduleCreateFailure,
  scheduleCreateSuccess,
  scheduleDeleteFailure,
  scheduleDeleteSuccess,
  scheduleForCurrentUserFailure,
  scheduleForCurrentUserSuccess,
  scheduleUpdateFailure,
  scheduleUpdateSuccess,
  smeAvailabilityDataFailure,
  smeAvailabilityDataSuccess,
} from "../action/scheduleAction";

function* create(action) {
  const { response, error } = yield call(schedule.create, action.payload);
  if (response) {
    yield put(scheduleCreateSuccess(response));
  } else {
    yield put(scheduleCreateFailure(error));
  }
}

function* update(action) {
  const { response, error } = yield call(schedule.update, action.payload);
  if (response) {
    yield put(scheduleUpdateSuccess(response));
  } else {
    yield put(scheduleUpdateFailure(error));
  }
}

function* deleteRequest(action) {
  const { response, error } = yield call(
    schedule.deleteRequest,
    action.payload
  );
  if (response) {
    yield put(scheduleDeleteSuccess(response));
  } else {
    yield put(scheduleDeleteFailure(error));
  }
}

function* fetchCurrentUsers(action) {
  const { response, error } = yield call(
    schedule.getCurrentUser,
    action.payload
  );
  if (response) {
    yield put(scheduleForCurrentUserSuccess(response));
  } else {
    yield put(scheduleForCurrentUserFailure(error));
  }
}

function* fetchAllAvailableSMEs(action) {
  const { response, error } = yield call(
    schedule.getAvailableSMEs,
    action.payload
  );
  if (response) {
    yield put(smeAvailabilityDataSuccess(response));
  } else {
    yield put(smeAvailabilityDataFailure(error));
  }
}

export default function* scheduleSagas() {
  yield takeLatest(SCHEDULE_CREATE_REQUEST, create);

  yield takeLatest(SCHEDULE_UPDATE_REQUEST, update);

  yield takeLatest(SCHEDULE_DELETE_REQUEST, deleteRequest);

  yield takeLatest(CURRENT_USER_SCHEDULE_REQUEST, fetchCurrentUsers);

  yield takeLatest(SME_AVAILABILITY_REQUEST, fetchAllAvailableSMEs);
}
