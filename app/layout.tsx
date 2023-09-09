import ShareSideBar from '@/components/share/sidebar';
import UIGlobal from '@/components/ui';
import { Providers } from '@/flux/provider';
import initFirebase from '@/services/firebase';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

initFirebase();

export const metadata: Metadata = {
  title: 'WowGaniser',
  description: 'Organize your raid.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <UIGlobal />
        <Providers>
          <ShareSideBar />
          {children}
        </Providers>
      </body>

      <Script id="whTooltips">
        {`const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};`}
      </Script>
      <Script src="https://wow.zamimg.com/js/tooltips.js" />
    </html>
  );
}
