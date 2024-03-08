import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    displayShortMenu: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
      // state.displayShortMenu = state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
      state.displayShortMenu = false;
    },
    showShortMenu: (state) => {
      state.displayShortMenu = true;
    },
    hideShortMenu: (state) => {
      state.displayShortMenu = false;
    }
  },
});

export const { toggleMenu, closeMenu,showShortMenu, hideShortMenu } = appSlice.actions;
export default appSlice.reducer;
