import apiUtils from "./apiUtils";

const login = async (data) => {
  try {
    const response = await apiUtils.post(
      `http://localhost:9090/api/auth/login`,
      data
    );
    return { response };
  } catch (error) {
    return { error: error.data };
  }
};

export default {
    login
}
