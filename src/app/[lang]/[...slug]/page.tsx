import type { Metadata } from 'next';
import { DataTypeProps } from '@/types';
import { Locale } from '@/app/i18n.config';
import { GetPageData, GetPageMeta } from '@/hook/useFetchData';
import { GetModule } from '@/hook/useGetModules';
import DefaultLayout from '@@/LayoutProvider';
import Breadcrumbs from '@@/Breadcrumbs';
import BackToTop from '@@/BackToTop';

const dataType = DataTypeProps.local;

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string[] }>;
}): Promise<Metadata> => {
  const { lang, slug } = await params;
  return GetPageMeta(dataType, [lang, ...slug]);
};

const DynamicPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ lang: Locale; slug: string[] }>;
  searchParams?: Promise<{ [key: string]: string }>;
}) => {
  const { lang, slug } = await params;
  const pageData = await GetPageData(dataType, [lang, ...slug], '', await searchParams);

  return (
    <DefaultLayout params={params}>
      <>
        {pageData?.breadcrumb && (
          <div className={`topBreadcrumbs`}>
            <div className={`topBreadcrumbsInner`}>
              <Breadcrumbs data={pageData.breadcrumb} position='top' />
            </div>
          </div>
        )}
        {GetModule(pageData)}
        <div className={`bottomBreadcrumbs`}>
          <div className={`bottomBreadcrumbsInner`}>
            {pageData?.breadcrumb && <Breadcrumbs data={pageData.breadcrumb} position='bottom' />}
            <BackToTop />
          </div>
        </div>
      </>
    </DefaultLayout>
  );
};

export default DynamicPage;
