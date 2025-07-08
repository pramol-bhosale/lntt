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

export const scheduleCreateRequested = (data) => {
  return {
    type: SCHEDULE_CREATE_REQUEST,
    payload: { ...data },
  };
};

export const scheduleCreateSuccess = (data) => {
  return {
    type: SCHEDULE_CREATE_SUCCESS,
    payload: { ...data },
  };
};

export const scheduleCreateFailure = (data) => {
  return {
    type: SCHEDULE_CREATE_FAILURE,
    payload: { ...data },
  };
};

export const scheduleUpdateRequested = (data) => {
  return {
    type: SCHEDULE_UPDATE_REQUEST,
    payload: { ...data },
  };
};

export const scheduleUpdateSuccess = (data) => {
  return {
    type: SCHEDULE_UPDATE_SUCCESS,
    payload: { ...data },
  };
};

export const scheduleUpdateFailure = (data) => {
  return {
    type: SCHEDULE_UPDATE_FAILURE,
    payload: { ...data },
  };
};

export const scheduleDeleteRequested = (data) => {
  return {
    type: SCHEDULE_DELETE_REQUEST,
    payload: { ...data },
  };
};

export const scheduleDeleteSuccess = (data) => {
  return {
    type: SCHEDULE_DELETE_SUCCESS,
    payload: { ...data },
  };
};

export const scheduleDeleteFailure = (data) => {
  return {
    type: SCHEDULE_DELETE_FAILURE,
    payload: { ...data },
  };
};

export const scheduleForCurrentUserRequested = (data) => {
  return {
    type: CURRENT_USER_SCHEDULE_REQUEST,
    payload: { ...data },
  };
};

export const scheduleForCurrentUserSuccess = (data) => {
  return {
    type: CURRENT_USER_SCHEDULE_SUCCESS,
    payload: { ...data },
  };
};

export const scheduleForCurrentUserFailure = (data) => {
  return {
    type: CURRENT_USER_SCHEDULE_FAILURE,
    payload: { ...data },
  };
};

export const smeAvailabilityDataRequest = (data) => {
  return {
    type: SME_AVAILABILITY_REQUEST,
    payload: { ...data },
  };
};

export const smeAvailabilityDataSuccess = (data) => {
  return {
    type: SME_AVAILABILITY_SUCCESS,
    payload: { ...data },
  };
};

export const smeAvailabilityDataFailure = (data) => {
  return {
    type: SME_AVAILABILITY_FAILURE,
    payload: { ...data },
  };
};
