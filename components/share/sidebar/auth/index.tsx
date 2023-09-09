'use client';

import { selectAuth } from '@/flux/auth/selector';
import { useAppSelector } from '@/flux/hooks';
import { AuthStatus } from '@/types/auth';
import ChevronSvg from 'icons/chevron.svg';
import { useEffect, useState } from 'react';
import ShareSideBarAuthAuthenticated from './authenticated';
import ShareSideBarAuthUnauthenticated from './unauthenticated';

export default function ShareSideBarAuth() {
  const { authStatus } = useAppSelector(selectAuth);
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const isLogged = authStatus === AuthStatus.Authenticated;

  useEffect(() => {
    if (isLogged) setOpen(false);
  }, [isLogged]);

  return (
    <>
      <div className="w-ful mt-auto px-[4px]">
        <div className={`${open ? '' : 'hidden'}`}>
          {isLogged ? (
            <ShareSideBarAuthAuthenticated />
          ) : (
            <ShareSideBarAuthUnauthenticated />
          )}
        </div>
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer select-none rounded px-[8px] py-[4px] hover:bg-primary hover:bg-opacity-10"
        >
          <ChevronSvg
            className="w-[12px] shrink-0 fill-current transition-transform duration-150"
            style={{
              transform: open ? 'rotate(-180deg)' : 'rotate(-90deg)',
            }}
          />
          <p className="ml-[8px] whitespace-nowrap">
            {isLogged ? 'Account' : 'Log In'}
          </p>
        </div>
      </div>
    </>
  );
}
