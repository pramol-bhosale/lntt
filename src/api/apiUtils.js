import axios from "axios";
const ErrorResponse = {
  payload: {
    message: "Something went wrong, please try again.",
  },
};

const get = async (path, token) => {
  const authHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    return await axios
      .get(path, token ? authHeader : null)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  } catch (ex) {
    if (ex) {
      throw ex;
    } else {
      throw ErrorResponse;
    }
  }
};

const put = async (path, token, data = []) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const parameters = {
      method: "put",
      url: path,
      headers,
      json: true,
    };

    if (data) {
      parameters.data = data;
    }

    return await axios(parameters)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  } catch (ex) {
    if (ex) {
      throw ex;
    } else {
      throw ErrorResponse;
    }
  }
};

const post = async (path, data, token) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return await axios
      .post(path, data, token ? { headers } : null)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  } catch (ex) {
    if (ex) {
      throw ex;
    } else {
      throw ErrorResponse;
    }
  }
};

const deleteRequest = async (path, token) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return await axios
      .delete(path, token ? { headers } : null)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  } catch (ex) {
    if (ex) {
      throw ex;
    } else {
      throw ErrorResponse;
    }
  }
};

export default {
  get,
  post,
  deleteRequest,
  put,
};
