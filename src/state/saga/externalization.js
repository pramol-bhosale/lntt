import { call, put, takeLatest } from "redux-saga/effects";
import Login from "../../api/Login";
import LoginAction, { loginFailure, loginSuccess } from "../action/LoginAction";
import { EXTERNALIZATION_ACTIVITY_REQUEST, LOGIN_REQUEST } from "../../utils/Constants";
import externalization from "../../api/externalization";
import { externalizationActivityFailure, externalizationActivitySuccess } from "../action/externalizationAction";

function* fetchActivityDropdownOptions(action){
    const {response, error} = yield call(externalization.getActivityDropdown);
    if(response){
        yield put(externalizationActivitySuccess(response));
    }else{
        yield put(externalizationActivityFailure(error));
    }
}


export default function* externalizationSagas(){
    yield takeLatest(EXTERNALIZATION_ACTIVITY_REQUEST, fetchActivityDropdownOptions);
}