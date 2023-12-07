import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../utils/Constants"

const Request = (data) => {
    return {
        action: LOGIN_REQUEST,
        payload: {
            ...data
        }
    }
}

const Success = (data) => {
    return {
        action: LOGIN_SUCCESS,
        payload: {
            ...data
        }
    }
}

const Failure = (data) => {
    return {
        action: LOGIN_FAILURE,
        payload: {
            ...data
        }
    }
}

export {
    Request,
    Success,
    Failure
};
