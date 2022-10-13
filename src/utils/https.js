import axios from "axios";
import store from "@/store";
import { getToken } from "@/utils/cookies";

const service = axios.create({
  baseURL: import.meta.env.VITE_STAGING_API_URL,
});

const ResponseRequest = {
  TIMEOUT: "ECONNABORTED",
  NETWORKERROR: "Network Error",
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOTFOUND: 404,
  UNPROCESSABLE: 422,
  SERVERERROR: 500,
};

service.interceptors.request.use(
  (config) => {
    if (store.getters["token"]) {
      config.headers["Authorization"] = "Bearer " + getToken();
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
   */
  async (response) => {
    const res = await response.data;
    return res;
  },
  async (error) => {
    const status = await error.response.status;
    switch (status) {
      case ResponseRequest.NOTFOUND:
        alert(error.response.data.message);
        break;
      case ResponseRequest.SERVERERROR:
        alert(error.response.data.message);
        break;
      case ResponseRequest.UNAUTHORIZED:
        alert(error.response.data.message);
        break;
      case ResponseRequest.UNPROCESSABLE:
        alert(error.response.data.message);
        break;
      default:
        alert(error.message);
        break;
    }
    return Promise.reject(error);
  }
);

export default service;
