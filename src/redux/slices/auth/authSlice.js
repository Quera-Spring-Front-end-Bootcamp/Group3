import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin, updateProfile } from './authActions'

// initialize userToken from local storage
const accessToken = localStorage.getItem('accessToken')
  ? localStorage.getItem('accessToken')
  : null

const initialState = {
  user: null, 
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  loading: false,
  error: null,
  success: false, // for monitoring the registration process.
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
  extraReducers: (builder) => {
    builder
            // register user
            .addCase(registerUser.pending, (state) => {
              state.loading = true
              state.error = null
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
              state.loading = false
              state.success = true 
            })
            .addCase(registerUser.rejected,(state, { payload }) => {
              state.loading = false
              state.error = payload
            })
           // login user
            .addCase(userLogin.pending, (state) => {
              state.loading = true
              state.error = null
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
              state.loading = false
              state.success = true
              state.user = payload.toBeSendUserData
              state.accessToken = payload.accessToken
              state.refreshToken = payload.refreshToken
            })
            .addCase(userLogin.rejected,(state, { payload }) => {
              state.loading = false
              state.success = false
              state.error = payload
            })
              // update profile
              .addCase(updateProfile.pending, (state) => {
              state.loading = true
              state.error = null
            })
            .addCase(updateProfile.fulfilled, (state, { payload }) => {
              state.loading = false
              state.user = payload
            })
            .addCase(updateProfile.rejected,(state, { payload }) => {
              state.loading = false
              state.error = payload
            })
  },
});

export const {logout} =
  authSlice.actions;
export default authSlice.reducer;
