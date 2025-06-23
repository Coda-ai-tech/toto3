'use client';
import dynamic from 'next/dynamic';
import { ModuleData, SectionTitle } from '@/types';
import Image from 'next/image';
import styles from './TechnologyDetail.module.scss';

const ShareButton = dynamic(() => import('@@/ShareButton'), { ssr: false });

interface TechnologyContextItem {
  align: 'row' | 'color';
  context: string;
  images: string[];
}

interface TechnologyDetailProps extends SectionTitle {
  icon: string;
  items: TechnologyContextItem[];
  youtube: string[] | null;
}

const TechnologyDetail = ({
  order,
  data,
}: ModuleData<TechnologyDetailProps, null>) => {
  const {
    id,
    content: { title, icon, items, youtube },
  } = data;

  return (
    <section
      id={id ? id : `section${order}`}
      className={`${styles.technologyDetail}`}>
      <div className={`${styles.contentWrap}`}>
        <div className={`${styles.inner}`}>
          <div className={`${styles.header}`}>
            <hgroup>
              <h2 className={`${styles.title}`}>
                {icon && (
                  <div className={`${styles.titleIcon}`}>
                    <Image
                      src={icon}
                      alt={title}
                      width={24}
                      height={24}
                      draggable={false}
                    />
                  </div>
                )}
                <div className={`${styles.titleTxt}`}>{title}</div>
              </h2>
            </hgroup>
            <div className={`${styles.share}`}>
              <div className={`${styles.shareLabel}`}>Share</div>
              <ShareButton />
            </div>
          </div>
          <div className={`${styles.detailContext}`}>
            {items.map((item, index) => (
              <article
                className={`${styles.detailContextItem} ${
                  item.align === 'row' ? styles.rowItem : ''
                }`}
                key={index}>
                {item.context && (
                  <div className={`${styles.itemContextWrap}`}>
                    <div
                      className={`${styles.itemContext}`}
                      dangerouslySetInnerHTML={{ __html: item.context }}
                    />
                  </div>
                )}
                {item.images.length && (
                  <div className={`${styles.itemImage}`}>
                    {item.images.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        width={100}
                        height={100}
                        style={{
                          objectFit: 'contain',
                        }}
                        alt=""
                        draggable={false}
                      />
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
      {youtube && youtube.map((video) => (
        <div className={`${styles.youtubeWrap}`}>
          <div className={`${styles.inner}`}>
            <iframe
              src={video}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TechnologyDetail;
