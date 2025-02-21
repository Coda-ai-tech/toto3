import { ButtonElementDefault } from '@/types';

const metadataBase = new URL(process.env.NEXT_PUBLIC_PRODUCTION_ENDPOINT as string);

export const languages = {
  en: '/en',
  zh: '/zh',
};

interface BreadcrumbsProps {
  enTitle: string;
  zhTitle: string;
  slug: string;
}

interface LanguageDataProps<T> {
  en: T;
  zh: T;
}
const BreadcrumbsDefault: LanguageDataProps<ButtonElementDefault[]> = {
  en: [
    {
      label: 'HOME',
      link: {
        type: 'routeLink',
        href: languages.en,
      },
    },
  ],
  zh: [
    {
      label: '首頁',
      link: {
        type: 'routeLink',
        href: languages.zh,
      },
    },
  ],
};

export const GetBreadcrumbs = (data: BreadcrumbsProps[]) => {
  const res = { en: [...BreadcrumbsDefault.en], zh: [...BreadcrumbsDefault.zh] };

  data.map((item: BreadcrumbsProps) => {
    const { enTitle, zhTitle, slug } = item;

    const enBreadcrumb: ButtonElementDefault = {
      label: enTitle.toUpperCase(),
      link: {
        type: 'routeLink',
        href: `${languages.en}/${slug}`,
      },
    };

    const zhBreadcrumb: ButtonElementDefault = {
      label: zhTitle.toUpperCase(),
      link: {
        type: 'routeLink',
        href: `${languages.zh}/${slug}`,
      },
    };

    res.en.push(enBreadcrumb);
    res.zh.push(zhBreadcrumb);
  });

  return res;
};

interface MetadataProps {
  title?: string;
  description?: string | null;
  keywords?: string;
  canonical?: string;
}

export const GetMetadata = (data: LanguageDataProps<MetadataProps>) => {
  const res = Object.fromEntries(
    Object.entries(languages).map(([key]) => {
      const { title, description, keywords, canonical } = data[key as keyof typeof languages];

      return [
        key,
        {
          metadataBase,
          title: `${title ? title + ' |' : ''} TOTO Hong Kong`,
          description: `${
            description
              ? description
              : 'This is the official Hong Kong site for TOTO Ltd. Learn about TOTO’s group sites, corporate data, CSR activities, environmental initiatives and investor relations information.'
          }`,
          keywords: `${keywords ? keywords : ''}`,
          alternates: {
            canonical: `/${key}${canonical}`,
            languages,
          },
        },
      ];
    })
  );

  return res;
};
