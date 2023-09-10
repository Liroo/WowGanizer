import UITopNavigation from '@/components/ui/navigation/top';
import { logEvent } from '@/services/firebase/analytics';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

export default function PagesAmardrassilTindral() {
  useEffect(() => {
    logEvent('amardrassilTindral', 'screen');
  }, []);

  return (
    <>
      <NextSeo title="WowGanizer • 08 Tindral" />
      <UITopNavigation title="🐉 08 - Tindral" />
      <p className="m-[16px]">🚧 Work In progress 🚧</p>
    </>
  );
}
