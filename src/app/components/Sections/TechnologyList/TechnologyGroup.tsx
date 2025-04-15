'use client';
import { useRef, useEffect, useState } from 'react';
import { SectionTitle, ButtonLinkElement } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import SvgIcon from '@@/SvgIcon';
import styles from './TechnologyList.module.scss';

export interface TechnologyItemData extends SectionTitle {
  link: ButtonLinkElement;
  icon: string;
  thumb: string;
}

export interface TechnologyGroupData {
  id: string;
  label: string;
  list: TechnologyItemData[];
}

export const TechnologyListItem = ({ data }: { data: TechnologyItemData }) => {
  const [icoError, setIcoError] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  return (
    <Link className={`${styles.techItem}`} href={data.link.href || '/'}>
      <div className={`${styles.techItemInner}`}>
        <div className={`${styles.techEntryInfo}`}>
          <div className={`${styles.techTitleWrap}`}>
            <div className={`${styles.techIcon}`}>
              {data.icon ?
                <div className={`${styles.techIconInner}`}>
                  <Image
                    src={!icoError ? data.icon : '/assets/img/content/technology/ico-fallback.png'}
                    width={100}
                    height={100}
                    alt={data.title}
                    onError={() => !icoError && setIcoError(true)}
                  />
                </div>
                :
                <div className={`${styles.emptyIcon}`}>
                  <div></div>
                </div>
              }
            </div>
            <div className={`${styles.techTitle}`}>{data.title}</div>
          </div>

          <div className={`${styles.techDescription}`}>
            <div className={`${styles.descriptionContext}`}>{data.description}</div>
          </div>
        </div>

        {data.thumb && (
          <div className={`${styles.techThumb}`}>
            <Image
              src={!thumbError ? data.thumb : '/assets/img/content/technology/thumb-fallback.png'}
              width={100}
              height={100}
              alt={data.title}
              onError={() => !thumbError && setThumbError(true)}
              loading='lazy'
              blurDataURL={data.thumb}
            />
          </div>
        )}
        <div className={`${styles.itemIndicator}`}>
          <div className={`${styles.linkIcon}`}>
            <SvgIcon name='arrowDoubleNext' />
          </div>
        </div>
      </div>
    </Link>
  );
};

export const TechnologyGroup = ({
  data,
  onUpdate,
}: {
  data: TechnologyGroupData;
  onUpdate: (target: string) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      // const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const overScroll = rect.top;
      const overScrollEnd = rect.top + rect.height;
      if (overScroll < window.innerHeight / 3 && overScrollEnd > window.innerHeight / 3) {
        onUpdate(data.label);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [data.label, onUpdate]);

  return (
    <article ref={ref} id={data.id || ''} className={`${styles.techGroup}`}>
      <div className={`${styles.groupLabel}`}>
        <div className={`${styles.groupLabelTxt}`}>{data.label}</div>
      </div>

      <div className={`${styles.groupBody}`}>
        {data.list.map((item, index) => (
          <TechnologyListItem key={index} data={item} />
        ))}
      </div>
    </article>
  );
};
