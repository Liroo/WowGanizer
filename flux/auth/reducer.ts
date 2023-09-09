import { AuthStatus } from '@/types/auth';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type AuthState = {
  uid: string | null;
  email: string | null;
  authStatus: AuthStatus;
};

const initialState: AuthState = {
  uid: null,
  email: null,
  authStatus: AuthStatus.Unknown,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.authStatus = action.payload.authStatus;
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice;
