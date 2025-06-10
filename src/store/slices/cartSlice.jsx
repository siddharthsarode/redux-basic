import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const isExistIndex = state.cartItems.findIndex(
        (cart) => cart.productId === action.payload
      );

      if (isExistIndex !== -1) {
        state.cartItems[isExistIndex].quantity += 1;
      } else {
        state.cartItems.push({ productId: action.payload, quantity: 1 });
        state.totalQuantity += 1;
      }

      // console.log("cart", state);
    },

    increaseQuantity(state, action) {
      const item = state.cartItems.find(
        (cart) => cart.productId === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.cartItems.find(
        (cart) => cart.productId === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cart) => cart.productId === action.payload
      );
      if (itemIndex !== -1) {
        state.totalQuantity -= state.cartItems[itemIndex].quantity;
        state.cartItems.splice(itemIndex, 1);
      }
    },
  },
});

export const { addItem, increaseQuantity, removeItem, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
