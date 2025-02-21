'use client';

import { ReactNode, useEffect } from 'react';
import { Modal, ModalContent, ModalBody, useDisclosure } from '@heroui/react';
import { MatchMedia, BreakPoint, MatchMediaType } from '@/hook/useBreakPoint';
import SvgIcon from '@@/SvgIcon';
import styles from './Modal.module.scss';

const CustomModal = ({
  isModalShow,
  onUpdate,
  children,
}: {
  isModalShow?: boolean;
  onUpdate: (e: boolean) => void;
  children?: ReactNode;
}) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (isModalShow) {
      onOpen();
    } else {
      onClose();
    }
  }, [isModalShow, onOpen, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      placement={MatchMedia(BreakPoint.md, MatchMediaType.minWidth) ? 'center' : 'bottom'}
      onOpenChange={onOpenChange}
      classNames={{
        body: styles.body,
        base: styles.base,
        wrapper: styles.wrapper,
        backdrop: styles.backdrop,
        closeButton: styles.closeButton,
      }}
      closeButton={
        <button className={styles.modalClose}>
          <SvgIcon name='close' />
        </button>
      }
      scrollBehavior={'inside'}
      onClose={() => onUpdate(false)}
      role='dialog'
      aria-modal='true'
    >
      <ModalContent>{() => <ModalBody>{children}</ModalBody>}</ModalContent>
    </Modal>
  );
};
export default CustomModal;
