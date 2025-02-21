'use client';
import dynamic from 'next/dynamic';
import { useContext, useEffect } from 'react';
import { ConfigContext } from '@/context/config.context';
import { ModuleData, SectionTitle, MediaElement } from '@/types';
import ContactUsForm from '@@/form/ContactUs';
import styles from './ContactUs.module.scss';

const Media = dynamic(() => import('@@/Media'));

interface ContactUsProps extends SectionTitle {
  media: MediaElement;
}

const ContactUs = ({ order, data }: ModuleData<ContactUsProps, null>) => {
  const {
    id,
    content: { title, subTitle, description, media },
  } = data;

  const { setBreadcrumbOverlay } = useContext(ConfigContext);

  useEffect(() => {
    setBreadcrumbOverlay(true);

    return () => {
      setBreadcrumbOverlay(false);
    };
  }, [setBreadcrumbOverlay]);

  return (
    <section id={id ? id : `section${order}`} className={`${styles.contactUs}`}>
      <div className={`${styles.inner}`}>
        <div className={`${styles.visual}`}>
          <Media content={media} />
        </div>
        <div className={`${styles.content}`}>
          <div className={`${styles.contentInner}`}>
            <hgroup className={`${styles.head}`}>
              <h3 className={`${styles.title}`}>{title}</h3>
              <p className={`${styles.subTitle}`}>{subTitle}</p>
              <div className={`${styles.description}`}>{description}</div>
            </hgroup>
            <div className={`${styles.contactUs}`}>
              <ContactUsForm placement='contactUs' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
