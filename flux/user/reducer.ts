import { UserType } from '@/types/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type UserState = {
  hash: {
    [id: string]: UserType;
  };
};

const initialState: UserState = {
  hash: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.hash[action.payload.id] = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice;
