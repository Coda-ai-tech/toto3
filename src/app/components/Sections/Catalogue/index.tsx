'use client';
import { useEffect, useRef, useState } from 'react';
import {
  MediaElement,
  ModuleData,
  SectionTitle,
  ButtonElement,
  ButtonVariation,
  ButtonColor,
  ButtonAction,
  ButtonIconPosition,
  ButtonElementDefault,
  ButtonShape,
} from '@/types';
import { IconList } from '@/types/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import Link from 'next/link';
import styles from './Catalogue.module.scss';
import Media from '@@/Media';
import Button from '@@/Button';

import 'swiper/css';
import 'swiper/css/effect-cards';

interface CatalogueItem extends SectionTitle {
  media: MediaElement;
  lineUp: ButtonElementDefault[];
  links: {
    preview: string;
    download: string;
  };
}

interface LocationProps extends SectionTitle {
  items: CatalogueItem[];
}

const Catalogue = ({ order, data }: ModuleData<LocationProps, null>) => {
  const {
    id,
    content: { title, items },
  } = data;

  const previewCta = {
    label: 'preview',
    variant: ButtonVariation.contain,
    color: ButtonColor.primary,
    shape: ButtonShape.horizontal,
    icon: {
      name: 'preview',
      position: ButtonIconPosition.left,
    },
  } as ButtonElement<IconList>;

  const downloadCta = {
    label: 'DOWNLOAD',
    variant: ButtonVariation.outline,
    color: ButtonColor.primary,
    shape: ButtonShape.horizontal,
    icon: {
      name: 'download',
      position: ButtonIconPosition.left,
    },
  } as ButtonElement<IconList>;

  const swiperEl = useRef(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const onChangeHandler = (e: any) => {
    if (!swiperEl.current) return;
    setCurrentSlide(e.realIndex);
  };

  const goToSlide = (index: number) => {
    if (!swiperEl.current) return;
    (swiperEl.current as any).swiper.slideTo(index);
  };

  useEffect(() => {
    if (!swiperEl.current) return;
  }, [swiperEl]);

  return (
    <section id={id ? id : `section${order}`} className={`${styles.catalogue}`}>
      <div className={`${styles.inner}`}>
        <hgroup className={`${styles.head}`}>
          <h1 className={`${styles.sectionTitle}`}>{title}</h1>
        </hgroup>
        <div className={`${styles.body}`}>
          <div className={`${styles.catalogueWrap}`}>
            <div className={`${styles.left}`}>
              <Swiper
                ref={swiperEl}
                spaceBetween={0}
                modules={[EffectCards]}
                effect={'cards'}
                simulateTouch={false}
                onSlideChange={(e) => onChangeHandler(e)}
                className={`${styles.swiper}`}
              >
                {items?.map((item: CatalogueItem, index: number) => {
                  const { media } = item;
                  return (
                    <SwiperSlide key={index}>
                      <Link
                        className={`${styles.itemVisual}`}
                        href={item.links.preview}
                        target='_blank'
                        aria-label={`Click to Preview ${item.title} Catalogue`}
                      >
                        <Media
                          content={media}
                          className={`${styles.bgImg}`}
                          isPlay={index === currentSlide && media.type === 'video' ? true : false}
                        />
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className={`${styles.right}`}>
              <div className={`${styles.catalogueList}`}>
                {items?.map((item, index) => (
                  <div
                    key={index}
                    className={`${styles.catalogueItem}`}
                    role='button'
                    tabIndex={0}
                    onMouseOver={() => goToSlide(index)}
                    onFocus={() => goToSlide(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        goToSlide(index);
                      }
                    }}
                  >
                    <div className={`${styles.itemInner}`}>
                      <div className={`${styles.itemThumb}`}>
                        <Media content={item.media} className={`${styles.bgImg}`} />
                      </div>
                      <div className={`${styles.itemContentWrap}`}>
                        <div className={`${styles.itemContent}`}>
                          <div className={`${styles.itemContentHead}`}>
                            <div className={`${styles.itemTitle}`}>{item.title}</div>
                            <div className={`${styles.itemDescription}`}>{item.description}</div>
                          </div>

                          <div className={`${styles.lineUpList}`}>
                            <div className={`${styles.lineUpListTitle}`}>IDEAL PRODUCT LINEUP</div>
                            <div className={`${styles.lineUpWrap}`}>
                              {item.lineUp.map((lineUpItem, lIndex) => (
                                <Link key={lIndex} href={lineUpItem.link.href || ''} className={`${styles.lineUpItem}`}>
                                  <span className={`${styles.lineUpLabel}`}>{lineUpItem.label}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className={`${styles.itemAction}`}>
                          <Button
                            content={{
                              ...previewCta,
                              link: {
                                type: ButtonAction.newWindow,
                                href: item.links.preview,
                              },
                            }}
                          />
                          <Button
                            content={{
                              ...downloadCta,
                              link: {
                                type: ButtonAction.newWindow,
                                href: item.links.download,
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
