"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const TornadoFlushVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // Check if video file exists
    fetch('/assets/global/cleanovation/images/Tornado_Flush_ENG_240618.mp4')
      .then(response => {
        if (!response.ok) {
          setError('Video file not found. Please check if the video file is in the correct location.');
        }
      })
      .catch(() => {
        setError('Error loading video file.');
      });
  }, []);

  const handleVideoError = (e: any) => {
    console.error('Video error:', e);
    setError('Error playing video. Please make sure the video file exists and is in the correct format.');
  };

  return (
    <div className="video-page" style={{ padding: '20px' }}>
      <div className="video-container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        backgroundColor: '#000',
        position: 'relative',
        minHeight: '400px'
      }}>
        {error ? (
          <div style={{ 
            color: 'white', 
            padding: '20px', 
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            {error}
          </div>
        ) : (
          <video 
            ref={videoRef}
            controls 
            autoPlay 
            onError={handleVideoError}
            style={{ 
              width: '100%', 
              maxHeight: '80vh',
              backgroundColor: '#000'
            }}
          >
            <source src="/assets/global/cleanovation/images/Tornado_Flush_ENG_240618.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="video-controls" style={{ 
        padding: '20px', 
        textAlign: 'center',
        marginTop: '20px'
      }}>
        <Link href="/en/cleanovation/clean-synergy" style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px'
        }}>
          Back to Clean Synergy
        </Link>
      </div>
    </div>
  );
};

export default TornadoFlushVideo;