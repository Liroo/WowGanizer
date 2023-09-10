import UITopNavigation from '@/components/ui/navigation/top';
import { logEvent } from '@/services/firebase/analytics';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

export default function PagesSpecs() {
  useEffect(() => {
    logEvent('specs', 'screen');
  }, []);

  return (
    <>
      <NextSeo title="WowGanizer • Specs" />
      <UITopNavigation title="📘 Items" />
      <p className="m-[16px]">🚧 Work In progress 🚧</p>
    </>
  );
}
