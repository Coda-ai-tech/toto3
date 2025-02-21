'use client';
import { useEffect, useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';

const PageSetting = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [isAddedScript, setAddedScript] = useState(true);

  const scriptFiles = useMemo(() => {
    return [
      '//code.jquery.com/jquery-2.1.1.min.js',
      '/assets/global/global_common_2019/js/apps.js',
      '/assets/global/global_common_2019/js/common.js',
      '/assets/global/faucet/assets/js/gb_faucet.js',
      '/assets/global/faucet/assets/js/unique/showcase.js',
    ];
  }, []);

  useEffect(() => {
    setLoading(true); // Start loading when pathname changes

    // remove existing script....
    scriptFiles.forEach((url) => {
      const existingScript = document.querySelector(`script[src="${url}"]`);
      if (existingScript) {
        existingScript.remove();
        console.log(`Removed: ${url}`);
      }
    });

    const timeout = setTimeout(() => {
      setLoading(false); // Simulate loading effect
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname, scriptFiles]);

  useEffect(() => {
    if (!loading) {
      let cnt = 0;

      scriptFiles.forEach((url) => {
        cnt++;
        const script = document.createElement('script');
        script.src = url;
        script.async = false; // Load asynchronously
        script.defer = true; // Execute after parsing

        document.body.appendChild(script);

        // ! Only For Testing...
        script.onload = () => console.log(`Loaded: ${url}`);
        script.onerror = () => console.error(`Failed to load: ${url}`);

        if (cnt + 1 === scriptFiles.length) {
          console.log(cnt + 1, scriptFiles.length);
          setAddedScript(true);
        }
      });
    }
  }, [loading, scriptFiles]);

  // Other additional inline script...
  useEffect(() => {
    if (!isAddedScript) return;

    setTimeout(() => {
      if (typeof window !== 'undefined') {
        const script2 = document.createElement('script');
        const context1 = `console.log('==== Global Page ====')`;

        script2.textContent = context1;
        document.body.appendChild(script2);
      }
    }, 1000);
  }, [isAddedScript]);

  return (
    <>
      <link rel='stylesheet' media='all' href='/assets/global/global_common_2019/css/apps.css' />
      <link rel='stylesheet' media='all' href='/assets/global/global_common_2019/css/base.css' />
      <link rel='stylesheet' media='all' href='/assets/global/global_common_2019/css/common.css' />
      <link rel='stylesheet' media='all' href='/assets/global/global_common_2019/css/header.css' />
      <link rel='stylesheet' media='all' href='/assets/global/global_common_2019/css/footer.css' />
      <link rel='stylesheet' media='all' href='/assets/global/faucet/assets/css/gb_faucet.css' />
      <link rel='stylesheet' media='all' href='/assets/global/faucet/assets/css/unique/showcase.css' />
      <style
        dangerouslySetInnerHTML={{ __html: '\n    .topBreadcrumbs {\n        display: none !important;\n    }\n' }}
      />
      {/* <Script src={`...path`} /> */}
    </>
  );
};

export default PageSetting;
