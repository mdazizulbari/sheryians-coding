import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getproducts: (state, action) => {
        state.products = action.payload
        // passing the action data to state/store
    },
  },
});

export default productSlice.reducer;
export const { getproducts } = productSlice.actions;