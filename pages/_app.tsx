import ShareGlobal from '@/components/share';
import ShareSideBar from '@/components/share/sidebar';
import UIGlobal from '@/components/ui';
import { wrapper } from '@/flux/store';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"
        />
      </Head>
      <DefaultSeo
        defaultTitle="WowGanizer"
        description="Wowganizer is a World of Warcraft gear organizer."
        openGraph={{
          type: 'website',
          locale: 'en_En',
          url: 'https://www.wowganizer.com/',
          siteName: 'WowgGanizer',
        }}
      />
      <main className={`${inter.className} flex h-full text-primary`}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={(store as any).__persisitor}>
            <ShareSideBar />
            <div className="min-h-full flex-1">
              <Component {...props.pageProps} />
            </div>

            <UIGlobal />
            <ShareGlobal />
          </PersistGate>
        </Provider>
        <Script id="whTooltips">
          {`const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};`}
        </Script>
        <Script src="https://wow.zamimg.com/js/tooltips.js" />
      </main>
    </>
  );
}
