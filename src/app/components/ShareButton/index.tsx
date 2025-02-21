'use client';
import ShareCurrentPage, { ShareList } from '@/hook/useShare';
import SvgIcon from '@@/SvgIcon';
import styles from './ShareButton.module.scss';

enum ShareVariant {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

interface ShareButtonProps {
  targetSlug?: string;
  showLabel?: boolean;
  variant?: ShareVariant;
}

const ShareButton = ({ targetSlug, variant = ShareVariant.horizontal }: ShareButtonProps) => {
  const shareListData: any = [] as any;
  for (const key in ShareList) {
    if (ShareList.hasOwnProperty(key)) {
      shareListData.push(key);
    }
  }

  const shareClickHandler = (target: ShareList) => {
    ShareCurrentPage(target, targetSlug);
  };

  return (
    <div className={`${styles.shareButton} ${styles[variant]}`}>
      {shareListData && (
        <div className={styles.links}>
          {shareListData.map((item: ShareList, index: number) => {
            return (
              <button
                key={index}
                className={`${styles.shareItem}`}
                onClick={() => shareClickHandler(item)}
                aria-label={`Share to ${item}`}
              >
                <div className={`${styles.iconWrap}`}>
                  <div className={`${styles.icon}`}>
                    <SvgIcon
                      name={`${
                        item === ShareList.linkedin
                          ? 'linkedin'
                          : item === ShareList.facebook
                          ? 'facebook'
                          : item === ShareList.twitter
                          ? 'twitter'
                          : 'copy'
                      }`}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ShareButton;
