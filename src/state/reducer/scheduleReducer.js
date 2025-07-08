import {
  CURRENT_USER_SCHEDULE_FAILURE,
  CURRENT_USER_SCHEDULE_REQUEST,
  CURRENT_USER_SCHEDULE_SUCCESS,
  SCHEDULE_CREATE_FAILURE,
  SCHEDULE_CREATE_REQUEST,
  SCHEDULE_CREATE_SUCCESS,
  SCHEDULE_DELETE_FAILURE,
  SCHEDULE_DELETE_REQUEST,
  SCHEDULE_DELETE_SUCCESS,
  SCHEDULE_UPDATE_FAILURE,
  SCHEDULE_UPDATE_REQUEST,
  SCHEDULE_UPDATE_SUCCESS,
  SME_AVAILABILITY_FAILURE,
  SME_AVAILABILITY_REQUEST,
  SME_AVAILABILITY_SUCCESS,
} from "../../utils/Constants";

const initialState = {
  data: {},
  isLoading: false,
  error: null,
};

export const scheduleReducer = (state = initialState, action) => {
  switch (action?.type) {
    case SCHEDULE_CREATE_REQUEST:
    case SCHEDULE_UPDATE_REQUEST:
    case SCHEDULE_DELETE_REQUEST:
    case CURRENT_USER_SCHEDULE_REQUEST:
    case SME_AVAILABILITY_REQUEST:
      return { ...state, isLoading: true };
    case SCHEDULE_CREATE_SUCCESS:
    case SCHEDULE_UPDATE_SUCCESS:
    case SCHEDULE_DELETE_SUCCESS:
    case CURRENT_USER_SCHEDULE_SUCCESS:
    case SME_AVAILABILITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action?.payload,
      };
    case SCHEDULE_CREATE_FAILURE:
    case SCHEDULE_UPDATE_FAILURE:
    case SCHEDULE_DELETE_FAILURE:
    case CURRENT_USER_SCHEDULE_FAILURE:
    case SME_AVAILABILITY_FAILURE:
      return { ...state, isLoading: false, error: action?.payload };
    default:
      return { ...state };
  }
};
