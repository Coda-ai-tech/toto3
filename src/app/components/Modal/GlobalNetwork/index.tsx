'use client';
import { useContext } from 'react';
import { ConfigContext } from '@/context/config.context';
import { ButtonVariation } from '@/types';
import { ScrollShadow } from '@heroui/react';
import { MatchMedia, BreakPoint } from '@/hook/useBreakPoint';
import Button from '@@/Button';
import Image from 'next/image';
import styles from './GlobalNetwork.module.scss';

const GlobalNetworkModal = () => {
  const { globalData, dictionary } = useContext(ConfigContext);

  const {
    navigation: { globalNetwork },
  } = globalData;

  return (
    <ScrollShadow className={`${styles.globalNetworkModal}`} size={MatchMedia(BreakPoint.md) ? 60 : 0}>
      <div className={`${styles.inner}`}>
        <div className={`${styles.left}`}>
          <Image
            src={'/assets/img/content/modal-global-network/01.webp'}
            width={100}
            height={100}
            alt=''
            draggable={false}
          />
        </div>
        <div className={`${styles.right}`}>
          <div className={`${styles.content}`}>
            <div className={`${styles.title}`}>TOTO {dictionary?.globalNetwork}</div>
            <div className={`${styles.network}`}>
              {globalNetwork?.map((item: any, index: number) => {
                return (
                  <div key={index} className={`${styles.region}`}>
                    <div className={`${styles.regionInner}`}>
                      <div className={`${styles.regionTitle}`}>{item.title}</div>
                      <ul>
                        {item?.items?.map((sItem: any, sIndex: number) => {
                          return (
                            <li key={sIndex}>
                              <Button content={{ ...sItem, variant: ButtonVariation.default }} />
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
    </ScrollShadow>
  );
};

export default GlobalNetworkModal;
