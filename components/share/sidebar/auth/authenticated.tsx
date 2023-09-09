'use client';

import UIFormInputButton from '@/components/ui/form/input/button';
import UILoadingThreeDot from '@/components/ui/loading/threeDot';
import { logout } from '@/flux/auth/action';
import { useAppDispatch, useAppSelector } from '@/flux/hooks';
import { selectStatusByActionTypeId } from '@/flux/status/selector';
import { selectUserMe } from '@/flux/user/selector';
import StatusEnum from '@/types/status';

export default function ShareSideBarAuthAuthenticated() {
  const { status: logoutStatus } = useAppSelector(
    selectStatusByActionTypeId(logout.typePrefix),
  );
  const dispatch = useAppDispatch();
  const userMe = useAppSelector(selectUserMe);

  const isLoading = logoutStatus === StatusEnum.Pending;

  const onClickLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className="mb-[8px] flex items-end px-[8px] pt-[4px]">
        <p className="whitespace-nowrap text-[12px] font-semibold text-primary text-opacity-50">
          Type
        </p>
        <p className="ml-auto text-[12px]">
          {userMe?.admin ? 'Admin' : 'User'}
        </p>
      </div>
      <div className="mb-[8px] flex items-end px-[8px] pt-[4px]">
        <p className="whitespace-nowrap text-[12px] font-semibold text-primary text-opacity-50">
          Mail
        </p>
        <p className="ml-auto text-[12px]">{userMe?.email}</p>
      </div>
      <UIFormInputButton
        type="button"
        className="!h-[24px] bg-[#eb5757] text-[12px] font-medium text-white"
        onClick={() => onClickLogout()}
        disabled={isLoading}
      >
        {isLoading ? <UILoadingThreeDot /> : 'Logout'}
      </UIFormInputButton>
    </div>
  );
}
