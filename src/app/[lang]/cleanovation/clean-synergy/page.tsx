import type { Metadata } from 'next';
import { Locale } from '@/app/i18n.config';
import { GetBreadcrumbs, GetMetadata } from '@/hook/useGlobalPage';
import GlobalPageProvider from '@@/GlobalPageProvider';
import GlobalLayout from '@/app/components/LayoutProvider/global';
import PageSetting from './pageSetting'; // ! PageSetting for import provided css, js, side effect setup etc....
import En from './en'; // ! English Content
import Zh from './zh'; // ! Chinese Content

const pagePath = [
  {
    enTitle: 'TOTO CLEANOVATION - CLEAN SYNERGY Technology & Design',
    zhTitle: 'TOTO CLEANOVATION - CLEAN SYNERGY Technology & Design',
    slug: 'clean-synergy',
  },
];

const currentPageObj = pagePath[pagePath.length - 1];
const metaProps = {
  en: {
    title: currentPageObj.enTitle,
    description: 'TOTO innovation brings a new world of clean to life, enriching every moment of every day.',
    keywords:
      'TOTO・CLEANOVATION・CLEAN SYNERGY・CEFIONTECT・EWATER+・PREMIST・TORNADO FLUSH・NEOREST・WASHLET・WASHLET+',
    canonical: `/${currentPageObj.slug}`,
  },
  zh: {
    title: currentPageObj.zhTitle,
    description: 'TOTO innovation brings a new world of clean to life, enriching every moment of every day.',
    keywords:
      'TOTO・CLEANOVATION・CLEAN SYNERGY・CEFIONTECT・EWATER+・PREMIST・TORNADO FLUSH・NEOREST・WASHLET・WASHLET+',
    canonical: `/${currentPageObj.slug}`,
  },
};

const breadcrumb = GetBreadcrumbs(pagePath);
const metadata = GetMetadata(metaProps);

export const generateMetadata = async ({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> => {
  const { lang } = await params;
  return metadata[lang];
};

const GlobalPage = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;

  return (
    <GlobalLayout params={params}>
      <GlobalPageProvider breadcrumb={breadcrumb[lang]}>
        {lang === 'zh' ? <Zh /> : <En />}
        <PageSetting />
      </GlobalPageProvider>
    </GlobalLayout>
  );
};

export default GlobalPage;
