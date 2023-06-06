import axios from "axios";
import { setAccessToken, logout } from "../redux/slices/authSlice";
import store from "../redux/store";

const AXIOS = axios.create({
  baseURL: "http://localhost:3000/api",
});

let accessToken = localStorage.getItem("accessToken");
let refreshToken = localStorage.getItem("refreshToken");

store.subscribe(() => {
  accessToken = store.getState().auth.accessToken;
  refreshToken = store.getState().auth.refreshToken;
});

AXIOS.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers["x-auth-token"] = `${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

AXIOS.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest._retry &&
      originalRequest.url !== "/auth/refreshtoken"
    ) {
      originalRequest._retry = true;
      return AXIOS.post("/auth/refreshtoken", {
        refreshToken: refreshToken || "",
      })
        .then((res) => {
          if (res.status === 200) {
            const newAccessToken = res.data.data.accessToken;

            store.dispatch(setAccessToken(newAccessToken));
            AXIOS.defaults.headers["x-auth-token"] = newAccessToken;
            originalRequest.headers["x-auth-token"] = newAccessToken;
            return AXIOS(originalRequest);
          }
        })
        .catch((error) => {
          store.dispatch(logout());
          return Promise.reject(error);
        });
    }
    return Promise.reject(error);
  }
);

export default AXIOS;
