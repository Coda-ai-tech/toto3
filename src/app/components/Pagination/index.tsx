'use client';
import dynamic from 'next/dynamic';
import { useState, useEffect, useCallback, useContext } from 'react';
import { ConfigContext } from '@/context/config.context';
import styles from './Pagination.module.scss';

const SvgIcon = dynamic(() => import('@@/SvgIcon'), { ssr: false });

export enum ColorVariant {
  blue = 'blue',
  lightBlue = 'lightBlue',
}

const Pagination = ({
  current,
  total,
  color,
  onUpdate,
}: {
  current: number;
  total: number;
  color?: ColorVariant;
  onUpdate: (data: any) => void;
}) => {
  const { dictionary } = useContext(ConfigContext);
  const [pageList, setPageList] = useState<number[]>([]);

  const generatePageList = useCallback(() => {
    const pages = [];
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
    setPageList(pages);
  }, [total, setPageList]);

  useEffect(() => {
    generatePageList();
  }, [total, generatePageList]);

  return (
    <div className={`${styles.pagination} ${color ? styles[color] : ''}`}>
      <div className={`${styles.inner}`}>
        {total > 1 && (
          <button
            className={`${styles.bullet} ${styles.btnPrev}`}
            onClick={() => onUpdate(current - 1)}
            disabled={current === 1}
          >
            <div className={`${styles.bulletInner}`}>
              <span className='hidden'> {dictionary?.button?.prev}</span>
              <div className={`${styles.icon}`}>
                <SvgIcon name='arrowDoublePrev' />
              </div>
            </div>
          </button>
        )}

        <div className={`${styles.pageNumbers}`}>
          {pageList?.map((page) => {
            return (
              <button
                key={page}
                className={`${styles.bullet} ${styles.btnPrev} ${current === page ? styles.current : ''}`}
                onClick={() => onUpdate(page)}
              >
                <div className={`${styles.bulletInner}`}>
                  <span>{page}</span>
                </div>
              </button>
            );
          })}
        </div>
        {total > 1 && (
          <button
            className={`${styles.bullet} ${styles.btnNext}`}
            onClick={() => onUpdate(current + 1)}
            disabled={current === total}
          >
            <div className={`${styles.bulletInner}`}>
              <span className='hidden'>{dictionary?.button?.next}</span>
              <div className={`${styles.icon}`}>
                <SvgIcon name='arrowDoubleNext' />
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
