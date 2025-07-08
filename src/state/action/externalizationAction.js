import {
  EXTERNALIZATION_ACTIVITY_FAILURE,
  EXTERNALIZATION_ACTIVITY_REQUEST,
  EXTERNALIZATION_ACTIVITY_SUCCESS,
} from "../../utils/Constants";

export const externalizationActivityRequested = () => {
  return {
    type: EXTERNALIZATION_ACTIVITY_REQUEST,
  };
};

export const externalizationActivitySuccess = (data) => {
  return {
    type: EXTERNALIZATION_ACTIVITY_SUCCESS,
    payload: { ...data },
  };
};

export const externalizationActivityFailure = (data) => {
  return {
    type: EXTERNALIZATION_ACTIVITY_FAILURE,
    payload: {
      ...data,
    },
  };
};
