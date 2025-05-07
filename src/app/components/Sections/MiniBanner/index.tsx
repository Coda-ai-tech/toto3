"use client";
import dynamic from "next/dynamic";
import { useEffect, useContext, useRef, useState, useMemo } from "react";
import { ConfigContext } from "@/context/config.context";
import { ModuleData, SectionTitle, MediaElement, ButtonElement } from "@/types";
import { IconList } from "@/types/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import { EffectCoverflow, EffectCreative, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

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
  const [width, setWidth] = useState<number>(0);

  const onChangeHandler = (e: any) => {
    if (!swiperEl.current) return;
    console.log(e.realIndex);
    setCurrentSlide(e.realIndex);
  };

  const ref = useRef<HTMLDivElement>(null);
  const { xxs, xs, sm, md } = useMemo(() => {
    return {
      xxs: width < 480,
      xs: width < 640,
      sm: width < 768,
      md: width < 1024,
    };
  }, [width]);

  useEffect(() => {
    const handleResize = () => {
      console.log({ innerWidth: window.innerWidth });
      setWidth(window.innerWidth);
    };
    handleResize(); // run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getStretch = () => {
    if (xs === true) return -50;
    if (sm === true) return -50;
    if (md === true) return -60;
    return -70;
  };

  return (
    <section
      ref={ref}
      id={id ? id : `section${order}`}
      className={`${styles.miniBanner}`}
    >
      <div className={`${styles.swiper_button_prev} ${styles.custom_arrow}`} />
      <div className={`${styles.swiper_button_next} ${styles.custom_arrow}`} />
      <Swiper
        key={`stretch-${getStretch()}`}
        ref={swiperEl}
        spaceBetween={0}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        centeredSlides={true}
        grabCursor={true}
        slidesPerView={
          xxs ? 1.5 : xs === true ? 2 : sm === true ? 2.5 : md === true ? 3 : 3
        }
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: getStretch(),
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={{
          nextEl: `.${styles.swiper_button_next}`,
          prevEl: `.${styles.swiper_button_prev}`,
        }}
        modules={[EffectCoverflow, Autoplay, Navigation]}
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
                          <button className={`${styles.learnmore}`}>
                            Learn more
                          </button>
                        </div>
                        {/* <div className={styles.descriptionWrapper}>
                          {description?.trim() && (
                            <p
                              dangerouslySetInnerHTML={{
                                __html: description.replace(/\n/g, "<br>"),
                              }}
                              className={`${styles.description}`}
                            ></p>
                          )}
                        </div> */}
                      </div>
                      <div className={`${styles.bottom}`}></div>
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
