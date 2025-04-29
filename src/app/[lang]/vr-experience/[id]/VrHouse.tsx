'use client';

import SvgIcon from '@/app/components/SvgIcon';
import VrViewer from '@/app/components/VrViewer/VrViewer';
import { Locale } from '@/app/i18n.config';
import { HouseType } from '@/types';
import { useRouter } from 'next/navigation';
import styles from './VrHouse.module.scss';

interface VrHouseProps {
  houseType: HouseType;
  lang: Locale;
}

const VrHouse = ({ houseType, lang }: VrHouseProps) => {
  const router = useRouter();

  return (
    <div className={styles.vrHouseContainer}>
      <div className={styles.vrControls}>
        <button
          className={styles.closeButton}
          onClick={() => router.back()}
          title={lang === 'zh' ? '返回' : 'Back'}
          aria-label={lang === 'zh' ? '返回' : 'Close and go back'}>
          <SvgIcon name="close" />
        </button>
      </div>

      <div className={styles.vrViewerWrapper}>
        <VrViewer houseType={houseType} />
      </div>
    </div>
  );
};

export default VrHouse;
