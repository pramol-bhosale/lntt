import apiUtils from "./apiUtils";

const create = async (data) => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await apiUtils.post(
      `http://localhost:9090/api/schedules`,
      data,
      token
    );
    return { response };
  } catch (error) {
    return { error: error.data };
  }
};

const update = async (data) => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await apiUtils.put(
      `http://localhost:9090/api/schedules?id=${data.id}`,
      token,
      data
    );
    return { response };
  } catch (error) {
    return { error: error.data };
  }
};

const deleteRequest = async (data) => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await apiUtils.deleteRequest(
      `http://localhost:9090/api/schedules?id=${data.id}`,
      token
    );
    return { response };
  } catch (error) {
    return { error: error.data };
  }
};

const getCurrentUser = async (data) => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await apiUtils.get(
      `http://localhost:9090/api/schedules?month=${data.month}&page=${data.page}&size=${data.size}`,
      token
    );
    return { response };
  } catch (error) {
    return { error: error.data };
  }
};

const getAvailableSMEs = async (data) => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await apiUtils.get(
      `http://localhost:9090/api/schedules/available?from_date=${data.fromDate}&to_date=${data.toDate}&from_time=${data.fromTime}&to_time=${data.toTime}&page=${data.page}&size=${data.page}`,
      token
    );
    return { response };
  } catch (error) {
    return { error: error.data };
  }
};

export default {
  create,
  update,
  deleteRequest,
  getCurrentUser,
  getAvailableSMEs
};
