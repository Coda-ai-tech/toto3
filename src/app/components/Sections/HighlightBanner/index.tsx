'use client';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { ModuleData, SectionTitle, MediaElement, ButtonElement } from '@/types';
import { IconList } from '@/types/icons';
import { useInView } from 'framer-motion';
import styles from './HighlightBanner.module.scss';
import Link from 'next/link';

const Button = dynamic(() => import('@@/Button'), { ssr: false });
const Media = dynamic(() => import('@@/Media'), { ssr: false });

interface SampleBannerItem extends SectionTitle {
  cta: ButtonElement<IconList>[];
  media: MediaElement;
}

interface HighlightBannerProps {
  items: SampleBannerItem[];
}

const HighlightBannerItem = ({ data }: { data: SampleBannerItem }) => {
  const { title, cta, media } = data;
  const linkHref = cta[0].link.href || '#';

  return (

    <div className={`${styles.bannerItem}`}>
      <Link href={linkHref} passHref>
        <div className={`${styles.itemInner}`}>
          <div className={`${styles.itemContent}`}>
            <div className={`${styles.itemTitle}`}>{title}</div>
            <div className={`${styles.itemAction}`}>
              {/* <Button content={cta[0]} /> */}
            </div>
          </div>
          <div className={`${styles.itemBg}`}>
            <div className={`${styles.itemBgInner}`}>
              <Media content={media} />
            </div>
          </div>
        </div>
      </Link>
    </div >

  );
};

const HighlightBanner = ({ order, data }: ModuleData<HighlightBannerProps, null>) => {
  const {
    id,
    content: { items },
  } = data;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: `0px 0px 0px 0px`,
  });

  return (
    <section
      ref={ref}
      id={id ? id : `section${order}`}
      className={`${styles.highlightBanner} ${isInView ? styles.hello : ''}`}
    >
      <div className={`${styles.inner}`}>
        <div className={`${styles.left}`}>{items[0] && <HighlightBannerItem data={items[0]} />}</div>
        <div className={`${styles.right}`}>
          {items[1] && <HighlightBannerItem data={items[1]} />}
          {items[2] && <HighlightBannerItem data={items[2]} />}
        </div>
      </div>
    </section>
  );
};

export default HighlightBanner;
