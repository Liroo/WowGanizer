import UITopNavigation from '@/components/ui/navigation/top';
import { logEvent } from '@/services/firebase/analytics';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

export default function PagesAmardrassilFyrakk() {
  useEffect(() => {
    logEvent('amardrassilFyrakk', 'screen');
  }, []);

  return (
    <>
      <NextSeo title="WowGanizer • 09 Fyrakk" />
      <UITopNavigation title="☄️ 09 - Fyrakk" />
      <p className="m-[16px]">🚧 Work In progress 🚧</p>
    </>
  );
}
