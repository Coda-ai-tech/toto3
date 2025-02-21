import Breadcrumbs from '@@/Breadcrumbs';
import BackToTop from '@@/BackToTop';

const GlobalPageProvider = ({ breadcrumb, children }: { breadcrumb: any; children: React.ReactNode }) => {
  return (
    <>
      <div className={`topBreadcrumbs`}>
        <div className={`topBreadcrumbsInner`}>
          <Breadcrumbs data={breadcrumb} theme='overlay' position='top' />
        </div>
      </div>
      <div className='global-page' style={{ position: 'relative', zIndex: 0 }}>
        {children}
      </div>
      <div className={`bottomBreadcrumbs`}>
        <div className={`bottomBreadcrumbsInner`}>
          <Breadcrumbs data={breadcrumb} position='bottom' />
          <BackToTop />
        </div>
      </div>
    </>
  );
};

export default GlobalPageProvider;
