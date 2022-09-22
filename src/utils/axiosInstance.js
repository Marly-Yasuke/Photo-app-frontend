import axios from "axios";

const instance = axios.create();

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers = { Authorization: "Bearer " + token };
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
