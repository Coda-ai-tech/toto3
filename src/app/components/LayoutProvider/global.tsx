import { DataTypeProps } from '@/types';
import { Locale } from '@/app/i18n.config';
import { GetPageData } from '@/hook/useFetchData';
import MainWrapper from '@@/MainWrapper';
import Header from '@@/Header';
import Footer from '@@/Footer';
import ModalMask from '@@/ModalMask/intext';
import PageTransition from '../../[lang]/pageTransition';

const GlobalLayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) => {
  const lang = (await params).lang as Locale;
  const globalData = await GetPageData(DataTypeProps.local, [lang, 'global']);

  return (
    <body id='page'>
      <Header data={globalData} />
      <PageTransition>
        <MainWrapper>{children}</MainWrapper>
      </PageTransition>
      <Footer data={globalData} />
      <ModalMask />
    </body>
  );
};

export default GlobalLayout;
