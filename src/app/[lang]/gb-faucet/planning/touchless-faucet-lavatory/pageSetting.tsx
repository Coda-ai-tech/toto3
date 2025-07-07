'use client';
import { useEffect, useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';

const PageSetting = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [isAddedScript, setAddedScript] = useState(false);

  const scriptFiles = useMemo(() => {
    return [
      // 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js',
      '/assets/global/faucet/planning/assets/js/libs/libs.min.js',
      '/assets/global/faucet/planning/assets/js/engine.min.js',
      '/assets/global/faucet/planning/assets/js/faucet-lavatory-option-touchless.min.js',
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
      let loadedCount = 0;
      const totalScripts = scriptFiles.length;

      scriptFiles.forEach((url, index) => {
        const script = document.createElement('script');
        script.src = url;
        script.async = false; // Load synchronously
        script.defer = false; // Execute immediately

        script.onload = () => {
          console.log(`Loaded: ${url}`);
          loadedCount++;
          if (loadedCount === totalScripts) {
            console.log('All scripts loaded, setting isAddedScript to true');
            setAddedScript(true);
          }
        };
        
        script.onerror = () => {
          console.error(`Failed to load: ${url}`);
          loadedCount++;
          if (loadedCount === totalScripts) {
            setAddedScript(true);
          }
        };

        document.body.appendChild(script);
      });
    }
  }, [loading, scriptFiles]);

  // Other additional inline script...
  useEffect(() => {
    if (isAddedScript) {
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          const script2 = document.createElement('script');
          const context1 = `
            console.log('==== Global Page (Touchless) ====');
            
            // Add required body classes for the touchless simulator
            document.body.className = 'uq_faucet-lavatory-top is_faucet-lavatory is_en is_touchless';
            document.body.id = 'pagetop';
            console.log('Body classes added:', document.body.className);
            
            // Wait for ENGINE to be available and initialize
            function initializeEngine() {
              if (typeof window.ENGINE !== 'undefined' && window.ENGINE.Simulator && window.ENGINE.SimulatorCommon) {
                console.log('ENGINE found, initializing...');
                
                try {
                  // Initialize the common simulator first
                  if (window.ENGINE.SimulatorCommon.init) {
                    window.ENGINE.SimulatorCommon.init();
                    console.log('SimulatorCommon initialized');
                  }
                  
                  // Initialize the main simulator (this will load data files including messages)
                  if (window.ENGINE.Simulator.init) {
                    window.ENGINE.Simulator.init();
                    console.log('Simulator init started (loading data files...)');
                    
                    // Wait for data loading to complete by checking if messages are loaded
                    waitForDataLoading();
                  } else {
                    console.error('ENGINE.Simulator.init not found');
                  }
                  
                } catch (error) {
                  console.error('Error initializing ENGINE:', error);
                }
                
              } else {
                console.warn('ENGINE not ready, retrying in 500ms...');
                setTimeout(initializeEngine, 500);
              }
            }
            
            // Wait for data loading to complete
            function waitForDataLoading() {
              function checkDataLoaded() {
                // Check if messages are loaded (indicates data loading is complete)
                if (window.ENGINE.Simulator.messages && 
                    Object.keys(window.ENGINE.Simulator.messages).length > 0 &&
                    window.ENGINE.Simulator.messages['colour_W']) {
                  console.log('Data loading complete, messages loaded:', Object.keys(window.ENGINE.Simulator.messages).length);
                  
                  // Now initialize the UI components
                  initializeUIComponents();
                } else {
                  console.log('Waiting for data to load...');
                  setTimeout(checkDataLoaded, 200);
                }
              }
              checkDataLoaded();
            }
            
            // Initialize UI components after data is loaded
            function initializeUIComponents() {
              try {
                // Initialize transition links
                if (window.ENGINE.Simulator.initTransitionLink) {
                  window.ENGINE.Simulator.initTransitionLink();
                  console.log('Transition links initialized');
                }
                
                // Initialize action links if they exist
                if (window.ENGINE.Simulator.initActionLink) {
                  window.ENGINE.Simulator.initActionLink();
                  console.log('Action links initialized');
                } else {
                  console.log('No initActionLink function found');
                }
                
                // Initialize modal functionality
                if (window.ENGINE.modal && window.ENGINE.modal.init) {
                  window.ENGINE.modal.init();
                  console.log('Modal initialized');
                }
                
                // Refresh favorite functionality
                if (window.ENGINE.Simulator.refreshFavorite) {
                  window.ENGINE.Simulator.refreshFavorite();
                  console.log('Favorite refreshed');
                } else {
                  console.log('No refreshFavorite function found');
                }
                
                // Manual fallback event binding for favorite button
                setTimeout(() => {
                  const favoriteBtn = document.querySelector('.js_favorite__btn');
                  if (favoriteBtn && !favoriteBtn.hasAttribute('data-event-bound')) {
                    favoriteBtn.addEventListener('click', function(e) {
                      e.preventDefault();
                      console.log('Manual favorite button clicked (touchless)');
                      // Show the favorite panel
                      const favoriteBox = document.querySelector('.js_favorite__box');
                      const favoriteCont = document.querySelector('.js_favorite__cont');
                      if (favoriteBox) favoriteBox.classList.add('is_show');
                      if (favoriteCont) favoriteCont.classList.add('is_show');
                      return false;
                    });
                    favoriteBtn.setAttribute('data-event-bound', 'true');
                    console.log('Manual favorite button event bound (touchless)');
                  }
                  
                  // Also bind the favorite close button
                  const favoriteCloseBtn = document.querySelector('.js_favorite__close');
                  if (favoriteCloseBtn && !favoriteCloseBtn.hasAttribute('data-event-bound')) {
                    favoriteCloseBtn.addEventListener('click', function(e) {
                      e.preventDefault();
                      console.log('Manual favorite close button clicked (touchless)');
                      // Hide the favorite panel
                      const favoriteBox = document.querySelector('.js_favorite__box');
                      const favoriteCont = document.querySelector('.js_favorite__cont');
                      if (favoriteBox) favoriteBox.classList.remove('is_show');
                      if (favoriteCont) favoriteCont.classList.remove('is_show');
                      return false;
                    });
                    favoriteCloseBtn.setAttribute('data-event-bound', 'true');
                    console.log('Manual favorite close button event bound (touchless)');
                  }
                  
                  // Also bind transition links as fallback
                  const transitionLinks = document.querySelectorAll('[data-transition-link]');
                  transitionLinks.forEach((link, index) => {
                    if (!link.hasAttribute('data-manual-bound')) {
                      link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const target = this.getAttribute('data-transition-link');
                        console.log('Manual transition link clicked (touchless):', target);
                        if (window.ENGINE && window.ENGINE.Simulator && window.ENGINE.Simulator.gotoPanel) {
                          window.ENGINE.Simulator.gotoPanel(target);
                        }
                      });
                      link.setAttribute('data-manual-bound', 'true');
                    }
                  });
                  console.log('Manual transition links bound (touchless):', transitionLinks.length);
                }, 500);
                
                console.log('ENGINE initialization complete (touchless)');
                
              } catch (error) {
                console.error('Error initializing UI components (touchless):', error);
              }
            }
            
            // Start initialization
            setTimeout(initializeEngine, 100);
          `;

          script2.textContent = context1;
          document.body.appendChild(script2);
        }
      }, 1000);
    }
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