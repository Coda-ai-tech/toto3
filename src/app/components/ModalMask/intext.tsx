'use client';
import { useContext } from 'react';
import { ConfigContext } from '@/context/config.context';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ModalMask.module.scss';

const ModalMask = () => {
  const { isNavShow, setNavShow } = useContext(ConfigContext);

  const onClickHandler = () => {
    setNavShow(false);
  };

  return (
    <>
      <AnimatePresence>
        {isNavShow && (
          <motion.div
            key={'fadeInOut'}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className={styles.modalMask}
            onClick={() => onClickHandler()}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalMask;
