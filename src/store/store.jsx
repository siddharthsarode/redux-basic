import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../store/slices/productSlice";
import cartReducer from "../store/slices/cartSlice";
import { apiMiddleware } from "./middlewares/api";

export const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});
