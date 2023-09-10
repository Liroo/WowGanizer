import UITopNavigation from '@/components/ui/navigation/top';
import { logEvent } from '@/services/firebase/analytics';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

export default function PagesAmardrassilSmolderon() {
  useEffect(() => {
    logEvent('amardrassilSmolderon', 'screen');
  }, []);

  return (
    <>
      <NextSeo title="WowGanizer • 07 Smolderon" />
      <UITopNavigation title="🔥 07 - Smolderon" />
      <p className="m-[16px]">🚧 Work In progress 🚧</p>
    </>
  );
}
