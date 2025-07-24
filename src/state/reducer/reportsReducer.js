import {
  REPORTS_FAILURE,
  REPORTS_REQUESTED,
  REPORTS_SUCCESS,
  SME_SUGGESTION_REQUESTED,
  SME_SUGGESTION_SUCCESS,
} from "../../utils/Constants";

const initialState = {
  data: {},
  isLoading: false,
  error: null,
  suggestions: {},
};

export const reportsReducer = (state = initialState, action) => {
    console.log(action);
  switch (action?.type) {
    case REPORTS_REQUESTED:
    case SME_SUGGESTION_REQUESTED:
      return { ...state, isLoading: true };
    case REPORTS_SUCCESS:
      return { ...state, isLoading: false, data: action?.payload };
    case SME_SUGGESTION_SUCCESS:
      return { ...state, isLoading: false, suggestions: action?.payload };
    case REPORTS_FAILURE:
      return { ...state, isLoading: false, error: action?.payload };
    default:
      return { ...state };
  }
};


