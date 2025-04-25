import { Metadata } from 'next';
import { Locale } from '@/app/i18n.config';
import { GetMetadata, GetBreadcrumbs } from '@/hook/useGlobalPage';
import GlobalLayout from '@@/LayoutProvider/global';
import GlobalPageProvider from '@@/GlobalPageProvider';
import VrHouse from './VrHouse';

// Define page path array - will be extended with the house-specific path
const pagePath = [
  {
    enTitle: 'TOTO GLOBAL',
    zhTitle: 'TOTO 國際',
    slug: '',
  },
  {
    enTitle: 'VR EXPERIENCE',
    zhTitle: 'VR 體驗',
    slug: 'vr-experience',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  const houseTitle = 'VR House';

  const metaProps = {
    en: {
      title: `${houseTitle} | VR Experience | TOTO GLOBAL SITE`,
      description: `Explore TOTO products in the immersive ${houseTitle} virtual environment.`,
      keywords: `TOTO, VR, virtual reality, bathroom, design, experience, ${houseTitle}`,
      canonical: `/en/vr-experience/${id}`,
    },
    zh: {
      title: `${houseTitle} | VR 體驗 | TOTO 國際站點`,
      description: `在沉浸式${houseTitle}虛擬環境中探索 TOTO 產品。`,
      keywords: `TOTO, VR, 虛擬現實, 浴室, 設計, 體驗, ${houseTitle}`,
      canonical: `/zh/vr-experience/${id}`,
    },
  };

  return GetMetadata(metaProps)[lang];
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale; id: string }>;
}) {
  const { lang, id } = await params;

  // Add the current house to the breadcrumb
  const currentPath = [
    ...pagePath,
    {
      enTitle: 'VR House',
      zhTitle: 'VR 房屋',
      slug: `vr-experience/${id}`,
    },
  ];

  const breadcrumb = GetBreadcrumbs(currentPath);

  const validHouseTypes = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'];
  const isValidHouse = validHouseTypes.includes(id);

  return (
    <body>
      <>
        {isValidHouse ? (
          <VrHouse
            houseType={
              id as 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6' | 'p7' | 'p8'
            }
            lang={lang}
          />
        ) : (
          <div style={{ padding: '50px 20px', textAlign: 'center' }}>
            <h1>House not found</h1>
            <p>The requested VR experience does not exist.</p>
          </div>
        )}
      </>
    </body>
  );
}
