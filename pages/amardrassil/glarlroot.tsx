import UITopNavigation from '@/components/ui/navigation/top';
import { logEvent } from '@/services/firebase/analytics';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

export default function PagesAmardrassilGlarlroot() {
  useEffect(() => {
    logEvent('amardrassilGlarlroot', 'screen');
  }, []);

  return (
    <>
      <NextSeo title="WowGanizer • 01 Glarlroot" />
      <UITopNavigation title="🪵 01 - Glarlroot" />
      <p className="m-[16px]">🚧 Work In progress 🚧</p>
    </>
  );
}
