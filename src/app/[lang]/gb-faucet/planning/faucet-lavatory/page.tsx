import type { Metadata } from 'next';
import { Locale } from '@/app/i18n.config';
import { GetMetadata } from '@/hook/useGlobalPage';
import PageSetting from './pageSetting'; // ! PageSetting for import provided css, js, side effect setup etc....
import En from './en'; // ! English Content
import Zh from './zh'; // ! Chinese Content

const pagePath = [
  {
    enTitle: 'Faucet',
    zhTitle: 'Faucet',
    slug: 'gb-faucet',
  },
  {
    enTitle: 'FAUCET / LAVATORY  Planning | Faucet & Shower',
    zhTitle: 'FAUCET / LAVATORY  Planning | Faucet & Shower',
    slug: 'faucet-lavatory',
  },
];

const currentPageObj = pagePath[pagePath.length - 1];
const metaProps = {
  en: {
    title: currentPageObj.enTitle,
    description:
      "TOTO's free simulator. You can freely choose the combination of faucet and lavatory. You can easily choose a combination from your favorite shape, color and series.",
    keywords: '',
    canonical: `/${currentPageObj.slug}`,
  },
  zh: {
    title: currentPageObj.zhTitle,
    description:
      "TOTO's free simulator. You can freely choose the combination of faucet and lavatory. You can easily choose a combination from your favorite shape, color and series.",
    keywords: '',
    canonical: `/${currentPageObj.slug}`,
  },
};

const metadata = GetMetadata(metaProps);

export const generateMetadata = async ({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> => {
  const { lang } = await params;
  return metadata[lang];
};

const GlobalPage = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;

  return (
    <body id='pagetop' className='uq_faucet-lavatory-top is_faucet-lavatory is_en'>
      <PageSetting />
      {lang === 'zh' ? <Zh /> : <En />}
    </body>
  );
};

export default GlobalPage;
