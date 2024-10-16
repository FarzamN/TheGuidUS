import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  otp: null,
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: state => {
      state.user = null;
    },
    OTP: (state, action) => {
      state.otp = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {setUser, clearUser, OTP, setToken} = authSlice.actions;

export default authSlice.reducer;
