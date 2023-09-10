import UITopNavigation from '@/components/ui/navigation/top';
import { logEvent } from '@/services/firebase/analytics';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

export default function PagesAmardrassilVolcoross() {
  useEffect(() => {
    logEvent('amardrassilVolcoross', 'screen');
  }, []);

  return (
    <>
      <NextSeo title="WowGanizer • 03 Volcoross" />
      <UITopNavigation title="🐍 03 - Volcoross" />
      <p className="m-[16px]">🚧 Work In progress 🚧</p>
    </>
  );
}
