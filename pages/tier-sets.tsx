import UITopNavigation from '@/components/ui/navigation/top';
import { logEvent } from '@/services/firebase/analytics';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

export default function PagesTierSets() {
  useEffect(() => {
    logEvent('tierSets', 'screen');
  }, []);

  return (
    <>
      <NextSeo title="WowGanizer • Tier Sets" />
      <UITopNavigation title="📈 Tier Sets" />
      <p className="m-[16px]">🚧 Work In progress 🚧</p>
    </>
  );
}
