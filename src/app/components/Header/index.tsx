'use client';
import dynamic from 'next/dynamic';
import React, { useState, useEffect, useContext, useCallback, useRef } from 'react';
import { ConfigContext } from '@/context/config.context';
import { GlobalDataProps } from '@@/GlobalConfig';
import { useParams, usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ButtonElement, ButtonVariation, ButtonColor } from '@/types';
import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import useScrollDirection, { ScrollUp, ScrollToMainContent } from '@/hook/useScrollDirection';
import { Accordion, AccordionItem } from '@heroui/react';
import { GetLocaleFallback } from '@/hook/useLocaleFallback';
import KeyDown from '@/hook/useKeyDown';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@@/Button';
import styles from './Header.module.scss';

// Set Necessary Components
const Navigation = dynamic(() => import('@@/Header/Navigation'));
const SvgIcon = dynamic(() => import('@@/SvgIcon'), { ssr: false });
const LocaleSwitcher = dynamic(() => import('@@/LocaleSwitcher'), { ssr: false });
const CustomModal = dynamic(() => import('@@/Modal'), { ssr: false });
const GlobalNetworkModal = dynamic(() => import('@@/Modal/GlobalNetwork'), { ssr: true });
const SnsList = dynamic(() => import('@@/Footer/SnsList'), { ssr: false });

