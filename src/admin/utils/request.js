import axios from "axios";
import Cookies from "js-cookie";

// create an axios instance
const service = axios.create({
  baseURL: `${process.env.VUE_APP_BASE_API}`, // api 的 base_url
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 30000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = Cookies.get("X-TOKEN");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
   */
  (response) => {
    const res = response.data;
    if (response.status !== 200) {
      return Promise.reject("error");
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
