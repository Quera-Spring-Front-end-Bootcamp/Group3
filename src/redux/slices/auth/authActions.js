import axios from 'axios'
import AXIOS from '../../../Utils/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      await AXIOS.post(
        "/auth/register",
        { username, email, password },
        config
      )
    
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ emailOrUsername, password }, { rejectWithValue }) => {
    try {
      const { data } = await AXIOS.post(
        "/auth/login",
        { emailOrUsername, password },
      )
      // store user's token in local storage
      localStorage.setItem('accessToken', data.data.accessToken)
      localStorage.setItem('refreshToken', data.data.refreshToken)

      return data.data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async ({ id, firstname, lastname, phone, email, username, password, accessToken }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('accessToken'),
        },
      }
      const { data } = await axios.put(
        `http://localhost:3000/api/users/${id}`,
        { firstname, lastname, phone, email, username, password },
        config
      )      
      return data.data
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

