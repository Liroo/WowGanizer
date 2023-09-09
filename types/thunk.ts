import { AsyncThunk } from '@reduxjs/toolkit';

import { AppDispatch, RootState } from 'flux/store';

export type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

export type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
export type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
export type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export type ClubThunkArg = {
  key?: string;
  id?: string;
};

export type ClubThunkApiConfig = {
  state: RootState;
  dispatch: AppDispatch;
};
