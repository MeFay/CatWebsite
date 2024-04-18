import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cat } from "../../types";

type CatListState = {
  list: Array<Cat>;
};

const initialState: CatListState = {
  list: [],
};

export const catListSlice = createSlice({
  name: "catList",
  initialState,
  reducers: {
    fillList: (state, action: PayloadAction<Record<string, Cat>>) => {
      state.list = Object.values(action.payload);
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const catIndex = state.list.findIndex((cat) => cat.id === action.payload);
      if (catIndex !== -1) {
        state.list[catIndex].isFavorite = !state.list[catIndex].isFavorite;
      }
    },
    markCatAsSold: (state, action: PayloadAction<string>) => {
      const catIndex = state.list.findIndex((cat) => cat.id === action.payload);
      if (catIndex !== -1) {
        state.list[catIndex].isSold = true;
      }
    },
    updateCatStatus: (
      state,
      action: PayloadAction<{ id: string; isSold: boolean }>
    ) => {
      const catIndex = state.list.findIndex(
        (cat) => cat.id === action.payload.id
      );
      if (catIndex !== -1) {
        state.list[catIndex].isSold = action.payload.isSold;
      }
    },
  },
});

export const { fillList, toggleFavorite, markCatAsSold, updateCatStatus } =
  catListSlice.actions;
export default catListSlice.reducer;
