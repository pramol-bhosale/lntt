import {
  REPORTS_FAILURE,
  REPORTS_REQUESTED,
  REPORTS_SUCCESS,
  SME_SUGGESTION_REQUESTED,
  SME_SUGGESTION_SUCCESS,
} from "../../utils/Constants";

export const reportsRequested = (data) => {
  return {
    type: REPORTS_REQUESTED,
    payload: { ...data },
  };
};

export const reportsSuccess = (data) => {
  return {
    type: REPORTS_SUCCESS,
    payload: { ...data },
  };
};


export const smeSuggestionsRequested = (data) => {
  return {
    type: SME_SUGGESTION_REQUESTED,
    payload: { ...data },
  };
};

export const smeSuggestionSuccess = (data) => {
  return {
    type: SME_SUGGESTION_SUCCESS,
    payload: { ...data },
  };
};

export const reportsFailure = (data) => {
  return {
    type: REPORTS_FAILURE,
    payload: { ...data },
  };
};
