import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lightTheme: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toogleTheme: (state, action) => {
      state.lightTheme = action.payload;
    },
  },
});

export const { toogleTheme } = themeSlice.actions;
export default themeSlice.reducer;
