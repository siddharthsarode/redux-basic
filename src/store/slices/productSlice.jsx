import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      return await res.json();
    } catch (err) {
      throw err;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  // reducers: {
  //   loadProducts: (state, action) => {
  //     state.data = action.payload;
  //     state.isLoading = false;
  //   },
  //   setLoading: (state, action) => {
  //     state.isLoading = action.payload;
  //   },
  // },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        console.log("pending called");
        state.isLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        console.log("fulfilled called", state.data);
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { loadProducts, setLoading } = productSlice.actions;
export default productSlice.reducer;
