import { createSlice } from '@reduxjs/toolkit';

export const burgerMenuSlice = createSlice({
  name: 'burgerMenuMode',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenuMode: state => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenuMode } = burgerMenuSlice.actions;

export const burgerMenuReducer = burgerMenuSlice.reducer;
