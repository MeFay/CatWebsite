import { configureStore } from "@reduxjs/toolkit";
import catListReducer from "./features/catList";

export const store = configureStore({
  reducer: {
    catList: catListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
