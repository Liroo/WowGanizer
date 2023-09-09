import ShareGlobal from '@/components/share';
import ShareSideBar from '@/components/share/sidebar';
import UIGlobal from '@/components/ui';
import { Providers } from '@/flux/provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WowGanizer',
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
        <Providers>
          <ShareSideBar />
          {children}

          <UIGlobal />
          <ShareGlobal />
        </Providers>
      </body>

      <Script id="whTooltips">
        {`const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};`}
      </Script>
      <Script src="https://wow.zamimg.com/js/tooltips.js" />
    </html>
  );
}
