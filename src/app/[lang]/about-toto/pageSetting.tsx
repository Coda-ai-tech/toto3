'use client';

const PageSetting = () => {
  return (
    <>
      <link rel='stylesheet' href={`/assets/global/about-toto/css/index.min.css`} />
      <style
        dangerouslySetInnerHTML={{ __html: '\n    .topBreadcrumbs {\n        display: none !important;\n    }\n' }}
      />
      {/* <Script src={`...path`} /> */}
    </>
  );
};

export default PageSetting;
