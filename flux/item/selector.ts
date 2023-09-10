import { createSelector } from 'reselect';

import { RootState } from 'flux/store';

const selectItemReducer = (state: RootState) => state.item;

export const selectItem = createSelector([selectItemReducer], (itemReducer) => {
  return itemReducer;
});

export const selectItemById = (id: string) =>
  createSelector([selectItemReducer], (itemReducer) => {
    return itemReducer.hash[id];
  });
