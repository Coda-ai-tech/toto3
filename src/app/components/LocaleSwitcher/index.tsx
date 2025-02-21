'use client';
import { useContext } from 'react';
import { ConfigContext } from '@/context/config.context';
import { usePathname, useParams, useSearchParams } from 'next/navigation';
import { GetLocaleFallback } from '@/hook/useLocaleFallback';
import { i18n } from '@/app/i18n.config';
import Link from 'next/link';
import styles from './LocaleSwitcher.module.scss';

const LocaleSwitcher = () => {
  const { lang = GetLocaleFallback() } = useParams();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { isNavOverlay } = useContext(ConfigContext);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const locales = {
    zh: {
      short: '中文',
      default: '香港/繁體中文',
    },
    en: {
      short: 'EN',
      default: 'Hong Kong/English(EN)',
    },
  };

  return (
    <div className={`${styles.localeSwitcher} ${isNavOverlay ? styles.overlay : ''}`}>
      <div className={styles.langTextContainer}>
        {i18n.locales &&
          i18n.locales.map((locale) => {
            if (lang !== locale) {
              return (
                <Link
                  key={locale}
                  className={styles.langTextBtn}
                  href={
                    searchParams
                      ? `${redirectedPathName(locale)}?${searchParams.toString()}`
                      : redirectedPathName(locale)
                  }
                  aria-label={`Page language change to ${locales[locale as keyof typeof locales].default}`}
                >
                  <div className={styles.btnInner}>
                    <div className={styles.langText}>{locales[locale as keyof typeof locales].default}</div>
                  </div>
                </Link>
              );
            }
          })}
      </div>
    </div>
  );
};

export default LocaleSwitcher;
