'use client';
import dynamic from 'next/dynamic';
import { ModuleData, SectionTitle, MediaElement, ButtonElementDefault } from '@/types';
import Link from 'next/link';
import ContactUsForm from '@@/form/ContactUs';
import styles from './ContactUsBanner.module.scss';

const Media = dynamic(() => import('@@/Media'));

interface ContactUsBannerProps extends SectionTitle {
  media: MediaElement;
  items: ButtonElementDefault[];
}

const ContactUsBanner = ({ order, data }: ModuleData<ContactUsBannerProps, null>) => {
  const {
    id,
    content: { title, description, media, items },
  } = data;

  return (
    <section id={id ? id : `section${order}`} className={`${styles.contactUsBanner}`}>
      <div className={`${styles.inner}`}>
        <div className={`${styles.visual}`}>
          <Media content={media} />
        </div>
        <div className={`${styles.content}`}>
          <div className={`${styles.contentInner}`}>
            <hgroup className={`${styles.head}`}>
              <h3 className={`${styles.title}`}>{title}</h3>
              <div className={`${styles.description}`}>{description}</div>
            </hgroup>
            <div className={`${styles.suggestFilter}`}>
              {items.map((item, index) => {
                return (
                  <Link href={item.link.href || ''} key={index} className={`${styles.filterItem}`}>
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className={`${styles.contactUs}`}>
              <div className={`${styles.formTitle}`}>Contact US</div>
              <ContactUsForm placement='home' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsBanner;
