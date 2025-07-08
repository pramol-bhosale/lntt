import apiUtils from "./apiUtils";

const getActivityDropdown = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await apiUtils.get(
      `http://localhost:9090/api/activity/all`
    );
    return { response };
  } catch (error) {
    return { error: error.data };
  }
};

export default {
  getActivityDropdown,
};
