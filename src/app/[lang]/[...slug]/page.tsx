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
  return GetPageMeta(dataType, [lang, ...slug], isValidAPIPath(slug));
};

const isValidAPIPath = (pathArray : string[]) => {

  if (!Array.isArray(pathArray)) return false;
  if(pathArray.length === 2 && pathArray[0] === 'product')
    return true;
  if(pathArray.length === 2 && pathArray[0] === 'technology')
    return true;
  if(pathArray.length === 2 && pathArray[0] === 'news')
    return true;
  return false;
}

const DynamicPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ lang: Locale; slug: string[] }>;
  searchParams?: Promise<{ [key: string]: string }>;
}) => {
  const { lang, slug } = await params;
  const pageData = await GetPageData(isValidAPIPath(slug)? DataTypeProps.cms : dataType, [lang, ...slug], '', await searchParams);

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
