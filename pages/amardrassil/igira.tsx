import UITopNavigation from '@/components/ui/navigation/top';
import { logEvent } from '@/services/firebase/analytics';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

export default function PagesAmardrassilIgira() {
  useEffect(() => {
    logEvent('amardrassilIgira', 'screen');
  }, []);

  return (
    <>
      <NextSeo title="WowGanizer • 02 Igira" />
      <UITopNavigation title="👣 02 - Igira" />
      <p className="m-[16px]">🚧 Work In progress 🚧</p>
    </>
  );
}
