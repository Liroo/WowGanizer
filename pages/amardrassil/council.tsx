import UITopNavigation from '@/components/ui/navigation/top';
import { logEvent } from '@/services/firebase/analytics';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

export default function PagesAmardrassilCouncil() {
  useEffect(() => {
    logEvent('amardrassilCouncil', 'screen');
  }, []);

  return (
    <>
      <NextSeo title="WowGanizer • 04 Council" />
      <UITopNavigation title="👪 04 - Council" />
      <p className="m-[16px]">🚧 Work In progress 🚧</p>
    </>
  );
}
