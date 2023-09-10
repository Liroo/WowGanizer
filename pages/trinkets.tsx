import UITopNavigation from '@/components/ui/navigation/top';
import { logEvent } from '@/services/firebase/analytics';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

export default function PagesTrinkets() {
  useEffect(() => {
    logEvent('trinkets', 'screen');
  }, []);

  return (
    <>
      <NextSeo title="WowGanizer • Trinkets" />
      <UITopNavigation title="📊 Trinkets" />
      <p className="m-[16px]">🚧 Work In progress 🚧</p>
    </>
  );
}
