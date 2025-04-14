import type { Metadata } from 'next';
import { Locale } from '@/app/i18n.config';
import { GetMetadata, GetBreadcrumbs } from '@/hook/useGlobalPage';
import GlobalLayout from '@@/LayoutProvider/global';
import GlobalPageProvider from '@@/GlobalPageProvider';
import En from './en';
import Zh from './zh';
import fs from 'fs';
import path from 'path';

// Read data directly from the JSON file instead of API
export const fetchInspirationItem = async (id: string) => {
  try {
    // Get the absolute path to the JSON file
    const jsonPath = path.join(process.cwd(), 'public', 'assets', 'global', 'inspiration', 'common', 'json', 'data.json');
    
    // Read the file synchronously
    const fileContents = fs.readFileSync(jsonPath, 'utf8');
    
    // Parse JSON
    const data = JSON.parse(fileContents);
    
    // Find the item with matching ID
    const item = data.find((item: any) => item.id === Number(id));
    
    return item || null;
  } catch (error) {
    console.error('Error reading inspiration data from JSON file:', error);
    return null;
  }
};

// Define page path array
const pagePath = [
  {
    enTitle: 'TOTO GLOBAL',
    zhTitle: 'TOTO 國際',
    slug: '',
  },
  {
    enTitle: 'INSPIRATION',
    zhTitle: 'INSPIRATION',
    slug: 'inspiration',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  // Fetch the inspiration item
  const inspirationItem = await fetchInspirationItem(id);

  // Add dynamic title from the inspiration item or use fallback
  const title = inspirationItem?.name || 'Inspiration Detail';

  // Create metadata props
  const metaProps = {
    en: {
      title: `${title} | TOTO INSPIRATION | TOTO GLOBAL SITE`,
      description:
        inspirationItem?.description ||
        'INSPIRATION Various designed bathrooms for your inspiration.',
      keywords:
        'TOTO, toilet, Washlet, Japan, bidet, global, culture, faucet, bathtub, INSPIRATION, case study',
      canonical: `/en/inspiration/${id}`,
    },
    zh: {
      title: `${title} | TOTO INSPIRATION | TOTO 國際站點`,
      description:
        inspirationItem?.description ||
        'INSPIRATION 為您提供靈感的各種設計浴室。',
      keywords:
        'TOTO, toilet, Washlet, Japan, bidet, global, culture, faucet, bathtub, INSPIRATION, case study',
      canonical: `/zh/inspiration/${id}`,
    },
  };

  // Generate metadata
  return GetMetadata(metaProps)[lang];
}

const GlobalPage = async ({
  params,
}: {
  params: Promise<{ lang: Locale; id: string }>;
}) => {
  const { lang, id } = await params;

  // Create dynamic breadcrumb
  const inspirationItem = await fetchInspirationItem(id);

  // Add current page to breadcrumb
  const currentPath = [
    ...pagePath,
    {
      enTitle: inspirationItem?.name || 'DETAIL',
      zhTitle: inspirationItem?.name || 'DETAIL',
      slug: `inspiration/${id}`,
    },
  ];

  const breadcrumb = GetBreadcrumbs(currentPath);

  return (
    // Pass the dictionary to prevent the error
    <GlobalLayout params={params}>
      <GlobalPageProvider breadcrumb={breadcrumb[lang]}>
        {lang === 'zh' ? <Zh /> : <En />}
      </GlobalPageProvider>
    </GlobalLayout>
  );
};

export default GlobalPage;
