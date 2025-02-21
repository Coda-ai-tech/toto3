'use client';
import { useContext } from 'react';
import { ConfigContext } from '@/context/config.context';
import { ScrollToMainContent } from '@/hook/useScrollDirection';
import SvgIcon from '@@/SvgIcon';
import styles from './BackToTop.module.scss';

const BackToTop = ({ label }: { label?: string }) => {
  const { dictionary } = useContext(ConfigContext);
  return (
    <button onClick={() => ScrollToMainContent()} className={`${styles.backToTop}`}>
      <div className={`${styles.icon}`}>
        <SvgIcon name='arrowDownChevron' />
      </div>
      <div className={`${styles.label}`}>{label || dictionary?.backToTop}</div>
    </button>
  );
};

export default BackToTop;
