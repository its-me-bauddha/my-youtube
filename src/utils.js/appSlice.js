import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isSidebarOpen: true,
    isShowSearchCard: true,
    isWatchPage: false,
    
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isSidebarOpen = false;
    },
    showCard: (state) => {
      state.isShowSearchCard = !state.isShowSearchCard;
    },
    watchPageOpen: (state) => {
      state.isWatchPage = true;
    },
    
  },
});

export const { toggleMenu, closeMenu, showCard, watchPageOpen  } =
  appSlice.actions;
export default appSlice.reducer;
