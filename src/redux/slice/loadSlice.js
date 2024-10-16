import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  load: false,
};

export const loadSlice = createSlice({
  name: 'load',
  initialState,
  reducers: {
    setLoad: (state, action) => {
      state.load = action.payload;
    },
  },
});

export const {setLoad} = loadSlice.actions;

export default loadSlice.reducer;
