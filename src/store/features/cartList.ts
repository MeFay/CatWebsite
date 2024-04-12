import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types";

type CartListState = {
  cart: Array<CartItem>;
};

const initialState: CartListState = {
  cart: [],
};

export const cartListSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    resetCart: (state) => {
      state.cart = [];
    },
    completePurchase: (state, action: PayloadAction<string[]>) => {
      state.cart = state.cart.map((item) =>
        action.payload.includes(item.id) ? { ...item, isSold: true } : item
      );
    },
  },
});

export const { addToCart, removeFromCart, resetCart, completePurchase } =
  cartListSlice.actions;
export default cartListSlice.reducer;
