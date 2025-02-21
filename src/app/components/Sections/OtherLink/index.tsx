'use client';
import dynamic from 'next/dynamic';
import { ModuleData, SectionTitle, MediaElement, ButtonElement, ButtonSize } from '@/types';
import { IconList } from '@/types/icons';
import styles from './OtherLink.module.scss';

const Button = dynamic(() => import('@@/Button'), { ssr: false });
const Media = dynamic(() => import('@@/Media'), { ssr: false });

interface OtherLinkItem extends SectionTitle {
  cta: ButtonElement<IconList>[];
  media: MediaElement;
}

interface OtherLinkProps {
  items: OtherLinkItem[];
}

const OtherLink = ({ order, data }: ModuleData<OtherLinkProps, null>) => {
  const {
    id,
    content: { items },
  } = data;

  return (
    <section id={id ? id : `section${order}`} className={`${styles.otherLink}`}>
      <div className={`${styles.inner}`}>
        {items?.map((item, index) => (
          <div key={index} className={`${styles.linkItem}`}>
            <div className={`${styles.thumb}`}>
              <Media content={item.media} />
            </div>
            <div className={`${styles.content}`}>
              <div className={`${styles.title}`}>{item.title}</div>
              <div className={`${styles.action}`}>
                <Button content={item.cta[0]} size={ButtonSize.sm} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherLink;