const Header = ({ data }: { data: GlobalDataProps }) => {
  const { lang = GetLocaleFallback() } = useParams();
  const { setNavShow, isNavOverlay, isHeaderShow, isNavShow } = useContext(ConfigContext);
  const searchField = useRef<HTMLInputElement>(null);

  const {
    logo,
    navigation: { header },
    dictionary,
  } = data;

  const scrollDirection = useScrollDirection();
  const [y, setY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [isMobNavShow, setMobNavShow] = useState(false);

  useEffect(() => {
    const handleNavTheme = () => {
      setY(window.scrollY);
      if (window.scrollY > 10) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener('scroll', handleNavTheme);
    return () => {
      window.removeEventListener('scroll', handleNavTheme);
    };
  }, [y, scrollDirection, setIsTop]);

  const openMobNav = useCallback(() => {
    setMobNavShow(true);
    disablePageScroll();
  }, [setMobNavShow]);

  const closeMobNav = useCallback(() => {
    setMobNavShow(false);
    enablePageScroll();
  }, [setMobNavShow]);

  const closeAll = useCallback((): void => {
    setNavShow(false);
    closeMobNav();
  }, [setNavShow, closeMobNav]);
  KeyDown('Escape', closeAll);

  const pathname = usePathname();

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  const skipToMainHandling = () => ScrollToMainContent();

  const [isModalShow, setModalShow] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const onModalStatusHandler = useCallback(
    (e: boolean) => {
      setModalShow(e);
      setOpen(e);
    },
    [setModalShow, setOpen]
  );

  const handleOpenModal = () => {
    setOpen(!open);
    setModalShow(true);
  };

  const keyDownHandler = (e: any) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    redirectToProductPage();
  }

  const redirectToProductPage = () => {
    const keyword = searchField.current?.value.trim();
    if (!keyword) return;
    console.log(keyword);
    const redirectLink = `/en/product?keyword=${encodeURIComponent(keyword)}`;
    window.location.href = redirectLink;
  }

  return (
    <>
      <button
        className='skipToMain'
        onClick={() => {
          skipToMainHandling();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.currentTarget.blur();
            skipToMainHandling();
          }
        }}
      >
        {dictionary?.skipToMainContent || 'Skip To Main Content'}
      </button>
      <header
        className={`${styles.header} ${isMobNavShow ? styles.mobNavOpen : ''} ${isNavOverlay ? styles.overlay : ''} ${isHeaderShow ? '' : styles.hideHeader
          } ${scrollDirection === ScrollUp ? '' : styles.scrollDown} ${isNavShow ? styles.showMenu : ''} ${isTop ? styles.expand : styles.collapse
          }`}
      >
        <div className={styles.headerInner}>
          <div className={`${styles.navBar}`}>
            <div className={`${styles.navBarInner}`}>
              <button className={`${styles.btnGlobalNetwork}`} onClick={() => handleOpenModal()}>
                <div className={`${styles.btnIcon}`}>
                  <SvgIcon name='global' />
                </div>
                <div className={`${styles.btnLabel}`}>{dictionary?.globalNetwork}</div>
              </button>
              {/* <LocaleSwitcher /> */}
            </div>
          </div>
          <div className={`${styles.navContent}`}>
            <div className={`${styles.navContentInner}`}>
              <Link
                className={styles.logo}
                href={`/${lang}`}
                title={dictionary?.siteTitle}
                aria-label={dictionary?.siteTitle}
              >
                <AnimatePresence>
                  {isNavOverlay && !isMobNavShow && (
                    <motion.div
                      exit={{ opacity: 0 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Image
                        className={`${styles.logoImgOverlay}`}
                        src={logo.src.overlay}
                        width={200}
                        height={51}
                        alt={`${dictionary?.siteTitle} Logo White Color`}
                        priority
                        draggable={false}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <Image
                  className={`${styles.logoImgNormal}`}
                  src={logo.src.default}
                  width={200}
                  height={51}
                  alt={`${dictionary?.siteTitle} Logo Black Color`}
                  priority
                  draggable={false}
                />
                <h1>{dictionary?.siteTitle}</h1>
              </Link>
              <div className={`${styles.navWrap}`}>
                <Navigation content={header} isTop={isTop} />
              </div>
              <div className={`${styles.navUtil}`}>
                <div className={`${styles.mobNavWrap}`}>
                  <button
                    className={`${styles.mobNavBtn} ${isMobNavShow ? styles.mobNavOpen : ''}`}
                    onClick={() => {
                      if (isMobNavShow) {
                        closeMobNav();
                      } else {
                        openMobNav();
                      }
                    }}
                    aria-label='Toggle Mobile Navigation'
                  >
                    <div className={`${styles.mobNavBtnIcon}`}>
                      <div className={`${styles.btnIcon}`}>
                        <SvgIcon name='mobNav' />
                      </div>
                      <div className={`${styles.btnActiveIcon}`}>
                        <div className={`${styles.activeIconInner}`}>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                      <div className={`${styles.btnLabel}`}>Menu</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`${styles.mobNav} ${isMobNavShow ? styles.show : ''} ${isTop ? styles.expand : styles.collapse}`}>
        <div className={`${styles.mobNavInner}`}>
          <div className={`${styles.mobNavContent}`}>
            <div className={`${styles.mobNavContentInner}`}>
              {header?.length > 0 &&
                header.map((data: Record<string, any>, index: number) => {
                  if (data.sub && Object.keys(data.sub).length > 0) {
                    return (
                      <div key={`nav${index}`} className={`${styles.mobNavItem}`}>
                        <div className={`${styles.subWrap}`}>
                          <div className={`${styles.subWrapInner}`}>
                            <Accordion>
                              <AccordionItem
                                key={index}
                                aria-label={data.title}
                                title={<div className={`${styles.mobNavItemBtn}`}>{data.title}</div>}
                                HeadingComponent={'div'}
                                classNames={{
                                  trigger: styles.mobNavMenuTrigger,
                                  content: styles.mobNavMenuContent,
                                  title: styles.mobNavMenuTitle,
                                }}
                              >
                                {data.sub?.map((item: any, sIndex: number) => {
                                  return (
                                    <div key={sIndex} className={`${styles.mobSubGroup}`}>
                                      {data.sub.length > 1 && (
                                        <div className={`${styles.mobSubGroupTitle}`}>{item.title}</div>
                                      )}
                                      {item.length}
                                      <div className={`${styles.mobSubGroupList}`}>
                                        {item.items?.map((subMenu: any, tIndex: number) => {
                                          return (
                                            <div key={subMenu.label + tIndex} className={styles.mobListItem}>
                                              {
                                                subMenu.image &&
                                                <Image src={subMenu.image} alt={subMenu.label} height={25} width={25} />
                                              }
                                              <Button
                                                key={tIndex}
                                                content={{ ...subMenu, variant: ButtonVariation.default }}
                                                className={`${styles.subNavItem}`}
                                              />
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  );
                                })}
                              </AccordionItem>
                            </Accordion>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    const btnData: ButtonElement<any> = {
                      label: data.title,
                      variant: ButtonVariation.default,
                      color: ButtonColor.primary,
                      link: {
                        type: data.link.type,
                        href: data.link.href,
                      },
                    };

                    return (
                      <div key={`nav${index}`} className={`${styles.mobNavItem}`}>
                        <Button content={btnData} className={`${styles.mobNavItemBtn}`} />
                      </div>
                    );
                  }
                })}
              <div className={`${styles.mobNavItem}`}>
                <div className={`${styles.searchContainer}`}>
                  {/* <span className={styles.searchText}>PRODUCT SEARCH</span> */}
                  <div className={`${styles.searchWrap}`}>
                    <div className={`${styles.search}`}>
                      <input
                        type="text"
                        name="searchKey"
                        placeholder="SEARCH"
                        ref={searchField}
                        onKeyDown={keyDownHandler}
                      />
                      <button className={`${styles.searchButton}`} onClick={redirectToProductPage}>
                        <div className={`${styles.searchIcon}`}>
                          <SvgIcon name="search" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.mobOtherMenu}`}>
                <div className={`${styles.otherMenuInner}`}>
                  <SnsList />
                  <div className={`${styles.mobNavCopyright}`}>{dictionary?.copyright}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

      <CustomModal isModalShow={isModalShow} onUpdate={(e) => onModalStatusHandler(e)}>
        <GlobalNetworkModal />
      </CustomModal>
    </>
  );
};

export default Header;
