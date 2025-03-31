'use client';
import dynamic from 'next/dynamic';
import { useContext } from 'react';
import { ConfigContext } from '@/context/config.context';
import { memo } from 'react';
import { ButtonElementDefault, ButtonVariation, ButtonColor } from '@/types';
import { GlobalDataProps } from '@@/GlobalConfig';
import LocaleSwitcher from '@@/LocaleSwitcher';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';
import Button from '@@/Button';

// Set Necessary Components
const SnsList = dynamic(() => import('@@/Footer/SnsList'), { ssr: false });

const Footer = ({ data }: { data: GlobalDataProps }) => {
  const {
    logo,
    navigation: { footer, footerStaticMenu, globalNetwork },
    dictionary,
  } = data;

  const { isFooterShow } = useContext(ConfigContext);

  return (
    <footer className={`${styles.footer} ${isFooterShow ? '' : 'hidden'}`}>
      <div className={styles.inner}>
        <div className={`${styles.feature}`}>
          <div className={`${styles.featureInner}`}>
            <div className={`${styles.left}`}>
              <div className={`${styles.commonInfo}`}>
                <div className={styles.logoWrap}>
                  {logo && (
                    <Link
                      className={styles.logo}
                      href={`/`}
                      title={dictionary?.siteTitle}
                      aria-label={dictionary?.siteTitle}
                    >
                      <Image
                        src={logo.src.footer}
                        width={200}
                        height={51}
                        alt={dictionary?.siteTitle ? dictionary?.siteTitle : ''}
                        priority
                        draggable={false}
                      />
                    </Link>
                  )}
                </div>
                <div className={`${styles.snsWrap}`}>
                  <SnsList />
                </div>
              </div>
            </div>
            <div className={`${styles.right}`}>
              <div className={`${styles.footerNav}`}>
                {footer?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`${styles.footerNavColum} ${item.items.length > 6 ? styles.columnLarge : ''}`}
                    >
                      <div className={`${styles.navGroup}`}>
                        <div className={`${styles.columnTitle}`}>{item.title}</div>
                        <ul>
                          {item?.items?.map((item, index) => {
                            return (
                              <li key={index}>
                                <Button
                                  content={{ ...item, variant: ButtonVariation.default }}
                                  className={styles.footerNavItem}
                                />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={`${styles.footerGlobalNetwork}`}>
                <div className={`${styles.globalNetworkTitle}`}>{dictionary?.globalNetwork}</div>
                <div className={`${styles.globalNetworkWrap}`}>
                  {globalNetwork?.map((item, index) => {
                    return (
                      <div key={index} className={`${styles.networkColum}`}>
                        <div className={`${styles.navGroup}`}>
                          <div className={`${styles.columnTitle}`}>{item.title}</div>
                          <ul>
                            {item?.items?.map((item, index) => {
                              return (
                                <li key={index}>
                                  <Button
                                    content={{ ...item, variant: ButtonVariation.default }}
                                    className={styles.footerGlobalNetworkItem}
                                  />
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerOtherContent}>
          <div className={`${styles.footerOtherContentInner}`}>
            <div className={`${styles.footerMobLogo}`}>
              <div className={styles.mobLogoWrap}>
                {logo && (
                  <Link
                    className={styles.mobLogo}
                    href={`/`}
                    title={dictionary?.siteTitle}
                    aria-label={dictionary?.siteTitle}
                  >
                    <Image
                      src={logo.src.footer}
                      width={200}
                      height={51}
                      alt={dictionary?.siteTitle ? dictionary?.siteTitle : ''}
                      priority
                      draggable={false}
                    />
                  </Link>
                )}
              </div>
              <div className={`${styles.mobSnsWrap}`}>
                <SnsList />
              </div>
            </div>
            <div className={styles.footerStaticMenu}>
              {/* <LocaleSwitcher /> */}
              {footerStaticMenu && (
                <nav className={styles.staticMenuList}>
                  <ul>
                    {footerStaticMenu.map((item: ButtonElementDefault, index: number) => {
                      return (
                        <li key={index}>
                          <Button
                            content={{ ...item, variant: ButtonVariation.default, color: ButtonColor.overlay }}
                            className={styles.footerStaticMenuItem}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              )}
            </div>
            <div className={styles.copyright} dangerouslySetInnerHTML={{ __html: dictionary?.copyright }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
