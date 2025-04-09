'use client';
import { useEffect, useState, useCallback, useRef } from 'react';
import { useParams } from 'next/navigation';
import { Skeleton } from '@heroui/react';
import { AnimatePresence, motion } from 'framer-motion';
import SvgIcon from '@@/SvgIcon';
import styles from './ProductList.module.scss';
import { IconList } from '@/types/icons';
import Image from 'next/image';
import dynamic from 'next/dynamic';
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

import productData from '../../../../../public/api/en/product-data.json';
import ProductEntryCard from '../RelatedProduct';

const Button = dynamic(() => import('@@/Button'), { ssr: false });

interface ProductItem {
  id: string;
  isNew: boolean;
  category: string[];
  subCategory: string[] | null;
  title: string;
  description: string;
  thumb: string;
  link: ButtonLinkElement;
}

interface CategoryBase {
  id: string;
  label: {
    en: string;
    zh: string;
  };
}

interface CategoryItem extends CategoryBase {
  id: string;
  label: {
    en: string;
    zh: string;
  };
  sub?: CategoryBase[] | null;
}

const categoryList: CategoryItem[] = [
  {
    id: 'neorest',
    label: {
      en: 'NEOREST',
      zh: 'NEOREST',
    },
    sub: null,
  },
  {
    id: 'washlet-plus',
    label: {
      en: 'WASHLET® +',
      zh: 'WASHLET® +',
    },
    sub: null,
  },
  {
    id: 'washlet',
    label: {
      en: 'WASHLET®',
      zh: 'WASHLET®',
    },
    sub: null,
  },
  {
    id: 'toilet',
    label: {
      en: 'TOILET',
      zh: 'TOILET',
    },
    sub: [
      {
        id: 'one-piece-toilet',
        label: {
          en: 'ONE-PIECE TOILET',
          zh: 'ONE-PIECE TOILET',
        },
      },
      {
        id: 'close-coupled-toilet',
        label: {
          en: 'CLOSE-COUPLED TOILET',
          zh: 'CLOSE-COUPLED TOILET',
        },
      },
      {
        id: 'wall-hung-toilet',
        label: {
          en: 'WALL-HUNG TOILET',
          zh: 'WALL-HUNG TOILET',
        },
      },
      {
        id: 'wall-faced-toilet',
        label: {
          en: 'WALL-FACED TOILET',
          zh: 'WALL-FACED TOILET',
        },
      },
      {
        id: 'concealed-cistern',
        label: {
          en: 'CONCEALED CISTERN',
          zh: 'CONCEALED CISTERN',
        },
      },
    ],
  },
  {
    id: 'lavatory',
    label: {
      en: 'LAVATORY',
      zh: 'LAVATORY',
    },
    sub: [
      {
        id: 'console-lavatory',
        label: {
          en: 'CONSOLE LAVATORY',
          zh: 'CONSOLE LAVATORY',
        },
      },
      {
        id: 'counter-top-lavatory',
        label: {
          en: 'COUNTER TOP LAVATORY',
          zh: 'COUNTER TOP LAVATORY',
        },
      },
      {
        id: 'under-counter-lavatory',
        label: {
          en: 'UNDER COUNTER LAVATORY',
          zh: 'UNDER COUNTER LAVATORY',
        },
      },
      {
        id: 'semi-recessed-lavatory',
        label: {
          en: 'SEMI RECESSED LAVATORY',
          zh: 'SEMI RECESSED LAVATORY',
        },
      },
      {
        id: 'wall-hung-lavatory',
        label: {
          en: 'WALL HUNG LAVATORY',
          zh: 'WALL HUNG LAVATORY',
        },
      },
      {
        id: 'pedestal-lavatory',
        label: {
          en: 'PEDESTAL LAVATORY',
          zh: 'PEDESTAL LAVATORY',
        },
      },
      {
        id: 'galaline-lavatory',
        label: {
          en: 'GALALINE LAVATORY',
          zh: 'GALALINE LAVATORY',
        },
      },
      {
        id: 'floor-standing-lavatory',
        label: {
          en: 'FLOOR STANDING LAVATORY',
          zh: 'FLOOR STANDING LAVATORY',
        },
      },
    ],
  },
  {
    id: 'bathtub',
    label: {
      en: 'BATHTUB',
      zh: 'BATHTUB',
    },
    sub: [
      {
        id: 'free-standing-bathtub',
        label: {
          en: 'FREE-STANDING BATHTUB',
          zh: 'FREE-STANDING BATHTUB',
        },
      },
      {
        id: 'non-apron-bathtub',
        label: {
          en: 'NON-APRON BATHTUB',
          zh: 'NON-APRON BATHTUB',
        },
      },
      {
        id: 'apron-bathtub',
        label: {
          en: 'APRON BATHTUB',
          zh: 'APRON BATHTUB',
        },
      },
    ],
  },
  {
    id: 'faucet',
    label: {
      en: 'FAUCET',
      zh: 'FAUCET',
    },
    sub: [
      {
        id: 'lavatory-faucet',
        label: {
          en: 'LAVATORY FAUCET',
          zh: 'LAVATORY FAUCET',
        },
      },
      {
        id: '8-inch-lavatory-faucet',
        label: {
          en: '8" LAVATORY FAUCET',
          zh: '8" LAVATORY FAUCET',
        },
      },
      {
        id: 'wall-mounted-lavatory-faucet',
        label: {
          en: 'WALL MOUNTED LAVATORY FAUCET',
          zh: 'WALL MOUNTED LAVATORY FAUCET',
        },
      },
      {
        id: 'kitchen-faucet',
        label: {
          en: 'KITCHEN FAUCET',
          zh: 'KITCHEN FAUCET',
        },
      },
    ],
  },
  {
    id: 'shower',
    label: {
      en: 'SHOWER',
      zh: 'SHOWER',
    },
    sub: [
      {
        id: 'shower-mixer',
        label: {
          en: 'SHOWER MIXER',
          zh: 'SHOWER MIXER',
        },
      },
      {
        id: 'bath-and-shower-mixer',
        label: {
          en: 'BATH & SHOWER MIXER',
          zh: 'BATH & SHOWER MIXER',
        },
      },
      {
        id: 'thermostatic-mixer',
        label: {
          en: 'THERMOSTATIC MIXER',
          zh: 'THERMOSTATIC MIXER',
        },
      },
      {
        id: 'concealed-bath-and-shower-mixer',
        label: {
          en: 'CONCEALED BATH & SHOWER MIXER',
          zh: 'CONCEALED BATH & SHOWER MIXER',
        },
      },
      {
        id: 'concealed-thermostat',
        label: {
          en: 'CONCEALED THERMOSTAT',
          zh: 'CONCEALED THERMOSTAT',
        },
      },
      {
        id: 'concealed-valve',
        label: {
          en: 'CONCEALED VALVE',
          zh: 'CONCEALED VALVE',
        },
      },
      {
        id: 'bathtub-mixer',
        label: {
          en: 'BATHTUB MIXER',
          zh: 'BATHTUB MIXER',
        },
      },
      {
        id: 'hand-shower',
        label: {
          en: 'HAND SHOWER',
          zh: 'HAND SHOWER',
        },
      },
      {
        id: 'sliding-rail',
        label: {
          en: 'SLIDING RAIL',
          zh: 'SLIDING RAIL',
        },
      },
      {
        id: 'shower-column',
        label: {
          en: 'SHOWER COLUMN',
          zh: 'SHOWER COLUMN',
        },
      },
      {
        id: 'fixed-shower-head',
        label: {
          en: 'FIXED SHOWER HEAD',
          zh: 'FIXED SHOWER HEAD',
        },
      },
      {
        id: 'bath-spout',
        label: {
          en: 'BATH SPOUT',
          zh: 'BATH SPOUT',
        },
      },
      {
        id: 'wall-outlet',
        label: {
          en: 'WALL OUTLET',
          zh: 'WALL OUTLET',
        },
      },
      {
        id: 'others',
        label: {
          en: 'OTHERS',
          zh: 'OTHERS',
        },
      },
    ],
  },
  {
    id: 'accessories',
    label: {
      en: 'ACCESSORIES',
      zh: 'ACCESSORIES',
    },
    sub: [
      {
        id: 'paper-holder',
        label: {
          en: 'PAPER HOLDER',
          zh: 'PAPER HOLDER',
        },
      },
      {
        id: 'towel-ring',
        label: {
          en: 'TOWEL RING',
          zh: 'TOWEL RING',
        },
      },
      {
        id: 'towel-bar',
        label: {
          en: 'TOWEL BAR',
          zh: 'TOWEL BAR',
        },
      },
      {
        id: 'towel-shelf',
        label: {
          en: 'TOWEL SHELF',
          zh: 'TOWEL SHELF',
        },
      },
      {
        id: 'robe-hook',
        label: {
          en: 'ROBE HOOK',
          zh: 'ROBE HOOK',
        },
      },
      {
        id: 'others',
        label: {
          en: 'OTHERS',
          zh: 'OTHERS',
        },
      },
    ],
  },
  {
    id: 'commercial',
    label: {
      en: 'COMMERCIAL',
      zh: 'COMMERCIAL',
    },
    sub: [
      {
        id: 'toilet-sensor-flush-valve',
        label: {
          en: 'TOILET SENSOR FLUSH VALVE',
          zh: 'TOILET SENSOR FLUSH VALVE',
        },
      },
      {
        id: 'toilet',
        label: {
          en: 'TOILET',
          zh: 'TOILET',
        },
      },
      {
        id: 'urinal-sensor-flush-valve',
        label: {
          en: 'URINAL SENSOR FLUSH VALVE',
          zh: 'URINAL SENSOR FLUSH VALVE',
        },
      },
      {
        id: 'urinal',
        label: {
          en: 'URINAL',
          zh: 'URINAL',
        },
      },
      {
        id: 'sensor-faucet',
        label: {
          en: 'SENSOR FAUCET',
          zh: 'SENSOR FAUCET',
        },
      },
      {
        id: 'sensor-soap-dispenser',
        label: {
          en: 'SENSOR SOAP DISPENSER',
          zh: 'SENSOR SOAP DISPENSER',
        },
      },
      {
        id: 'tap',
        label: {
          en: 'TAP',
          zh: 'TAP',
        },
      },
      {
        id: 'soap-dispenser',
        label: {
          en: 'SOAP DISPENSER',
          zh: 'SOAP DISPENSER',
        },
      },
      {
        id: 'lavatory',
        label: {
          en: 'LAVATORY',
          zh: 'LAVATORY',
        },
      },
      {
        id: 'hand-dryer',
        label: {
          en: 'HAND DRYER',
          zh: 'HAND DRYER',
        },
      },
      {
        id: 'grab-bar',
        label: {
          en: 'GRAB BAR',
          zh: 'GRAB BAR',
        },
      },
      {
        id: 'kids-toilet',
        label: {
          en: "KIDS' TOILET",
          zh: "KIDS' TOILET",
        },
      },
      {
        id: 'others',
        label: {
          en: 'OTHERS',
          zh: 'OTHERS',
        },
      },
    ],
  },
];

