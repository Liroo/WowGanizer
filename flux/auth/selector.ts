import { createSelector } from 'reselect';

import { RootState } from 'flux/store';

const selectAuthReducer = (state: RootState) => state.auth;

export const selectAuth = createSelector([selectAuthReducer], (authReducer) => {
  return authReducer;
});
