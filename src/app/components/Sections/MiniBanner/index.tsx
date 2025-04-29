"use client";
import dynamic from "next/dynamic";
import { useEffect, useContext, useRef, useState } from "react";
import { ConfigContext } from "@/context/config.context";
import { ModuleData, SectionTitle, MediaElement, ButtonElement } from "@/types";
import { IconList } from "@/types/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import { EffectCoverflow, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import styles from "./MiniBanner.module.scss";


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
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const onChangeHandler = (e: any) => {
    if (!swiperEl.current) return;
    console.log(e.realIndex);
    setCurrentSlide(e.realIndex);
  };

  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      id={id ? id : `section${order}`}
      className={`${styles.miniBanner}`}
    >
      <Swiper
        ref={swiperEl}
        spaceBetween={0}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        grabCursor={true}
        slidesPerView={3}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: -100,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className={styles.swiper}
        onSlideChange={(e) => onChangeHandler(e)}
      >
        {items?.map((item: MiniBannerItem, index: number) => {
          const { title, subTitle, description, cta, media } = item;
          const slideLink = cta?.[0].link.href || "#";
          const activeSlidePre =
            currentSlide == 0 ? items.length - 1 : currentSlide - 1;
          const activeSlideNext =
            currentSlide == items.length - 1 ? 0 : currentSlide + 1;

          return (
            <SwiperSlide
              className={`${styles.slide} ${
                index === currentSlide ||
                index === activeSlidePre ||
                index === activeSlideNext
                  ? styles.active
                  : styles.inactive
              }`}
              key={index}
            >
              <Link href={slideLink} passHref>
                <div className={`${styles.card}`}>
                  <div className={`${styles.image}`}>
                    <img
                      src={media.src.desktop}
                      aria-label={`Slide ${index + 1}`}
                      draggable={false}
                      alt={""}
                    ></img>
                  </div>
                  <div className={`${styles.background}`}>
                    <div className={`${styles.content}`}>
                      <div className={`${styles.top}`}>
                        <div className={styles.titleWrapper}>
                          {title?.trim() && (
                            <p className={`${styles.title}`}>{title}</p>
                          )}
                        </div>
                        <div className={styles.descriptionWrapper}>
                          {description?.trim() && (
                            <p
                              dangerouslySetInnerHTML={{
                                __html: description.replace(/\n/g, "<br>"),
                              }}
                              className={`${styles.description}`}
                            ></p>
                          )}
                        </div>
                      </div>
                      <div className={`${styles.bottom}`}>
                        <button className={`${styles.learnmore}`}>
                          Learn more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default MiniBanner;
