'use client';

const PageSetting = () => {
  return (
    <>
      <link rel='stylesheet' media='all' href='/assets/global/global_common_2019/css/apps.css' />
      <link rel='stylesheet' media='all' href='/assets/global/global_common_2019/css/base.css' />
      <link rel='stylesheet' media='all' href='/assets/global/global_common_2019/css/common.css' />
      <link rel='stylesheet' media='all' href='/assets/global/global_common_2019/css/header.css' />
      <link rel='stylesheet' media='all' href='/assets/global/global_common_2019/css/footer.css' />
      <link rel='stylesheet' media='all' href='/assets/global/purpose/css/lower.min.css' />
      <style
        dangerouslySetInnerHTML={{ __html: '\n    .topBreadcrumbs {\n        display: none !important;\n    }\n' }}
      />
      {/* <Script src={`...path`} /> */}
    </>
  );
};

export default PageSetting;
