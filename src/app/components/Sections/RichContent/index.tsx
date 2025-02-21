import { ModuleData, SectionTitle } from '@/types';
import styles from './RichContent.module.scss';

interface RichContentProps extends SectionTitle {
  content: string;
}

const RichContent = ({ order, data }: ModuleData<RichContentProps, null>) => {
  const {
    id,
    content: { title, content },
  } = data;

  return (
    <section id={id ? id : `section${order}`} className={`${styles.richContent}`}>
      <div className={`${styles.inner}`}>
        <h1 className={`${styles.pageTitle}`}>{title}</h1>
        <div className={`${styles.content}`} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  );
};

export default RichContent;
