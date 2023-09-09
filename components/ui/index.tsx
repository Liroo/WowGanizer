'use client';

import useCssMobileHeight from '@/hooks/useCssMobileHeight';
import UIToaster from './toaster';

export default function UIGlobal() {
  useCssMobileHeight();

  return (
    <>
      <UIToaster />
    </>
  );
}
