'use client';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import {
  ModuleData,
  SectionTitle,
  ButtonLinkElement,
  ButtonVariation,
  ButtonColor,
  ButtonAction,
  ButtonIconPosition,
  ButtonShape,
  ButtonElement,
} from '@/types';
import { IconList } from '@/types/icons';
import Image from 'next/image';
import styles from './RelatedProduct.module.scss';

const Button = dynamic(() => import('@@/Button'), { ssr: false });

interface RelatedProductItem extends SectionTitle {
  thumb: string;
  link: ButtonLinkElement;
}

interface RelatedProductProps extends SectionTitle {
  items: RelatedProductItem[];
}

const ProductEntryCard = ({ data }: { data: RelatedProductItem }) => {
  const { title, description, thumb, link } = data;

  const learnMoreCta: ButtonElement<IconList> = {
    label: 'Learn More',
    variant: ButtonVariation.contain,
    color: ButtonColor.primary,
    shape: ButtonShape.square,
    icon: {
      name: 'learnMore',
      position: ButtonIconPosition.left, // ! nullable
    },
    link,
  };

  return (
    <div className={`${styles.productEntryCard}`}>
      <div className={`${styles.cardInner}`}>
        <div className={`${styles.thumb}`}>
          <Image src={thumb} width={100} height={100} alt={`${title}`} draggable={false} />
        </div>
        <div className={`${styles.content}`}>
          <h4 className={`${styles.productTitle}`}>{title}</h4>
          <div className={`${styles.description}`}>{description}</div>
        </div>
        <div className={`${styles.action}`}>
          <Button content={learnMoreCta} />
        </div>
      </div>
    </div>
  );
};

const RelatedProduct = ({ order, data }: ModuleData<RelatedProductProps, null>) => {
  const {
    id,
    content: { title, items },
  } = data;

  const { lang } = useParams();

  const seeAllProductCta = {
    label: 'See all product',
    variant: ButtonVariation.default,
    color: ButtonColor.primary,
    shape: ButtonShape.horizontal,
    icon: null,
    link: {
      type: ButtonAction.routeLink,
      href: `/${lang}/product`,
    },
  };

  return (
    <section id={id ? id : `section${order}`} className={`${styles.relatedProduct}`}>
      <div className={`${styles.inner}`}>
        <div className={`${styles.head}`}>
          <h3>{title}</h3>
          <Button className={`${styles.moreCta}`} content={seeAllProductCta} />
        </div>
        <div className={`${styles.body}`}>
          {items.map((item: RelatedProductItem, index: number) => (
            <ProductEntryCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProduct;
