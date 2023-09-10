import { ItemType } from '@/types/wow/item';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ItemState = {
  hash: {
    [id: string]: ItemType;
  };
};

const initialState: ItemState = {
  hash: {},
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<ItemType>) => {
      state.hash[action.payload.id] = action.payload;
    },
  },
});

export const { setItem } = itemSlice.actions;

export default itemSlice;
