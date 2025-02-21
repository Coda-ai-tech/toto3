'use client';
import dynamic from 'next/dynamic';
import { useEffect, useContext, useRef, useState } from 'react';
import { ConfigContext } from '@/context/config.context';
import { ModuleData, SectionTitle, MediaElement, ButtonElement } from '@/types';
import { IconList } from '@/types/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useInView } from 'framer-motion';
import 'swiper/css';

import styles from './HeroBanner.module.scss';

// Set Necessary Components
const SvgIcon = dynamic(() => import('@@/SvgIcon'), { ssr: false });
const Button = dynamic(() => import('@@/Button'), { ssr: false });
const Media = dynamic(() => import('@@/Media'), { ssr: false });

interface HeroBannerItem extends SectionTitle {
  cta: ButtonElement<IconList>[];
  media: MediaElement;
}

interface HeroBannerProps {
  items: HeroBannerItem[];
}

const HeroBanner = ({ order, data }: ModuleData<HeroBannerProps, null>) => {
  const {
    id,
    content: { items },
  } = data;

  const { setNavOverlay } = useContext(ConfigContext);

  useEffect(() => {
    if (order !== 0) return;
    setNavOverlay(true);

    return () => {
      setNavOverlay(false);
    };
  }, [order, setNavOverlay]);

  const swiperEl = useRef(null);
  const progressBar = useRef<any>(null);
  const progressContent = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlayNow, setAutoPlayNow] = useState<boolean>(true);

  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    if (!progressBar.current || !progressContent.current) return;
    progressBar.current.style.setProperty('--progress', `${(1 - progress) * 100}%`);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const onChangeHandler = (e: any) => {
    if (!swiperEl.current) return;
    setCurrentSlide(e.realIndex);
  };

  const goToSlide = (index: number) => {
    if (!swiperEl.current) return;
    (swiperEl.current as any).swiper.slideTo(index);
    setAutoPlayNow(true);
  };

  const slideToNext = () => {
    if (!swiperEl.current) return;
    (swiperEl.current as any).swiper.slideNext();
    setAutoPlayNow(true);
  };

  const slideToPrev = () => {
    if (!swiperEl.current) return;
    (swiperEl.current as any).swiper.slidePrev();
    setAutoPlayNow(true);
  };

  const startAutoplay = () => {
    if (!swiperEl.current) return;
    (swiperEl.current as any).swiper.autoplay.resume();
    setAutoPlayNow(true);
  };

  const pauseAutoPlay = () => {
    if (!swiperEl.current) return;
    (swiperEl.current as any).swiper?.autoplay?.pause();
    setAutoPlayNow(false);
  };

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: `0px 0px 0px 0px`,
  });

  useEffect(() => {
    if (!isInView) return;
    if (isInView) {
      startAutoplay();
      return;
    }
    return () => {
      pauseAutoPlay();
    };
  }, [isInView]);

  const [isVideoStart, setVideoStart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVideoStart(true);
    }, 500);
  }, [setVideoStart]);

  return (
    <section ref={ref} id={id ? id : `section${order}`} className={`${styles.heroBanner}`}>
      <div className={`${styles.inner}`}>
        <Swiper
          ref={swiperEl}
          spaceBetween={0}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 7000,
          }}
          modules={[Autoplay]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          onSlideChange={(e) => onChangeHandler(e)}
          className={`${styles.swiper}`}
        >
          {items?.map((item: HeroBannerItem, index: number) => {
            const { title, subTitle, description, cta, media } = item;
            return (
              <SwiperSlide key={index}>
                <div className={`${styles.heroBannerItem}`}>
                  <div className={`${styles.content}`}>
                    <div className={`${styles.contentInner}`}>
                      <div className={`${styles.itemContext}`}>
                        {subTitle?.trim() && <p className={`${styles.subTitle}`}>{subTitle}</p>}
                        {title?.trim() && <h2 className={`${styles.title}`}>{title}</h2>}
                        {description?.trim() && <p className={`${styles.description}`}>{description}</p>}
                        {cta?.map((item: ButtonElement<IconList>, bIndex: number) => {
                          return (
                            <div key={bIndex} className={`${styles.actions}`}>
                              <Button content={item} isDisabled={currentSlide !== index} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.bg}`}>
                    <div className={`${styles.bgInner}`}>
                      <Media
                        content={media}
                        className={`${styles.bgImg}`}
                        isPlay={index === currentSlide && media.type === 'video' ? isVideoStart : false}
                        isGradient={true}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className={`${styles.bannerControl}`}>
          <div className={`${styles.bannerControlInner}`}>
            <div className={`${styles.pagination}`}>
              <div className={`${styles.paginationInner}`}>
                {items?.map((item: HeroBannerItem, index: number) => {
                  return (
                    <button
                      key={item.title}
                      className={`${styles.bullet} ${index === currentSlide ? styles.active : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Slide ${index + 1}`}
                    >
                      <div className={`${styles.timeProgress}`}>
                        {index === currentSlide && (
                          <>
                            <div className={`${styles.progressBar}`} ref={progressBar}></div>
                            <span className='hidden' ref={progressContent}></span>
                          </>
                        )}
                      </div>
                      <span className='hidden'>{index}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={`${styles.arrowControl}`}>
              <button className={`${styles.controlBtn}`} onClick={() => slideToPrev()} aria-label='Slide To Prev'>
                <div className={`${styles.controlIcon}`}>
                  <SvgIcon name='arrowDoublePrev' />
                </div>
              </button>
              <div className={`${styles.controlPageNum}`}>
                {currentSlide + 1} / {items?.length}
              </div>
              <button className={`${styles.controlBtn}`} onClick={() => slideToNext()} aria-label='Slide To Next'>
                <div className={`${styles.controlIcon}`}>
                  <SvgIcon name='arrowDoubleNext' />
                </div>
              </button>
              <div className={`${styles.playStop}`}>
                {isAutoPlayNow ? (
                  <button
                    onClick={() => pauseAutoPlay()}
                    className={styles.btnPlayStop}
                    aria-label='Pause Slide AutoPlay'
                  >
                    <div className={`${styles.controlIcon}`}>
                      <SvgIcon name='pause' />
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => startAutoplay()}
                    className={styles.btnPlayStop}
                    aria-label='Resume Slide AutoPlay'
                  >
                    <div className={`${styles.controlIcon}`}>
                      <SvgIcon name='play' />
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
