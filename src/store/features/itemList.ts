import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../types";

export type ItemListState = {
  list: Array<any>;
};

const initialState: ItemListState = {
  list: [],
};

export const itemListSlice = createSlice({
  name: "itemList",
  initialState,
  reducers: {
    fillList: (state, action: PayloadAction<Record<string, Item>>) => {
      state.list = Object.entries(action.payload).map(
        ([itemId, { id, ...item }]) => ({
          id: `item-${itemId}`,
          ...item,
          isSold: false,
          quantity: 0,
        })
      );
    },
  },
});

export const { fillList } = itemListSlice.actions;
export default itemListSlice.reducer;
