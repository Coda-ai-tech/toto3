'use client';

import { useRouter } from 'next/navigation';
import { Locale } from '@/app/i18n.config';
import VrViewer from '@/app/components/VrViewer/VrViewer';
import styles from './VrHouse.module.scss';
import SvgIcon from '@/app/components/SvgIcon';

interface VrHouseProps {
  houseType: 'p1' | 'p2' | 'p3' | 'p4';
  lang: Locale;
}

const houseTitles = {
  p1: { en: 'London Penthouse', zh: '倫敦頂層公寓' },
  p2: { en: 'Southern France Villa', zh: '南法別墅' },
  p3: { en: 'Munich Modern Home', zh: '慕尼黑現代住宅' },
  p4: { en: 'Zurich Apartment', zh: '蘇黎世公寓' },
};

const VrHouse = ({ houseType, lang }: VrHouseProps) => {
  const router = useRouter();
  const houseTitle = houseTitles[houseType][lang];

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
        <VrViewer houseType={houseType} title={houseTitle} />
      </div>
    </div>
  );
};

export default VrHouse;
