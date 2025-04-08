'use client';
import { useEffect, useState } from 'react';

const PageSetting = () => {
  const [isAddedScript, setAddedScript] = useState(true);

  useEffect(() => {
    let cnt = 0;
    const scriptFiles = [
      '//code.jquery.com/jquery-2.1.1.min.js',
      '/assets/global/purpose/js/gsap.min.js',
      '/assets/global/purpose/js/ScrollTrigger.min.js',
      '/assets/global/purpose/js/ScrollToPlugin.min.js',
      '/assets/global/purpose/js/common.js',
      '/assets/global/purpose/js/index.js',
      '/assets/global/purpose/js/bundle.js',
    ];

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

    return () => {
      scriptFiles.forEach((url) => {
        const existingScript = document.querySelector(`script[src="${url}"]`);
        if (existingScript) {
          existingScript.remove();
          console.log(`Removed: ${url}`);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (!isAddedScript) return;

    setTimeout(() => {
      if (typeof window !== 'undefined') {
        const script2 = document.createElement('script');
        const context1 = `$(window).on('resize', function () {
                setTimeout(function () {
                    let wd = $('.modal #player').width();
                    let hh = wd * 0.5625;
                    $('.modal .modal-inner').height(hh + "px");
                }, 300);
            });`;

        script2.textContent = context1;
        document.body.appendChild(script2);
      }
    }, 1000);
  }, [isAddedScript]);

  // Modal container copy to Top node...
  useEffect(() => {
    const modal = document.getElementById('modalVideo');

    if (modal) {
      const clonedModal = modal.cloneNode(true) as HTMLDivElement;
      clonedModal.id = 'modalVideo';
      document.body.appendChild(clonedModal);
      modal.remove();

      return () => {
        const existingClonedModal = document.getElementById('modalVideoCloned');
        if (existingClonedModal) {
          existingClonedModal.remove();
        }
      };
    }
  }, []);

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
