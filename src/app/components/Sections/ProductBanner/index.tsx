'use client';
import dynamic from 'next/dynamic';
import { useState, useCallback, useEffect, useRef } from 'react';
import {
  ModuleData,
  ButtonElementDefault,
  MediaElement,
  SectionTitle,
  ButtonSize,
  ButtonShape,
  ButtonVariation,
  ButtonColor,
  ButtonIconPosition,
  ButtonAction,
  ButtonElement,
} from '@/types';
import { IconList } from '@/types/icons';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductBanner.module.scss';

// Set Necessary Components
const Button = dynamic(() => import('@@/Button'), { ssr: false });
const Media = dynamic(() => import('@@/Media'), { ssr: false });

interface ProductBannerItem extends ButtonElementDefault {
  media: MediaElement;
}

interface ProductBannerProps extends SectionTitle {
  items: ProductBannerItem[];
}

const ProductBanner = ({ order, data }: ModuleData<ProductBannerProps, null>) => {
  const {
    id,
    content: { title, items },
  } = data;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: `0px 0px 0px 0px`,
  });

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentMedia, setCurrentMedia] = useState<MediaElement>();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const decreaseIndex = useCallback(() => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  }, [currentIndex]);

  const increaseIndex = useCallback(() => {
    if (currentIndex >= items.length - 1) return;
    setCurrentIndex(currentIndex + 1);
  }, [currentIndex, items.length]);

  const controller: ButtonElement<IconList>[] = [
    {
      label: 'Discover',
      variant: ButtonVariation.contain,
      color: ButtonColor.primary,
      shape: ButtonShape.square,
      icon: {
        name: 'arrowDoublePrev',
        position: ButtonIconPosition.left, // ! nullable
      },
      link: {
        type: ButtonAction.callback,
        href: null,
      },
      callback: () => {
        decreaseIndex();
      },
    },
    {
      label: 'Discover',
      variant: ButtonVariation.contain,
      color: ButtonColor.primary,
      shape: ButtonShape.square,
      icon: {
        name: 'arrowDoubleNext',
        position: ButtonIconPosition.left, // ! nullable
      },
      link: {
        type: ButtonAction.callback,
        href: null,
      },
      callback: () => {
        increaseIndex();
      },
    },
  ];

  useEffect(() => {
    if (!items) return;
    setCurrentMedia(items[currentIndex].media);
  }, [currentIndex, items]);

  return (
    <section
      ref={ref}
      id={id ? id : `section${order}`}
      className={`${styles.productBanner} ${isInView ? styles.hello : ''}`}
    >
      <div className={`${styles.inner}`}>
        <div className={`${styles.bannerWrap}`}>
          <div className={`${styles.thumb}`}>{currentMedia && <Media content={currentMedia} />}</div>
          <div className={`${styles.list}`}>
            <div className={`${styles.listInner}`}>
              <div className={`${styles.titleAndList}`}>
                <h3 className={`${styles.bannerTitle}`}>{title}</h3>
                <div className={`${styles.bannerList}`}>
                  {items?.map((item, index) => {
                    console.log("item", item);
                    
                    return (
                      <Link
                        key={index}
                        href={item.link.href ?? '/en'}
                        title={item.label}
                        className={`${styles.bannerItem} ${currentIndex === index ? styles.active : ''}`}
                        onMouseOver={() => {
                          setCurrentIndex(index);
                          (document?.activeElement as any).blur();
                        }}
                        onFocus={() => setCurrentIndex(index)}
                      >
                        <span className={`${styles.itemLabel}`}>{item.label}</span>
                        <div className={`${styles.itemThumb}`}>
                          {((isMobile && item.media.src.mobile) || (!isMobile && item.media.src.desktop)) && (
                            <Image
                              src={isMobile ? item.media.src.mobile : item.media.src.desktop}
                              width={100}
                              height={100}
                              alt={`Product Category - ${item.label} Thumbnail`}
                              draggable={false}
                            />
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className={`${styles.controller}`}>
                <Button content={controller[0]} size={ButtonSize.lg} isDisabled={currentIndex === 0 ? true : false} />
                <Button
                  content={controller[1]}
                  size={ButtonSize.lg}
                  isDisabled={currentIndex >= items.length - 1 ? true : false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