const ProductCard = ({ data }: { data: ProductItem }) => {
  const { id, title, thumb, link } = data;

  const learnMoreCta: ButtonElement<IconList> = {
    label: 'Learn More',
    variant: ButtonVariation.contain,
    color: ButtonColor.primary,
    shape: ButtonShape.square,
    icon: {
      name: 'learnMore',
      position: ButtonIconPosition.left,
    },
    link,
  };

  return (
    <div className={`${styles.productCard}`}>
      <div className={`${styles.cardInner}`}>
        <div className={`${styles.thumb}`}>
          <Image src={thumb} width={100} height={100} alt={`${id}`} draggable={false} />
        </div>
        <div className={`${styles.content}`}>
          <h4 className={`${styles.productTitle}`}>{id}</h4>
          <div className={`${styles.description}`}>{title}</div>
        </div>
        <div className={`${styles.action}`}>
          <Button content={learnMoreCta} />
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ order, data }: ModuleData<SectionTitle, null>) => {
  const { id } = data;

  const { lang } = useParams();

  const pagePerItem = useRef(10);
  const searchInput = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductItem[]>();
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<any>([]);
  const [displayItems, setDisplayItems] = useState<ProductItem[]>();
  const [isShowSubCategories, setShowSubCategories] = useState<any>([]);

  const fetchData = async () => {
    setProducts(productData.data);
  };

  const keyDownHandler = (e: any) => {
    if (e.code !== 'Enter') return;
    setKeyword(e.target.value);
    setPage(1);
  };

  const goSearch = () => {
    if (!searchInput.current) return;
    setKeyword(searchInput.current.value);
    setPage(1);
  };

  const resetFilter = () => {
    setSelectedCategory([]);

    setKeyword('');
    if (!searchInput.current) return;
    searchInput.current.value = '';
  };

  const updateShowSubCategory = useCallback(
    (cid: string) => {
      setShowSubCategories((prev: any) => {
        let showingSubCategory = [...prev];

        const isAlreadySelected = isShowSubCategories.some((item: any) => item === cid);

        if (isAlreadySelected) {
          showingSubCategory = showingSubCategory.filter((item: any) => item !== cid);
        } else {
          showingSubCategory.push(cid);
        }

        return showingSubCategory;
      });
    },
    [isShowSubCategories, setShowSubCategories]
  );

  const updateSelectedFilter = useCallback(
    ({ type, cid, scid }: { type: 'main' | 'sub'; cid: string; scid?: string }) => {
      setSelectedCategory((prevCategories: any) => {
        let updatedCategories = [...prevCategories];

        if (type === 'main') {
          const isAlreadySelected = updatedCategories.some((item: any) => item.cid === cid);

          if (isAlreadySelected) {
            updatedCategories = updatedCategories.filter((item: any) => item.cid !== cid);
          } else {
            updatedCategories.push({ cid, sub: [] });
          }
        } else if (type === 'sub' && scid) {
          const categoryIndex = updatedCategories.findIndex((item: any) => item.cid === cid);

          if (categoryIndex !== -1) {
            const existingSubcategories = updatedCategories[categoryIndex].sub || [];

            const isSubAlreadySelected = existingSubcategories.includes(scid);

            if (isSubAlreadySelected) {
              updatedCategories[categoryIndex].sub = existingSubcategories.filter((sub: string) => sub !== scid);
            } else {
              updatedCategories[categoryIndex].sub = [...existingSubcategories, scid];
            }
          } else {
            updatedCategories.push({ cid, sub: [scid] });
          }
        }

        return updatedCategories;
      });
    },
    []
  );

  const splitPages = (array: ProductItem[], itemsPerPage: number, currentPage: number) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return array.slice(startIndex, endIndex);
  };

  const getIsSelected = (cid: string, scid?: string): boolean => {
    if (!selectedCategory) return false;

    return selectedCategory.some((item: any) => {
      if (item.cid === cid) {
        if (!scid) {
          return true;
        }
        return item.sub?.some((sub: string) => sub === scid);
      }
      return false;
    });
  };

  const getFilteredData = useCallback(() => {
    if (!products) return;

    const filteredProducts = products.filter((product) => {
      return selectedCategory.some((selectedCategory: any) => {
        if (selectedCategory.sub === null || selectedCategory.sub.length < 1) {
          return product.category.includes(selectedCategory.cid);
        } else {
          return selectedCategory.sub.some((sub: any) => product.subCategory && product.subCategory.includes(sub));
        }
      });
    });

    return filteredProducts;
  }, [products, selectedCategory]);

  const getDisplayData = useCallback(() => {
    if (!products) return;
    setDisplayItems([]);
    setIsLoading(true);

    setTimeout(() => {
      const categoryFilteredData = selectedCategory.length > 0 ? getFilteredData() : products;
      const searchKeyFilteredData = categoryFilteredData?.filter((item: any) =>
        item.title.toLowerCase().includes(keyword.toLowerCase())
      ) as ProductItem[];

      const res = splitPages(searchKeyFilteredData, pagePerItem.current, page);
      const getTotalPage = Math.ceil(searchKeyFilteredData.length / pagePerItem.current);

      setPage(1);
      setTotalPage(getTotalPage);
      setDisplayItems(res);
      setIsLoading(false);
    }, 500);
  }, [
    page,
    setPage,
    setTotalPage,
    pagePerItem,
    setDisplayItems,
    keyword,
    getFilteredData,
    products,
    setIsLoading,
    selectedCategory.length,
  ]);

  useEffect(() => {
    if (products) return;
    fetchData();
  }, [products]);

  useEffect(() => {
    if (!products) return;
    getDisplayData();
  }, [products, getDisplayData, keyword, selectedCategory]);

  return (
    <section id={id ? id : `section${order}`} className={`${styles.productList}`}>
      <div className={`${styles.inner}`}>
        <div className={`${styles.productFilter}`}>
          <div className={`${styles.filterUtils}`}>
            <div className={`${styles.filterController}`}>
              <div className={`${styles.controlItem}`}>
                <div className={`${styles.controlIcon}`}>
                  <SvgIcon name='filter' />
                </div>
                <div className={`${styles.controlLabel}`}>Filter</div>
              </div>
              <button
                onClick={() => resetFilter()}
                className={`${styles.controlItem} ${styles.hasAction} ${
                  selectedCategory.length > 0 || keyword.length > 0 ? styles.active : ''
                }`}
                disabled={selectedCategory.length > 0 || keyword.length > 0 ? false : true}
              >
                <div className={`${styles.controlIcon}`}>
                  <SvgIcon name='filterReset' />
                </div>
                <div className={`${styles.controlLabel}`}>Reset</div>
              </button>
            </div>
            <div className={`${styles.searchWrap}`}>
              <div className={`${styles.search}`}>
                <input ref={searchInput} type='text' name='searchKey' placeholder='Search' onKeyDown={keyDownHandler} />
                <button className={`${styles.searchButton}`} onClick={() => goSearch()}>
                  <div className={`${styles.searchIcon}`}>
                    <SvgIcon name='search' />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles.filterInner}`}>
            <div className={`${styles.categories}`}>
              {categoryList.map((cat, cIndex) => {
                return (
                  <div className={`${styles.categoryGroup}`} key={cIndex}>
                    <button
                      onClick={() => updateSelectedFilter({ type: 'main', cid: cat.id })}
                      className={`${styles.categoryItem} ${getIsSelected(cat.id) ? styles.active : ''}`}
                      aria-expanded={isShowSubCategories?.includes(cat.id)}
                    >
                      <div className={`${styles.selectCheck}`}>
                        <div className={`${styles.checkIcon}`}>
                          <SvgIcon name='tick' />
                        </div>
                      </div>
                      <div
                        className={`${styles.selectLabel}`}
                        dangerouslySetInnerHTML={{ __html: cat.label[lang as keyof typeof cat.label] }}
                      />
                    </button>

                    {cat?.sub && (
                      <button
                        className={`${styles.toggleSubCategory} ${
                          isShowSubCategories?.includes(cat.id) ? styles.active : ''
                        }`}
                        onClick={() => updateShowSubCategory(cat.id)}
                      >
                        <div className={`${styles.toggleIcon}`}>
                          <SvgIcon name='arrowDownChevron' />
                        </div>
                      </button>
                    )}

                    <AnimatePresence>
                      {isShowSubCategories?.includes(cat.id) && (
                        <>
                          {cat?.sub && (
                            <motion.div
                              className={`${styles.subCategory}`}
                              exit={{ height: 0, opacity: 0 }}
                              initial={{ height: 0.9, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              transition={{ duration: 0.3, ease: 'linear' }}
                            >
                              <div className={`${styles.subCategoryInner}`}>
                                {cat?.sub?.map((sCat, scIndex) => {
                                  return (
                                    <button
                                      key={scIndex}
                                      className={`${styles.subCategoryItem} ${
                                        getIsSelected(cat.id, sCat.id) ? styles.active : ''
                                      }`}
                                      onClick={() => updateSelectedFilter({ type: 'sub', cid: cat.id, scid: sCat.id })}
                                    >
                                      <div className={`${styles.selectCheck}`}>
                                        <div className={`${styles.checkIcon}`}>
                                          <SvgIcon name='tick' />
                                        </div>
                                      </div>
                                      <div
                                        className={`${styles.selectLabel}`}
                                        dangerouslySetInnerHTML={{
                                          __html: sCat.label[lang as keyof typeof sCat.label],
                                        }}
                                      />
                                    </button>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            <div className={`${styles.resultWrap}`}>
              <div className={`${styles.resultInner}`}>
                {/* selected filter ids:
                {JSON.stringify(selectedCategory)}
                show sub categories:
                {JSON.stringify(isShowSubCategories)} */}

                <div className={`${styles.resultArea}`}>
                  {displayItems && displayItems?.length > 0 && (
                    <>
                      {displayItems?.map((item, index) => {
                        return (
                          <ProductCard key={index} data={item} />
                        );
                      })}
                    </>
                  )}

                  <AnimatePresence mode='wait'>
                    {isLoading && (
                      <motion.div
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'linear' }}
                        className={`${styles.loadingSkeleton}`}
                      >
                        <div className={`${styles.loadingSkeletonInner}`}>
                          <Skeleton className='rounded-lg'>
                            <div className='h-24 rounded-lg bg-default-300' />
                          </Skeleton>
                          <div className='space-y-3 mt-4'>
                            <Skeleton className='w-3/5 rounded-lg'>
                              <div className='h-3 w-3/5 rounded-lg bg-default-200' />
                            </Skeleton>
                            <Skeleton className='w-4/5 rounded-lg'>
                              <div className='h-3 w-4/5 rounded-lg bg-default-200' />
                            </Skeleton>
                            <Skeleton className='w-2/5 rounded-lg'>
                              <div className='h-3 w-2/5 rounded-lg bg-default-300' />
                            </Skeleton>
                            <Skeleton className='w-1/5 rounded-lg'>
                              <div className='h-3 w-2/5 rounded-lg bg-default-300' />
                            </Skeleton>
                          </div>
                          <Skeleton className='rounded-lg mt-10'>
                            <div className='h-24 rounded-lg bg-default-300' />
                          </Skeleton>
                          <div className='space-y-3 mt-4'>
                            <Skeleton className='w-3/5 rounded-lg'>
                              <div className='h-3 w-3/5 rounded-lg bg-default-200' />
                            </Skeleton>
                            <Skeleton className='w-4/5 rounded-lg'>
                              <div className='h-3 w-4/5 rounded-lg bg-default-200' />
                            </Skeleton>
                            <Skeleton className='w-2/5 rounded-lg'>
                              <div className='h-3 w-2/5 rounded-lg bg-default-300' />
                            </Skeleton>
                            <Skeleton className='w-1/5 rounded-lg'>
                              <div className='h-3 w-2/5 rounded-lg bg-default-300' />
                            </Skeleton>
                          </div>
                          <div className='space-y-3 mt-10'>
                            <Skeleton className='w-3/5 rounded-lg'>
                              <div className='h-3 w-3/5 rounded-lg bg-default-200' />
                            </Skeleton>
                            <Skeleton className='w-4/5 rounded-lg'>
                              <div className='h-3 w-4/5 rounded-lg bg-default-200' />
                            </Skeleton>
                            <Skeleton className='w-2/5 rounded-lg'>
                              <div className='h-3 w-2/5 rounded-lg bg-default-300' />
                            </Skeleton>
                            <Skeleton className='w-1/5 rounded-lg'>
                              <div className='h-3 w-2/5 rounded-lg bg-default-300' />
                            </Skeleton>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {!isLoading && displayItems && displayItems?.length < 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'linear' }}
                      >
                        no result..
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className={`${styles.resultPagination}`}>
                  {page} / {totalPage}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
