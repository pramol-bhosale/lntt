import { call, put, takeLatest } from "redux-saga/effects";
import Login from "../../api/Login";
import LoginAction, { loginFailure, loginSuccess } from "../action/LoginAction";
import { LOGIN_REQUEST } from "../../utils/Constants";

function* loginUser(action){
    const {response, error} = yield call(Login.login, action.payload);
    if(response){
        yield put(loginSuccess(response));
    }else{
        yield put(loginFailure(error));
    }
}


export default function* loginSagas(){
    yield takeLatest(LOGIN_REQUEST, loginUser);
}