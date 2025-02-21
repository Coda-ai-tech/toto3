'use client';
import { useContext } from 'react';
import { ConfigContext } from '@/context/config.context';
import { ButtonElementDefault } from '@/types';
import Link from 'next/link';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = ({
  data,
  theme = 'default',
  position = 'top',
}: {
  data: any;
  theme?: 'overlay' | 'default';
  position?: 'top' | 'bottom';
}) => {
  const { isBreadcrumbOverlay } = useContext(ConfigContext);

  return (
    <nav
      className={`${styles.breadcrumbs} ${styles[theme]} ${
        isBreadcrumbOverlay && position === 'top' ? styles.overlay : ''
      }`}
    >
      {data?.map((item: ButtonElementDefault, index: number) => {
        return (
          <div key={index}>
            <Link href={item.link?.href ? item.link?.href : ''} tabIndex={index === data.length - 1 ? -1 : 0}>
              {item.label}
            </Link>
            {index !== data.length - 1 && <span className={styles.separator}>&gt;</span>}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
