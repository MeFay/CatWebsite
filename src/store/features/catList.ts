import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cat } from "../../types";

export type CatListState = {
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
      state.list = Object.entries(action.payload).map(
        ([catId, { id, ...cat }]) => ({
          id: `cat-${catId}`,
          ...cat,
          isSold: false,
          quantity: 0,
        })
      );
    },
    markCatAsSold: (state, action: PayloadAction<string>) => {
      const cat = state.list.find((cat) => cat.id === action.payload);
      if (cat) {
        cat.isSold = true;
        console.log(`Cat with id ${action.payload} is marked as sold.`);
      }
    },
  },
});
export const { fillList, markCatAsSold } = catListSlice.actions;
export default catListSlice.reducer;
