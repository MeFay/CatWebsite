import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Cat } from "../../types";
//TODO: Create a Cat type

export type CatListState = {
  list: Array<any>;
};

const initialState: CatListState = {
  list: [],
};

export const catListSlice = createSlice({
  name: "catList",
  initialState,
  reducers: {
    fillList: (state, action: PayloadAction<Record<string, Cat>>) => {
      state.list = Object.entries(action.payload).map(
        ([catId, { id, ...cat }]) => ({
          id: `cat-${catId}`,
          ...cat,
          isSold: false,
          quantity: 0,
        })
      );
    },
  },
});

export const { fillList } = catListSlice.actions;
export default catListSlice.reducer;
