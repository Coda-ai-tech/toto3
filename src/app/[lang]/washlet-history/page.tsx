import type { Metadata } from 'next';
import { Locale } from '@/app/i18n.config';
import { GetMetadata, GetBreadcrumbs } from '@/hook/useGlobalPage';
import GlobalLayout from '@@/LayoutProvider/global';
import GlobalPageProvider from '@@/GlobalPageProvider';
import PageSetting from './pageSetting'; // ! PageSetting for import provided css, js, side effect setup etc....
import En from './en'; // ! English Content
import Zh from './zh'; // ! Chinese Content

const pagePath = [
  {
    enTitle: 'Washlet History',
    zhTitle: 'Washlet History',
    slug: 'washlet-history',
  },
];

const currentPageObj = pagePath[pagePath.length - 1];
const metaProps = {
  en: {
    title: currentPageObj.enTitle,
    description:
      'Cumulative Shipments of WASHLET Surpass 50 Million Always Innovating to Spread a Culture of Everyday Comfort and Cleanliness.',
    keywords:
      'Restroom,toilet,lavatory,sprayseat,showertoilet,bidet,electoricseat,wash,washlet, the World’s No.１ Brand,NEOREST,WASHLET+',
    canonical: `/${currentPageObj.slug}`,
  },
  zh: {
    title: currentPageObj.zhTitle,
    description:
      'Cumulative Shipments of WASHLET Surpass 50 Million Always Innovating to Spread a Culture of Everyday Comfort and Cleanliness.',
    keywords:
      'Restroom,toilet,lavatory,sprayseat,showertoilet,bidet,electoricseat,wash,washlet, the World’s No.１ Brand,NEOREST,WASHLET+',
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
        <PageSetting />
        {lang === 'zh' ? <Zh /> : <En />}
      </GlobalPageProvider>
    </GlobalLayout>
  );
};

export default GlobalPage;
