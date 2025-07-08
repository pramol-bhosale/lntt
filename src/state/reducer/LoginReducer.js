import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../../utils/Constants";

const initialState = {
  data: {},
  token: null,
  isLoading: false,
  error: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action?.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      localStorage.setItem("authToken", action?.payload?.data);
      return {
        ...state,
        isLoading: false,
        data: action?.payload,
        token: action?.payload?.data,
      };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action?.payload };
    default:
      return { ...state };
  }
};
