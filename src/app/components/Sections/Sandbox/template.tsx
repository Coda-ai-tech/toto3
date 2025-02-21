import { ModuleData, SectionTitle, MediaElement, ButtonElement } from '@/types';
import { IconList } from '@/types/icons';
import styles from './BulkChange.module.scss';

interface BulkChangeItem extends SectionTitle {
  cta: ButtonElement<IconList>[];
  media: MediaElement;
}

interface BulkChangeProps {
  items: BulkChangeItem[];
}

const BulkChange = ({ order, data }: ModuleData<BulkChangeProps, null>) => {
  const {
    id,
    content: { items },
  } = data;

  return (
    <section id={id ? id : `section${order}`} className={`${styles.bulkChange}`}>
      {JSON.stringify(items)}
    </section>
  );
};

export default BulkChange;
