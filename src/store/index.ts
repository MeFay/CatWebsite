import { configureStore } from "@reduxjs/toolkit";
import catListReducer from "./features/catList";
import itemListReducer from "./features/itemList";
import cartListReducer from "./features/cartList";

export const store = configureStore({
  reducer: {
    catList: catListReducer,
    itemList: itemListReducer,
    cart: cartListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
