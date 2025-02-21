'use client';
import dynamic from 'next/dynamic';
import type { ButtonElementDefault } from '@/types';
import styles from './SubNavGroup.module.scss';

// Set Necessary Components
const Button = dynamic(() => import('@@/Button'), { ssr: false });

const SubNavGroup = ({ content }: { content: ButtonElementDefault }) => {
  return (
    <div className={styles.subNavGroup}>
      <Button content={content} />
    </div>
  );
};

export default SubNavGroup;
