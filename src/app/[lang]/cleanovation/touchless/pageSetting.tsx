'use client';
import { useEffect, useState } from 'react';

const PageSetting = () => {
  const [isAddedScript, setAddedScript] = useState(true);

  // ! keep check 'slick' slide load issue...

  useEffect(() => {
    let cnt = 0;
    const scriptFiles = [
      '//code.jquery.com/jquery-2.1.1.min.js',
      '/assets/global/global_common_2019/js/apps.js',
      'https://www.toto.com/en/neorestcollections/assets/js/library.js',
      '/assets/global/neorestcollections/js/library.js',
      '/assets/global/cleanovation/js/common.js',
      '/assets/global/cleanovation/js/bundle.js',
      '/assets/global/cleanovation/js/base.min.js',
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
        // const script3 = document.createElement('script');
        // script3.src = '/assets/global/cleanovation/js/bundle.js';
        // script3.defer = true;
        // document.body.appendChild(script3);

        const script2 = document.createElement('script');
        const context1 = `
          function initialSize() {
          setTimeout(function() {
            var w = $(window).width();
            var sliderMapWidth = $('.global__content .stack > div').width();
            if(w > 767){
            var sliderMapHeight = sliderMapWidth * 0.531914893617021;
            }else{
                //var sliderMapHeight = sliderMapWidth * 0.7606907;
                var sliderMapHeight = sliderMapWidth * 0.745;
            }
            $('.global__content .stack > div').css('height', sliderMapHeight);
        }, 500);
          }
        initialSize()
         
        $(window).on("load resize", function() {
                initialSize()
            });`;

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
      <link rel='stylesheet' media='all' href='/assets/global/cleanovation/css/main.css' />
      <link rel='stylesheet' media='all' href='/assets/global/cleanovation/css/base.css' />
      <link rel='stylesheet' media='all' href='/assets/global/cleanovation/css/cleanovation.css' />
      <link rel='stylesheet' media='all' href='/assets/global/cleanovation/css/touchless.css' />
      <style
        dangerouslySetInnerHTML={{ __html: '\n    .topBreadcrumbs {\n        display: none !important;\n    }\n' }}
      />
      {/* <Script src={`...path`} /> */}
    </>
  );
};

export default PageSetting;
