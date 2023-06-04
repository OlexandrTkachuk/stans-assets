import { configureStore } from '@reduxjs/toolkit';
import { burgerMenuReducer } from './slices/burgerMenuSlice';

export const store = configureStore({
  reducer: {
    burgerMenuMode: burgerMenuReducer,
  },
});
