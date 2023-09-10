import UITopNavigation from '@/components/ui/navigation/top';
import { logEvent } from '@/services/firebase/analytics';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

export default function PagesAmardrassilLarodar() {
  useEffect(() => {
    logEvent('amardrassilLarodar', 'screen');
  }, []);

  return (
    <>
      <NextSeo title="WowGanizer • 05 Larodar" />
      <UITopNavigation title="🐴 05 - Larodar" />
      <p className="m-[16px]">🚧 Work In progress 🚧</p>
    </>
  );
}
