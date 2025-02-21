import type { Metadata } from 'next';
import { Locale } from '@/app/i18n.config';
import { GetBreadcrumbs, GetMetadata } from '@/hook/useGlobalPage';
import GlobalLayout from '@@/LayoutProvider/global';
import GlobalPageProvider from '@@/GlobalPageProvider';
import PageSetting from './pageSetting'; // ! PageSetting for import provided css, js, side effect setup etc....
import En from './en'; // ! English Content
import Zh from './zh'; // ! Chinese Content

const pagePath = [
  {
    enTitle: 'BRAND PURPOSE Environment',
    zhTitle: 'BRAND PURPOSE Environment',
    slug: 'environment',
  },
];

const currentPageObj = pagePath[pagePath.length - 1];
const metaProps = {
  en: {
    title: currentPageObj.enTitle,
    description: 'Learn about “Environment“ - one of the materiality issues that TOTO is focusing on.',
    keywords: 'TOTO, toilet, Washlet, Japan, bidet, global, culture, faucet, bathtub',
    canonical: `/${currentPageObj.slug}`,
  },
  zh: {
    title: currentPageObj.zhTitle,
    description: 'Learn about “Environment“ - one of the materiality issues that TOTO is focusing on.',
    keywords: 'TOTO, toilet, Washlet, Japan, bidet, global, culture, faucet, bathtub',
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
