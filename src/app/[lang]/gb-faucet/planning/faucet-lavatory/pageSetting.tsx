'use client';
import { useEffect, useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';

const PageSetting = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [isAddedScript, setAddedScript] = useState(true);

  const scriptFiles = useMemo(() => {
    return [
      // 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js',
      '/assets/global/faucet/planning/assets/js/libs/libs.min.js',
      '/assets/global/faucet/planning/assets/js/engine.min.js',
      '/assets/global/faucet/planning/assets/js/faucet-lavatory.min.js',
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
      <link rel='stylesheet' media='all' href='/assets/global/faucet/planning/assets/css/base.css' />
      <link rel='stylesheet' media='all' href='/assets/global/faucet/planning/assets/css/faucet-lavatory.css' />
      <style
        dangerouslySetInnerHTML={{ __html: '\n    .topBreadcrumbs {\n        display: none !important;\n    }\n' }}
      />
      {/* <Script src={`...path`} /> */}
    </>
  );
};

export default PageSetting;
