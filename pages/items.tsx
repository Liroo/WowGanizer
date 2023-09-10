import UITopNavigation from '@/components/ui/navigation/top';
import ViewItemAdd from '@/components/view/itemAdd';
import { useAppSelector } from '@/flux/hooks';
import { selectUserMe } from '@/flux/user/selector';
import { logEvent } from '@/services/firebase/analytics';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

export default function PagesItems() {
  const userMe = useAppSelector(selectUserMe);
  useEffect(() => {
    logEvent('items', 'screen');
  }, []);

  return (
    <>
      <NextSeo title="WowGanizer • Items" />
      <UITopNavigation title="📑 Items" />
      {userMe?.admin && <ViewItemAdd />}
      <p className="m-[16px]">🚧 Work In progress 🚧</p>
    </>
  );
}
