import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    loadExample: (state, action) => {
      state.info = action.payload;
    },
    removeExample: (state, action) => {
      state.info = null;
    },
  },
});

export const { loadExample, removeExample } = exampleSlice.actions;

export default exampleSlice.reducer;
