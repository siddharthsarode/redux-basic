import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../../product.js";

const initialState = {
  data: products,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProduct: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getAllProduct } = productSlice.actions;
export default productSlice.reducer;
