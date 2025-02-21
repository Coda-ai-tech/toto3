'use client';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'next/navigation';
import { ConfigContext } from '@/context/config.context';
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
import Link from 'next/link';
import SvgIcon from '@@/SvgIcon';
import ShareButton from '@@/ShareButton';
import { NewsItem } from '../NewsList';
import styles from './NewsDetail.module.scss';

import newsData from '../../../../../public/api/en/news-data.json';

const NewsDetail = ({ order, data }: ModuleData<SectionTitle, null>) => {
  const { id } = data;

  const { lang, slug } = useParams();
  const { dictionary } = useContext(ConfigContext);
  const newsList = newsData.data;

  const [currentNewsData, setCurrentNewsData] = useState<NewsItem>();

  useEffect(() => {
    if (!newsList || !slug) return;
    const data: NewsItem[] = newsList.filter((item: NewsItem) => item.slug === slug[1]);

    if (data) {
      setCurrentNewsData(data[0]);
    }
  }, [newsList, slug]);

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
    <section id={id ? id : `section${order}`} className={`${styles.newsDetail}`}>
      {currentNewsData && (
        <div className={`${styles.inner}`}>
          <div className={`${styles.head}`}>
            <Image
              src={currentNewsData.thumb}
              alt={currentNewsData.title}
              width={100}
              height={100}
              draggable={false}
              loading='lazy'
            />
          </div>
          <div className={`${styles.body}`}>
            <article className={`${styles.content}`}>
              <div className={`${styles.headUtils}`}>
                <Link href={`/${lang}/news`} className={`${styles.backCta}`}>
                  <div className={`${styles.backIcon}`}>
                    <SvgIcon name='arrowRightChevron' />
                  </div>
                  <div className={`${styles.backLabel}`}>{dictionary?.back || 'Back'}</div>
                </Link>

                <div className={`${styles.sharePage}`}>
                  <span className={`${styles.shareLabel}`}>{dictionary?.share || 'Share'}</span>
                  <ShareButton />
                </div>
              </div>
              <hgroup className={`${styles.newsHead}`}>
                <h1 className={`${styles.newsTitle}`}>{currentNewsData.title}</h1>
              </hgroup>
              <div
                className={`${styles.richContent} richText`}
                dangerouslySetInnerHTML={{ __html: currentNewsData.content }}
              />
            </article>
            <aside className={`${styles.aside}`}>
              <div className={`${styles.relatedNews}`}>
                <div className={`${styles.relatedNewsTitle}`}>Related News</div>
                <div className={`${styles.relatedNewsList}`}>
                  {newsList.map((item: NewsItem, index: number) => {
                    if (item.slug === currentNewsData.slug) return;

                    return (
                      <div key={index} className={`${styles.relatedNewsItem}`}>
                        <Link href={`/${lang}/news/${item.slug}`} className={`${styles.relatedNewsItemInner}`}>
                          <div className={`${styles.relatedNewsItemThumb}`}>
                            <Image
                              src={item.thumb}
                              alt={item.title}
                              width={100}
                              height={100}
                              draggable={false}
                              loading='lazy'
                            />
                          </div>
                          <div className={`${styles.relatedNewsItemContent}`}>
                            <h3 className={`${styles.relatedNewsItemTitle}`}>{item.title}</h3>
                            <p className={`${styles.relatedNewsItemDescription}`}>{item.description}</p>
                          </div>
                        </Link>

                        <div className={`${styles.relatedNewsItemAction}`}>
                          <Button
                            content={{
                              ...cardReadMoreCta,
                              link: { type: ButtonAction.routeLink, href: `/${lang}/news/${item.slug}` },
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsDetail;
