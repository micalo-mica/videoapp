import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    openSideBar: (state) => {
      state.isOpen = true;
    },
    closeSideBar: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSideBar, closeSideBar } = toggleSlice.actions;

export default toggleSlice.reducer;
