import {
  EXTERNALIZATION_ACTIVITY_FAILURE,
  EXTERNALIZATION_ACTIVITY_REQUEST,
  EXTERNALIZATION_ACTIVITY_SUCCESS,
} from "../../utils/Constants";

const initialState = {
  data: {},
  isLoading: false,
  error: null,
};

export const externalizationReducer = (state = initialState, action) => {
  switch (action?.type) {
    case EXTERNALIZATION_ACTIVITY_REQUEST:
      return { ...state, isLoading: true };
    case EXTERNALIZATION_ACTIVITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          activity: action?.payload?.data?.map((e) => ({
            label: e.name,
            value: e.id,
          })),
        },
      };
    case EXTERNALIZATION_ACTIVITY_FAILURE:
      return { ...state, isLoading: false, error: action?.payload };
    default:
      return { ...state };
  }
};
