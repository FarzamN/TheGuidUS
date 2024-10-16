import {authSlice, loadSlice} from '../slice';
import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  load: loadSlice.reducer,
});

export {rootReducer};
