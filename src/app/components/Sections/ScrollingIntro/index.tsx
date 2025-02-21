'use client';
import { useRef } from 'react';
import { ModuleData, SectionTitle, ButtonElement } from '@/types';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { IconList } from '@/types/icons';
import Button from '@@/Button';
import Image from 'next/image';
import styles from './ScrollingIntro.module.scss';

interface ScrollingIntroProps extends SectionTitle {
  cta: ButtonElement<IconList>[];
}

const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [1, 0], [-distance, distance]);
};

const ScrollingIntro = ({ order, data }: ModuleData<ScrollingIntroProps, null>) => {
  const {
    id,
    content: { title, subTitle, description, cta },
  } = data;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useParallax(scrollYProgress, 230);
  const y2 = useParallax(scrollYProgress, 300);
  const y3 = useParallax(scrollYProgress, 200);
  const y4 = useParallax(scrollYProgress, 150);
  const y5 = useParallax(scrollYProgress, 350);
  const y6 = useParallax(scrollYProgress, 500);

  return (
    <section ref={ref} id={id ? id : `section${order}`} className={`${styles.scrollingIntro}`}>
      <div className={`${styles.contentWrap}`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.context}`}>
            <h3 className={`${styles.title}`} dangerouslySetInnerHTML={{ __html: title }} />
            {subTitle?.trim() && <div className={`${styles.subTitle}`}>{subTitle}</div>}
            {description?.trim() && (
              <div className={`${styles.description}`} dangerouslySetInnerHTML={{ __html: description || '' }} />
            )}
            <div className={`${styles.action}`}>
              {cta?.map((item, index) => {
                return <Button key={index} content={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.decoWrap}`}>
        <div className={`${styles.decoInner}`}>
          <div className={`${styles.decoItem} deco01`}>
            <motion.div style={{ y: y1 }}>
              <Image
                src={`/assets/img/content/scrolling-intro/01.webp`}
                alt=''
                width={100}
                height={100}
                draggable={false}
              />
            </motion.div>
          </div>
          <div className={`${styles.decoItem} deco02`}>
            <motion.div style={{ y: y2 }}>
              <Image
                src={`/assets/img/content/scrolling-intro/02.webp`}
                alt=''
                width={100}
                height={100}
                draggable={false}
              />
            </motion.div>
          </div>
          <div className={`${styles.decoItem} deco03`}>
            <motion.div style={{ y: y3 }}>
              <Image
                src={`/assets/img/content/scrolling-intro/03.webp`}
                alt=''
                width={100}
                height={100}
                draggable={false}
              />
            </motion.div>
          </div>
          <div className={`${styles.decoItem} deco04`}>
            <motion.div style={{ y: y4 }}>
              <Image
                src={`/assets/img/content/scrolling-intro/04.webp`}
                alt=''
                width={100}
                height={100}
                draggable={false}
              />
            </motion.div>
          </div>
          <div className={`${styles.decoItem} deco05`}>
            <motion.div style={{ y: y5 }}>
              <Image
                src={`/assets/img/content/scrolling-intro/05.webp`}
                alt=''
                width={100}
                height={100}
                draggable={false}
              />
            </motion.div>
          </div>
          <div className={`${styles.decoItem} deco06`}>
            <motion.div style={{ y: y6 }}>
              <Image
                src={`/assets/img/content/scrolling-intro/06.webp`}
                alt=''
                width={100}
                height={100}
                draggable={false}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingIntro;
