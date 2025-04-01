'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import {
  ModuleData,
  SectionTitle,
  ButtonElement,
  ButtonVariation,
  ButtonColor,
  ButtonAction,
  ButtonIconPosition,
  ButtonShape,
} from '@/types';
import { IconList } from '@/types/icons';
import Image from 'next/image';
import Button from '@@/Button';
import styles from './NewsList.module.scss';

import newsData from '../../../../../public/api/en/news-data.json';

export interface NewsItem extends SectionTitle {
  slug: string;
  thumb: string | null;
  content: string;
}
const NewsList = ({ order, data }: ModuleData<SectionTitle, null>) => {
  const {
    id,
    content: { title },
  } = data;

  const newsList = newsData.data;
  const [highlightNews, setHighlightNews] = useState<NewsItem[]>();
  const [otherNews, setOtherNews] = useState<NewsItem[]>();

  useEffect(() => {
    if (!newsList) return;

    setHighlightNews([newsList[0], newsList[1]]);

    const others = [] as NewsItem[];
    newsList.map((item, index) => {
      if (index > 1) {
        others.push(item);
      }
    });
    setOtherNews(others);
  }, [setHighlightNews, setOtherNews, newsList]);

  const { lang } = useParams();

  const highlightReadMoreCta = {
    label: 'Read More',
    variant: ButtonVariation.contain,
    color: ButtonColor.primary,
    shape: ButtonShape.horizontal,
    icon: null,
  } as ButtonElement<IconList>;

  const cardReadMoreCta = {
    label: 'Read More',
    variant: ButtonVariation.contain,
    color: ButtonColor.primary,
    shape: ButtonShape.square,
    icon: {
      name: 'learnMore',
      position: ButtonIconPosition.left, // ! nullable
    },
  } as ButtonElement<IconList>;

  return (
    <section id={id ? id : `section${order}`} className={`${styles.newsList}`}>
      <div className={`${styles.inner}`}>
        <div className={`${styles.head}`}>
          <h1 className={`${styles.sectionTitle}`}>{title}</h1>
        </div>
        <div className={`${styles.body}`}>
          <div className={`${styles.highlightNews}`}>
            {highlightNews?.map((item, index) => {
              return (
                <div className={`${styles.highlightItem}`} key={index}>
                  <div className={`${styles.highlightItemThumb}`}>
                    <Image
                      src={item.thumb?? '/assets/img/content/hero-banner/05.webp'}
                      alt={item.title}
                      width={100}
                      height={100}
                      draggable={false}
                      loading='lazy'
                    />
                  </div>
                  <div className={`${styles.highlightItemContent}`}>
                    <h3 className={`${styles.highlightItemTitle}`}>{item.title}</h3>
                    <p className={`${styles.highlightItemDescription}`}>{item.description}</p>
                    <div className={`${styles.highlightAction}`}>
                      <Button
                        content={{
                          ...highlightReadMoreCta,
                          link: { type: ButtonAction.routeLink, href: `/${lang}/news/${item.slug}` },
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {otherNews && otherNews?.length > 0 && (
            <div className={`${styles.newsCardWrap}`}>
              {otherNews.map((item, index) => {
                return (
                  <div key={index} className={`${styles.newsCard}`}>
                    <div className={`${styles.cardThumb}`}>
                      <Image
                        src={item.thumb?? '/assets/img/content/hero-banner/05.webp'}
                        alt={item.title}
                        width={100}
                        height={100}
                        draggable={false}
                        loading='lazy'
                      />
                    </div>
                    <div className={`${styles.cardContent}`}>
                      <h3 className={`${styles.cardTitle}`}>{item.title}</h3>
                      <p className={`${styles.cardDescription}`}>{item.description}</p>
                      <div className={`${styles.cardAction}`}>
                        <Button
                          content={{
                            ...cardReadMoreCta,
                            link: { type: ButtonAction.routeLink, href: `/${lang}/news/${item.slug}` },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsList;
