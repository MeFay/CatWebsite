import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
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
  },
});

export const { addToCart, removeFromCart, resetCart } = cartListSlice.actions;
export const selectCart = (state: RootState) => state.cart.cart;
export default cartListSlice.reducer;
