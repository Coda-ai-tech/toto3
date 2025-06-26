'use client';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { ModuleData, SectionTitle, MediaElement, ButtonElement } from '@/types';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import { IconList } from '@/types/icons';
import styles from './LatestOffer.module.scss';
import { useParams } from 'next/navigation';

// Set Necessary Components
const Button = dynamic(() => import('@@/Button'), { ssr: false });
const Media = dynamic(() => import('@@/Media'), { ssr: false });

interface LatestOfferItem extends SectionTitle {
  cta: ButtonElement<IconList>[];
  media: MediaElement;
}

interface LatestOfferProps extends SectionTitle {
  items: LatestOfferItem[];
}

const OfferCard = ({ data }: { data: LatestOfferItem }) => {
  const { title, description, cta, media } = data;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: `0px 0px 0px 0px`,
  });

  return (
    <div ref={ref} className={`${styles.offerCard} ${isInView ? styles.hello : ''}`}>
      <div className={`${styles.offerCardInner}`}>
        <Link href={cta[0].link.href || '#'} className={`${styles.thumb}`}>
          <Media content={media} />
        </Link>
        <div className={`${styles.content}`}>
          <Link href={cta[0].link.href || '#'} className={`${styles.hgroup}`}>
            <div className={`${styles.cardTitle}`}>{title}</div>
            <div className={`${styles.cardDescription}`}>{description}</div>
          </Link>
          <div className={`${styles.cardAction}`}>
            {cta?.map((btn, index) => (
              <Button key={index} content={btn} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const LatestOffer = ({ order, data }: ModuleData<LatestOfferProps, null>) => {
  const {
    id,
    //content: { title, items },
  } = data;
  const { lang } = useParams();
  const [items, setItems] = useState<LatestOfferItem[]>([]);
  const [title, setTitle] = useState<String>('');

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DEV_CMS_API_ENDPOINT}${process.env.NEXT_PUBLIC_DEV_CMS_ENDPOINT_SUFFIX}/${lang}/latest-news`
      );
      const latestOfferDatas = await response.json();
      setTitle(latestOfferDatas.data.title);
      setItems(latestOfferDatas.data.items);
    } catch (error) {
      console.log("\x1b[36m%s\x1b[0m", `==== DATA NOT FOUND () ====`);
      console.error("error", error);
    }
  };
  
   useEffect(() => {
      fetchData();
    }, []);
  

  return (
    <section id={id ? id : `section${order}`} className={`${styles.latestOffer}`}>
      <div className={`${styles.inner}`}>
        {title?.trim() && (
          <hgroup className={`${styles.head}`}>
            <h3 className={`${styles.sectionTitle}`}>{title}</h3>
          </hgroup>
        )}

        <div className={`${styles.body}`}>
          <div className={`${styles.cardWrap}`}>
            {items?.map((item, index) => {
              return <OfferCard key={index} data={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestOffer;
