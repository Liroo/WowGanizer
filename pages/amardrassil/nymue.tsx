import UITopNavigation from '@/components/ui/navigation/top';
import { logEvent } from '@/services/firebase/analytics';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

export default function PagesAmardrassilNymue() {
  useEffect(() => {
    logEvent('amardrassilNymue', 'screen');
  }, []);

  return (
    <>
      <NextSeo title="WowGanizer • 06 Nymue" />
      <UITopNavigation title="🍀 06 - Nymue" />
      <p className="m-[16px]">🚧 Work In progress 🚧</p>
    </>
  );
}
