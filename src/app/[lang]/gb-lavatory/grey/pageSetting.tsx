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
      '/assets/global/global_common_2019/js/header.js',
      '/assets/global/global_common_2019/js/footer.js',
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
        const context1 = `
          const JSON_DATA_PATH = '/assets/global/lavatory/grey/data.json';
          console.log('==== Global Page ====')
        `;

        script2.textContent = context1;
        document.body.appendChild(script2);

        const script3 = document.createElement('script');
        script3.src = '/assets/global/lavatory/assets/js/colors.js';
        script3.type = 'module';
        document.body.appendChild(script3);
      }
    }, 1000);
  }, [isAddedScript]);

  return (
    <>
      <link rel='stylesheet' media='all' href='/assets/global/lavatory/assets/css/style.css' />
      <style
        dangerouslySetInnerHTML={{ __html: '\n    .topBreadcrumbs {\n        display: none !important;\n    }\n' }}
      />
      {/* <Script src={`...path`} /> */}
    </>
  );
};

export default PageSetting;
