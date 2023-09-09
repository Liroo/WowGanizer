'use client';

import UIFormInputButton from '@/components/ui/form/input/button';
import UIFormInputText from '@/components/ui/form/input/text';
import UILoadingThreeDot from '@/components/ui/loading/threeDot';
import { loginPassword, resetPassword } from '@/flux/auth/action';
import { useAppDispatch, useAppSelector } from '@/flux/hooks';
import { selectStatusByActionTypeId } from '@/flux/status/selector';
import StatusEnum from '@/types/status';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  email: string;
  password?: string;
};

export default function ShareSideBarAuthUnauthenticated() {
  const [forgetPasswordMode, setForgetPasswordMode] = useState<boolean>(false);
  const { status: resetPasswordStatus } = useAppSelector(
    selectStatusByActionTypeId(resetPassword.typePrefix),
  );
  const { status: loginPasswordStatus } = useAppSelector(
    selectStatusByActionTypeId(loginPassword.typePrefix),
  );
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const dispatch = useAppDispatch();

  const isLoading =
    loginPasswordStatus === StatusEnum.Pending ||
    resetPasswordStatus === StatusEnum.Pending;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (isLoading) return;
    if (forgetPasswordMode) dispatch(resetPassword({ email: data.email }));
    else
      dispatch(
        loginPassword({ email: data.email, password: data.password as string }),
      );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <UIFormInputText
              onBlur={onBlur}
              onChange={onChange}
              placeholder="Email"
              disabled={isLoading}
            />
          )}
          name="email"
        />

        {!forgetPasswordMode && (
          <Controller
            control={control}
            rules={{
              required: true,
              minLength: 6,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <UIFormInputText
                type="password"
                onBlur={onBlur}
                onChange={onChange}
                placeholder="Password"
                disabled={isLoading}
              />
            )}
            name="password"
          />
        )}

        {errors.email && <p className="text-[10px]">Email invalid</p>}
        {errors.password && (
          <p className="text-[10px]">Password must be 6 chars min</p>
        )}

        <UIFormInputButton
          type="button"
          className="!h-[24px] bg-[#eb5757] text-[12px] font-medium text-white"
          onClick={() => setForgetPasswordMode(!forgetPasswordMode)}
          disabled={isLoading}
        >
          {forgetPasswordMode ? 'Log in' : 'Forget password'}
        </UIFormInputButton>
        <UIFormInputButton
          type="submit"
          className="bg-[#2383e2] font-semibold text-white"
          disabled={isLoading}
        >
          {isLoading ? <UILoadingThreeDot /> : 'Submit'}
        </UIFormInputButton>
      </form>
    </div>
  );
}
