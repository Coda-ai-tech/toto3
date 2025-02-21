'use client';
import { useEffect, useRef, useState } from 'react';
import { MediaFormat, type MediaElement } from '@/types';
import Image from 'next/image';
import styles from './Media.module.scss';

interface MediaProps {
  content: MediaElement;
  className?: string;
  isPlay?: boolean;
  isGradient?: boolean;
}

const Media = ({ content, className, isPlay, isGradient = false }: MediaProps) => {
  const media = content;
  const videoEl = useRef<any>(null);

  const getObjectLength = (obj: any) => {
    let count = 0;
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] !== null) {
        count++;
      }
    }
    return count;
  };

  const mediaLength = getObjectLength(media?.src);
  const [isFireFirstPlay, setFireFirstPlay] = useState(false);

  useEffect(() => {
    if (isPlay) {
      videoEl.current.play();
      setFireFirstPlay(true);
      return;
    }

    if (!isPlay) {
      videoEl.current?.pause();
      return;
    }
  }, [isPlay, setFireFirstPlay]);

  if (!media) return <p className='text-[20px] p-10'>No Image uploaded and found</p>;

  return (
    <figure className={`${styles.mediaWrap} ${className ? className : ''} ${isGradient ? styles.hasGradient : ''}`}>
      {media.type === MediaFormat.image && mediaLength > 1 && (
        <>
          {Object.entries(media.src).map(([key, value]) => {
            const resKey = key.charAt(0).toUpperCase() + key.slice(1);
            return (
              <Image
                key={`media${resKey}`}
                className={`display${resKey}`}
                src={value}
                alt={media.alt || ''}
                loading='lazy'
                blurDataURL={value}
                width={100}
                height={100}
                draggable={false}
              />
            );
          })}
        </>
      )}

      {media.type === MediaFormat.image && mediaLength < 2 && (
        <Image
          src={media.src?.desktop || media.src?.mobile}
          alt={media.alt || ''}
          loading='lazy'
          blurDataURL={media.src?.desktop || media.src?.mobile}
          width={100}
          height={100}
          draggable={false}
        />
      )}

      {media.type === MediaFormat.video && (
        <>
          {!isFireFirstPlay && !isPlay ? (
            <Image
              src={`/assets/img/content/hero-banner/fallback-poster.webp`}
              alt={media.alt || ''}
              blurDataURL={`${media.poster}`}
              width={100}
              height={100}
              priority={true}
              draggable={false}
              fetchPriority='high'
            />
          ) : (
            <video
              ref={videoEl}
              className={styles.videoCont}
              loop
              playsInline
              muted
              controls={false}
              preload='none'
              poster={`/assets/img/content/hero-banner/fallback-poster.webp`}
            >
              <source src={media.src.desktop} type='video/mp4' />
              <track default kind='captions'></track>
            </video>
          )}
        </>
      )}

      {media.alt && <figcaption className='blind'>{media.alt}</figcaption>}
    </figure>
  );
};

export default Media;
