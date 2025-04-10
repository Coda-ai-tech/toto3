'use client';
import dynamic from 'next/dynamic';
import { useEffect, useContext, useRef, useState } from 'react';
import { ConfigContext } from '@/context/config.context';
import { ModuleData, SectionTitle, MediaElement, ButtonElement } from '@/types';
import { IconList } from '@/types/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import 'swiper/css';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';

import styles from './MiniBanner.module.scss';

// Set Necessary Components
const SvgIcon = dynamic(() => import('@@/SvgIcon'), { ssr: false });
const Button = dynamic(() => import('@@/Button'), { ssr: false });
const Media = dynamic(() => import('@@/Media'), { ssr: false });

interface MiniBannerItem extends SectionTitle {
  cta: ButtonElement<IconList>[];
  media: MediaElement;
}

interface MiniBannerProps {
  items: MiniBannerItem[];
}

const MiniBanner = ({ order, data }: ModuleData<MiniBannerProps, null>) => {
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
  // const [isAutoPlayNow, setAutoPlayNow] = useState<boolean>(true);

  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    if (!progressBar.current || !progressContent.current) return;
    progressBar.current.style.setProperty('--progress', `${(1 - progress) * 100}%`);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const onChangeHandler = (e: any) => {
    if (!swiperEl.current) return;
    console.log(e.realIndex);
    setCurrentSlide(e.realIndex);
  };

  const goToSlide = (index: number) => {
    if (!swiperEl.current) return;
    (swiperEl.current as any).swiper.slideTo((swiperEl.current as any).swiper.clickedIndex);
   // setAutoPlayNow(true);
  };

  const slideToNext = () => {
    if (!swiperEl.current) return;
    (swiperEl.current as any).swiper.slideNext();
    //setAutoPlayNow(true);
  };

  const slideToPrev = () => {
    if (!swiperEl.current) return;
    (swiperEl.current as any).swiper.slidePrev();
    //setAutoPlayNow(true);
  };

  const startAutoplay = () => {
    if (!swiperEl.current) return;
    (swiperEl.current as any).swiper.autoplay.resume();
    //setAutoPlayNow(true);
  };

  const pauseAutoPlay = () => {
    if (!swiperEl.current) return;
    (swiperEl.current as any).swiper?.autoplay?.pause();
    //setAutoPlayNow(false);
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


return (  <section ref={ref} id={id ? id : `section${order}`}><Swiper
  ref={swiperEl}
  spaceBetween={50}
  loop={true}
  speed={1000}
  autoplay={{
    delay: 5000,
  }}
  onSlideChange={(e) => onChangeHandler(e)}
  className={`${styles.swiper}`}
  effect={'coverflow'}
  centeredSlides={true}
  slidesPerView={3}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  }}
  modules={[EffectCoverflow,Autoplay]}
>
  {["/assets/img/content/product-banner/01.webp",
        "/assets/img/content/product-banner/p_washletplus.jpg",
        "/assets/img/content/product-banner/04.webp",
        "/assets/img/content/product-banner/toilet1.jpg",
        "/assets/img/content/product-banner/lavatory1.jpg",
      ].map((src, index) => (
    <SwiperSlide key={index}>
      <div className={`${styles.itemThumb}  ${index === currentSlide ? styles.active : styles.inactive}`}>
      <Image  src={src}
          width={300}
          height={500}
          aria-label={`Slide ${index + 1}`}
          onClick={() => goToSlide(index)} 
          draggable={false} alt={''}></Image>
          </div>
      {/* <img src={src} alt="" onClick={() => goToSlide(index)} aria-label={`Slide ${index + 1}`}/> */}
    </SwiperSlide>
  ))}
</Swiper></section>);

  

  return (
    <section ref={ref} id={id ? id : `section${order}`} className={`${styles.miniBanner}`}>
      <div className={`${styles.inner}`}>
        <Swiper
          ref={swiperEl}
          spaceBetween={0}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 7000,
          }}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          onSlideChange={(e) => onChangeHandler(e)}
          className={`${styles.swiper}`}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
        >
          {items?.map((item: MiniBannerItem, index: number) => {
            const { title, subTitle, description, cta, media } = item;
            const slideLink = cta?.[0].link.href || '#';
            return (
              <SwiperSlide key={index}>
                <Link href={slideLink} passHref>
                  <div className={`${styles.miniBannerItem}`}>
                    <div className={`${styles.content}`}>
                      <div className={`${styles.contentInner}`}>
                        <div className={`${styles.itemContext}`}>
                          {subTitle?.trim() && <p className={`${styles.subTitle}`}>{subTitle}</p>}
                          {title?.trim() && <h2 className={`${styles.title}`}>{title}</h2>}
                          {description?.trim() && <p className={`${styles.description}`}>{description}</p>}
                          {cta?.map((item: ButtonElement<IconList>, bIndex: number) => {
                            return (
                              <div key={bIndex} className={`${styles.actions}`}>
                                <Button content={item} isDisabled={currentSlide !== index} noLink={true} />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.bg}`}>
                      <div className={`${styles.bgInner}`}>
                       
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
        );
          })}
      </Swiper>

    
      
    </div>
    </section >
  );
};

export default MiniBanner;
