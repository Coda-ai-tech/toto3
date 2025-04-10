'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState, useContext, useCallback, useRef } from 'react';
import { ConfigContext } from '@/context/config.context';
import { ButtonElement, ButtonElementDefault, ButtonVariation } from '@/types';
import { motion } from 'framer-motion';
import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import Image from 'next/image';
import useScrollDirection, { ScrollDown } from '@/hook/useScrollDirection';
import Button from '@@/Button';
import styles from './Navigation.module.scss';

// Set Necessary Components
const SvgIcon = dynamic(() => import('@@/SvgIcon'), { ssr: false });

interface AnimateChangeInHeightProps {
  children: React.ReactNode;
  className?: string;
}

const AnimateChangeInHeight: React.FC<AnimateChangeInHeightProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | 'auto'>('auto');

  const { isNavShow } = useContext(ConfigContext);

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        const observedHeight = entries[0].contentRect.height;
        setHeight(observedHeight);
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <motion.div
      className={`${styles.subNav} overflow-hidden ${isNavShow ? styles.subNavActive : ''} ${
        className ? className : ''
      }`}
      style={{ height }}
      animate={{ height }}
      transition={{ duration: 0.3 }}
    >
      <div ref={containerRef} className={`${styles.subNavAniCont}`}>
        {children}
      </div>
    </motion.div>
  );
};

const Navigation = ({ content, isTop }: { content: any; isTop: boolean }) => {
  const { isNavShow, setNavShow, isNavOverlay, dictionary } = useContext(ConfigContext);
  const [currentSub, setCurrentSub] = useState(0);
  const scrollDirection = useScrollDirection();

  const openNavigation = (index: number) => {
    if (currentSub === index && isNavShow) {
      setNavShow(false);
    } else {
      setCurrentSub(index);
      setNavShow(true);
    }
  };

  const closeNavigation = useCallback(() => {
    setCurrentSub(0);
    setNavShow(false);
  }, [setNavShow]);

  useEffect(() => {
    if (scrollDirection === ScrollDown) closeNavigation();
  }, [scrollDirection, closeNavigation]);

  useEffect(() => {
    if (isNavShow) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [isNavShow]);

  return (
    <nav
      className={`${styles.nav} ${isNavOverlay ? styles.overlay : ''} ${isNavShow ? styles.forceDark : ''} ${
        isTop ? '' : styles.forceDark
      }`}
    >
      <div className={styles.mainNav}>
        <div className={styles.mainNavInner}>
          {content.length &&
            content.map((data: Record<string, any>, index: number) => {
              if (data.sub && Object.keys(data.sub).length > 0) {
                return (
                  <div
                    key={`nav${index}`}
                    className={`${styles.hasSub} ${currentSub == index && isNavShow ? styles.navActive : ''}`}
                  >
                    <button
                      onClick={() => {
                        openNavigation(index);
                      }}
                      aria-haspopup='true'
                      aria-expanded={isNavShow as boolean}
                      aria-label={data.title}
                    >
                      {data.title}
                      <div className={styles.icon}>
                        <SvgIcon name='arrowDownChevron' />
                      </div>
                    </button>
                    <AnimateChangeInHeight>
                      {currentSub === index && isNavShow && (
                        <div className={styles.subNavInner}>
                          <div className={`${styles.subWrapInner}`}>
                            {content[currentSub]?.highlight && (
                              <div className={`${styles.highlightWrap}`}>
                                {content[currentSub]?.highlight?.media && (
                                  <div className={`${styles.highlightThumb}`}>
                                    <Image
                                      src={content[currentSub]?.highlight?.media.src.desktop}
                                      alt=''
                                      width={100}
                                      height={100}
                                    />
                                  </div>
                                )}

                                <div
                                  className={`${styles.highlightContent} ${
                                    content[currentSub]?.highlight?.description ? styles.hasDesc : ''
                                  }`}
                                >
                                  {content[currentSub]?.highlight?.title && (
                                    <div className={`${styles.highlightTitle}`}>
                                      {content[currentSub]?.highlight?.title}
                                    </div>
                                  )}

                                  {content[currentSub]?.highlight?.description && (
                                    <div className={`${styles.highlightDescription}`}>
                                      {content[currentSub]?.highlight?.description}
                                    </div>
                                  )}

                                  {content[currentSub]?.highlight?.cta && (
                                    <div className={`${styles.highlightAction}`}>
                                      <Button
                                        content={{
                                          ...content[currentSub]?.highlight?.cta,
                                          variant: ButtonVariation.default,
                                        }}
                                      />
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}

                            <ul className={`${styles.subNavColumWrap}`}>
                              {content[currentSub].sub?.map((item: any, sIndex: number) => {
                                return (
                                  <div key={sIndex} className={`${styles.subNavColum}`}>
                                    <div className={`${styles.navColumTitle}`}>{item.title}</div>
                                    <div className={`${styles.navColumList}`}>
                                      <ul
                                        className={`${item?.items.length > 7 ? styles.multiColum : styles.singleColum}`}
                                      >
                                        {item?.items.map((subItem: ButtonElementDefault, snIndex: number) => {
                                          return (
                                            <li key={snIndex}>
                                              <Button
                                                content={{ ...subItem, variant: ButtonVariation.default }}
                                                className={`${styles.subNavItem}`}
                                              />
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    </div>
                                  </div>
                                );
                              })}
                            </ul>
                          </div>

                          <button className={styles.subNavClose} onClick={() => closeNavigation()} aria-label='Close'>
                            <div className={styles.closeIcon}>
                              <SvgIcon name='close' />
                            </div>
                            <div className={`${styles.closeLabel}`}>{dictionary?.close}</div>
                          </button>
                        </div>
                      )}
                    </AnimateChangeInHeight>
                  </div>
                );
              } else {
                const singleMenu: ButtonElement<any> = {
                  label: data.title,
                  variant: ButtonVariation.default,
                  link: {
                    type: data.link.type,
                    href: data.link.href,
                  },
                };

                return (
                  <div key={`nav${index}`} className={`${styles.noSub}`}>
                    {<Button content={singleMenu} />}
                  </div>
                );
              }
            })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
