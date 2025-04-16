'use client';

import { useEffect, useRef } from 'react';
import styles from './VrViewer.module.scss';

interface VrViewerProps {
  houseType: 'p1' | 'p2' | 'p3' | 'p4';
  title?: string;
}

// Simply match the GitHub implementation
declare global {
  interface Window {
    embedpano: (params: any) => void;
    removepano: (id: string) => void;
  }
}

const VrViewer = ({ houseType, title }: VrViewerProps) => {
  // Use a ref to track initialization state instead of useState
  const isInitialized = useRef(false);
  const isPanoInitialized = useRef(false);

  // Load krpano script once
  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    // Create script tag
    const script = document.createElement('script');
    script.src = "/assets/vr/house/pano_common/tour.js";
    script.async = false;
    
    script.onload = () => {
      console.log("Krpano script loaded");
      // Initialize panorama after script is loaded
      initPanorama();
    };
    
    document.head.appendChild(script);
    
    // Clean up function
    return () => {
      if (isPanoInitialized.current && window.removepano) {
        window.removepano('pano');
        isPanoInitialized.current = false;
      }
    };
  }, []);

  // Handle house type changes
  useEffect(() => {
    // Only attempt to initialize if the script has been loaded
    if (isInitialized.current && !!window.embedpano) {
      // First clean up if needed
      if (isPanoInitialized.current && window.removepano) {
        window.removepano('pano');
        isPanoInitialized.current = false;
      }
      
      // Then initialize new panorama
      initPanorama();
    }
  }, [houseType]);

  // Function to initialize panorama
  const initPanorama = () => {
    // Make sure embedpano is available
    if (!window.embedpano) {
      console.error("embedpano function not available");
      return;
    }

    try {
      // This matches the example you provided exactly
      window.embedpano({
        xml: `/assets/vr/house/${houseType}/tour.xml`,
        target: "pano",
        html5: "prefer",
        mobilescale: 1.0,
        passQueryParameters: true,
        basepath: "/assets/vr/house/pano_common/" // Add this line to fix plugin loading
      });
      
      isPanoInitialized.current = true;
      console.log(`Panorama initialized for ${houseType}`);
    } catch (error) {
      console.error("Error initializing panorama:", error);
    }
  };

  return (
    <div className={styles.vrContainer}>
      {/* This is the key part - use a simple div with ID "pano" */}
      <div id="pano" className={styles.panoViewer}></div>
    </div>
  );
};

export default VrViewer;