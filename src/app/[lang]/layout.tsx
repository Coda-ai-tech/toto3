import type { Viewport } from 'next';
import { ConfigContextProvider } from '@/context/config.context';
import { GoogleTagManager } from '@next/third-parties/google';
import { Locale } from '@/app/i18n.config';
import { DataTypeProps } from '@/types';
import { GetPageData } from '@/hook/useFetchData';
import Script from 'next/script';
import GlobalConfig from '@@/GlobalConfig';
import '@/styles/global.scss';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  minimumScale: 1,
  maximumScale: 5,
};

const siteScheme = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TOTO Hong Kong',
  alternateName: ['TOTO HK', 'TOTO-Hong-Kong', 'TOTO-HK'],
  url: 'https://hk.toto.com/',
};

const RootLayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) => {
  const lang = (await params).lang as Locale;
  const globalData = await GetPageData(DataTypeProps.local, [lang, 'global']);

  return (
    <html lang={lang}>
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTM}`} />
      <Script
        id='json-ld-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteScheme, null, '\t'),
        }}
      />
      <link rel='icon' href={globalData?.favIcon ? globalData.favIcon : '/assets/favicon.ico'} sizes='any' />

      <ConfigContextProvider>
        <GlobalConfig data={globalData} />
        {children}
      </ConfigContextProvider>
    </html>
  );
};

export default RootLayout;
