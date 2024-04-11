import { configureStore } from "@reduxjs/toolkit";
import catListReducer from "./features/catList";
import itemListReducer from "./features/itemList";

export const store = configureStore({
  reducer: {
    catList: catListReducer,
    itemList: itemListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
