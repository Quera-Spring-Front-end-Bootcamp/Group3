import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

function getUserFromLocalStorage() {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
}

const initialState = {
  user: getUserFromLocalStorage(),
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      const userStringify = JSON.stringify(action.payload);
      localStorage.setItem("user", userStringify);
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      const userStringify = JSON.stringify({
        ...state.user,
        ...action.payload,
      });
      localStorage.setItem("user", userStringify);
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", action.payload);
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
      localStorage.setItem("refreshToken", action.payload);
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      toast.success("با موفقیت از سامانه خارج شدید!");
    },
  },
});

export const { setUser, updateUser, setAccessToken, setRefreshToken, logout } =
  authSlice.actions;
export default authSlice.reducer;
