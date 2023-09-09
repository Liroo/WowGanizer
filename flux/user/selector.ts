import { createSelector } from 'reselect';

import { RootState } from 'flux/store';

const selectAuthReducer = (state: RootState) => state.auth;
const selectUserReducer = (state: RootState) => state.user;

export const selectUser = createSelector([selectUserReducer], (userReducer) => {
  return userReducer;
});

export const selectUserMe = createSelector(
  [selectUserReducer, selectAuthReducer],
  (userReducer, authReducer) => {
    return userReducer.hash[authReducer.uid || ''];
  },
);
