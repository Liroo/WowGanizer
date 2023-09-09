import { ToastType } from '@/types/toast';
import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectToastReducer = (state: RootState) => state.toast;

export const selectToastList = createSelector(
  [selectToastReducer],
  (toastReducer) => {
    const keys = Object.keys(toastReducer);

    return keys
      .map((id: string) => toastReducer[id])
      .sort(
        (toastA: ToastType, toastB: ToastType) =>
          toastB.createdAt - toastA.createdAt,
      );
  },
);
