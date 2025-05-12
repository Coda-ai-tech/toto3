'use client';
import dynamic from 'next/dynamic';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useCallback, useRef } from 'react';
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
  const relatedProductPerPage = useRef(12);
  const [products, setProducts] = useState<RelatedProductItem[]>();
  const [relatedProductPage, setRelatedProductPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [displayItems, setDisplayItems] = useState<RelatedProductItem[]>();
  const [initialized, setInitialized] = useState(false);
  const {
    id,
    content: { title, items },
  } = data;

  const { lang } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (products) return;
    setProducts(items);
  }, [products]);

  const splitPages = (array: RelatedProductItem[], itemsPerPage: number, currentPage: number) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return array.slice(startIndex, endIndex);
  };

  const prevPage = () => {
    if (relatedProductPage > 1) {
      const prev = relatedProductPage - 1;
      setRelatedProductPage(prev);
    }
  }

  const nextPage = () => {
    if (relatedProductPage < totalPage) {
      const next = relatedProductPage + 1;
      setRelatedProductPage(next);
    }
  };

  const setPageFunction = (selectedPage: number) => {
    setRelatedProductPage(selectedPage);
  };

  const getDisplayData = useCallback(() => {
    if (!products) return;
    setDisplayItems([]);

    setTimeout(() => {
      const res = splitPages(products, relatedProductPerPage.current, relatedProductPage);
      const getTotalPage = Math.ceil(products.length / relatedProductPerPage.current);

      setTotalPage(getTotalPage);
      setDisplayItems(res);
    }, 500);
  }, [
    relatedProductPage,
    setRelatedProductPage,
    setTotalPage,
    relatedProductPerPage,
    setDisplayItems,
    products
  ]);

  useEffect(() => {
    if (!products) return;
    getDisplayData();
  }, [products, getDisplayData]);

  useEffect(() => {
    if (products) {
      const relatedProductsDiv = document.getElementById("relatedProducts");
      const newItems = splitPages(products, relatedProductPerPage.current, relatedProductPage);
      setDisplayItems(newItems);
      if (relatedProductsDiv) {
        setTimeout(() => {
          relatedProductsDiv.scrollIntoView({ behavior: "smooth" });
        }, 0)
      }
    }
  }, [relatedProductPage]);

  useEffect(() => {
    if (!initialized) return;
    const currentParam = new URLSearchParams(window.location.search);

    const queryParam = new URLSearchParams();
    queryParam.set('relatedProductPage', relatedProductPage.toString());

    const newUrl = `?${queryParam.toString()}`;
    const currentUrl = `?${currentParam.toString()}`

    if (newUrl !== currentUrl) {
      router.push(newUrl);
    }
  }, [relatedProductPage])

  useEffect(() => {
    const currentParam = new URLSearchParams(window.location.search);

    const paramPage = parseInt(currentParam.get('relatedProductPage') || '1');
    setRelatedProductPage(paramPage);
    setInitialized(true);
  })

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
          <h3 id="relatedProducts">{title}</h3>
          <Button className={`${styles.moreCta}`} content={seeAllProductCta} />
        </div>
        <div className={`${styles.body}`}>
          {displayItems && displayItems?.length > 0 && (
            <>
              {displayItems?.map((item, index) => {
                return (
                  <ProductEntryCard key={index} data={item} />
                );
              })}
            </>
          )}
        </div>
      </div>
      {!(displayItems && displayItems?.length < 1) && (
        <div className={`${styles.resultPagination}`}>
          <button
            onClick={prevPage}
            className={styles.paginationButton}
          > &lt;&lt; </button>
          {Array.from({ length: totalPage }).map((_, index) => {
            if (index > relatedProductPage && index > relatedProductPage + 1) {
              return null;
            } else if (index < relatedProductPage && index < relatedProductPage - 3) {
              return null;
            }
            if (index + 1 === relatedProductPage) {
              return (
                <div key={index} className={styles.currentPage}>{relatedProductPage}</div>
              )
            }
            return (
              <button onClick={() => setPageFunction(index + 1)} key={index} className={styles.pageButton}>{index + 1}</button>
            )
          }
          )}
          <button
            onClick={nextPage}
            className={styles.paginationButton}
          > &gt;&gt; </button>
        </div>
      )}
    </section>
  );
};

export default RelatedProduct;
