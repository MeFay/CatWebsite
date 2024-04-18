import { configureStore } from "@reduxjs/toolkit";
import catListReducer from "./features/catList";
import itemListReducer from "./features/itemList";
import cartListReducer from "./features/cartList";
import paymentFormReducer from "./features/paymentForm";

export const store = configureStore({
  reducer: {
    catList: catListReducer,
    itemList: itemListReducer,
    cart: cartListReducer,
    paymentForm: paymentFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
