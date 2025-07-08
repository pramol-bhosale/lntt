import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../utils/Constants"

export const loginRequest = (data) => {
    return {
        type: LOGIN_REQUEST,
        payload: {
            ...data
        }
    }
}

export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            ...data
        }
    }
}

export const loginFailure = (data) => {
    return {
        type: LOGIN_FAILURE,
        payload: {
            ...data
        }
    }
}

