import axios from "axios";
export const BASE_URL = "https://api.ssv-n1.uz/v1";
const axiosInstance = axios;
axiosInstance.defaults.baseURL = BASE_URL;

axiosInstance.interceptors.request.use(
  async (config) => {
    if (!config.headers.Authorization) {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        // Handle the case where the token is not present
        // You might want to redirect the user to the login page or take appropriate action
        console.error("Token is missing");
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const API = {
  //Post Request
  regiserUser: (payload) => axiosInstance.post("/user/auth/signup", payload),
  login: (payload) => axiosInstance.post("/user/auth/login", payload),
  smsCodeVerify: (payload) =>
    axiosInstance.post(`user/auth/verify-email?code=${payload}`, payload),
  // Get User Profile Data
  getUserProfile: () => axiosInstance.get("/user/user/profile"),
};
