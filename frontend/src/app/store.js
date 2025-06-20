import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../entities/user/model/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
