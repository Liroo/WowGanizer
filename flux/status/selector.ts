import { createSelector } from 'reselect';

import StatusEnum from '@/types/status';
import { RootState } from 'flux/store';

const idleStatus = {
  status: StatusEnum.Idle,
  error: null,
};

const selectStatusReducer = (state: RootState) => state.status;

export const selectStatusByActionTypeId = (
  actionType: string,
  id: string = 'default',
) =>
  createSelector(
    [selectStatusReducer],
    (statusReducer) => statusReducer[actionType]?.[id] ?? idleStatus,
  );
