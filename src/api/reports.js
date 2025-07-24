import apiUtils from "./apiUtils";

const getReports = async (data) => {
  try {
    const token = localStorage.getItem("authToken");
    if (data?.smeEmail && data?.id) {
      const response = await apiUtils.get(
        `http://localhost:9090/api/report/getSMEEffort?month=${data.month}&id=${
          data.id
        }&userName${encodeURIComponent(data.userName)}`,
        token
      );
      return { response };
    } else {
      const response = await apiUtils.get(
        `http://localhost:9090/api/report/getAllSMEEffort?month=${data.month}`,
        token
      );

      return { response };
    }
  } catch (error) {
    return { error: error.data };
  }
};

const getSuggestions = async (data) => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await apiUtils.get(
      `http://localhost:9090/api/SMEHierachy?&page=${data.page}&size=${data.page}`,
      token
    );
    return { response };
  } catch (error) {
    return { error: error.data };
  }
};

export default { getReports, getSuggestions };
