import { logEvent } from '@/services/firebase/analytics';
import { useEffect } from 'react';

export default function PagesIndex() {
  useEffect(() => {
    logEvent('home', 'screen');
  }, []);

  return (
    <div>
      <a href="https://ptr-2.wowhead.com/item=207800">ICI</a>
      <br />
      Coucou
    </div>
  );
}
