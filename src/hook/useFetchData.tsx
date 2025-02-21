import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { i18n } from '@/app/i18n.config';
import { DataTypeProps } from '@/types';

const { NEXT_PUBLIC_DEV_API_ENDPOINT_SUFFIX, NEXT_PUBLIC_DEV_LOCAL_API_ENDPOINT, NEXT_PUBLIC_DEV_CMS_API_ENDPOINT } =
  process.env;

const endpointPrefixList = {
  local: `${
    process.env.NODE_ENV === 'production' ? NEXT_PUBLIC_DEV_CMS_API_ENDPOINT : NEXT_PUBLIC_DEV_LOCAL_API_ENDPOINT
  }${NEXT_PUBLIC_DEV_API_ENDPOINT_SUFFIX}`,
  cms: `${NEXT_PUBLIC_DEV_CMS_API_ENDPOINT}${NEXT_PUBLIC_DEV_API_ENDPOINT_SUFFIX}`,
};

const exceptionCase = (slug: string[]) => {
  if (/api|assets|favicon.ico|sw.js|turbopack|__nextjs_original-stack-frame/.test(slug[0]) || slug === undefined) {
    return true;
  }
  return;
};

export const GetPageData = async (dataType: DataTypeProps, slug: string[], from?: string, searchParams?: any) => {
  if (exceptionCase(slug)) return;

  if (from) {
    console.log('\x1b[36m%s\x1b[0m', '➤ Calling from', from);
  }

  if (searchParams != undefined && Object.getOwnPropertyNames(searchParams).length > 0) {
    console.log('\x1b[36m%s\x1b[0m', '➤ searchParams', searchParams);
  }

  const endpoint = `${endpointPrefixList[dataType as keyof typeof endpointPrefixList]}/${slug.join('/')}.json`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('\x1b[36m%s\x1b[0m', `==== DATA NOT FOUND (${endpoint}) ====`);
    console.error('error', error);
    return notFound();
  }
};

export const GetLanguages = () => {
  const locales: any = {};
  for (let i = 0; i < i18n.locales.length; i++) {
    locales[i18n.locales[i]] = `/${i18n.locales[i]}`;
  }
  return locales;
};

export const GetPageMeta = async (dataType: DataTypeProps, slug: string[]) => {
  if (exceptionCase(slug)) {
    return {
      title: null,
    };
  } else {
    try {
      const data = await GetPageData(dataType, slug, 'GetPageMeta');
      const globalData = await GetPageData(dataType, [slug[0], 'global']);
      const { siteTitle } = globalData?.dictionary;

      const {
        meta: { title, description, keywords, ogImage: images },
      } = data;

      const headersList = await headers();
      const pathname = headersList.get('x-forwarded-pathname');

      return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_PRODUCTION_ENDPOINT as string),
        title: `${title}${siteTitle && slug[1] !== 'home' ? ' | ' + siteTitle : ''}`,
        description,
        keywords,
        alternates: {
          canonical: `/${slug.join('/')}`,
          languages: GetLanguages(),
        },
        openGraph: {
          title,
          description,
          images,
          type: `website`,
          url: `${pathname}`,
        },
        twitter: {
          card: 'summary_large_image',
          title: title,
          description: description,
          images,
        },
      };
    } catch (error) {
      console.log(`==== META DATA NOT FOUND ====`, error);
      return {};
    }
  }
};
