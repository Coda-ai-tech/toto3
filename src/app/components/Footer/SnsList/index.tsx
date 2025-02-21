'use client';
import { useContext } from 'react';
import { ConfigContext } from '@/context/config.context';
import Link from 'next/link';
import Image from 'next/image';
import styles from './SnsList.module.scss';

interface SnsItemProps {
  label: string;
  link: string;
  icon: string;
}

const SnsList = () => {
  const { globalData } = useContext(ConfigContext);
  const { sns } = globalData || {};

  return (
    <div className={`${styles.snsList}`}>
      <div className={`${styles.inner}`}>
        {sns?.map((item: SnsItemProps, index: number) => {
          return (
            <Link key={index} href={item.link} target='_blank' className={`${styles.snsItem}`}>
              <div className={`${styles.icon}`}>
                <Image src={item.icon} alt={item.label} width={24} height={24} draggable={false} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SnsList;
