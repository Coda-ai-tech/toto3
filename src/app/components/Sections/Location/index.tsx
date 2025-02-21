'use client';
import dynamic from 'next/dynamic';
import { useState, useEffect, useCallback, useContext } from 'react';
import { ConfigContext } from '@/context/config.context';
import { ModuleData, SectionTitle, MediaElement, ButtonElement } from '@/types';
import { ScrollShadow, Accordion, AccordionItem } from '@heroui/react';
import { IconList } from '@/types/icons';
import { MatchMedia, BreakPoint, MatchMediaType } from '@/hook/useBreakPoint';
import Image from 'next/image';
import Media from '@@/Media';
import Button from '@@/Button';
import SvgIcon from '@@/SvgIcon';
import styles from './Location.module.scss';

import dealersData from '../../../../../public/api/en/location-data.json';

const CustomModal = dynamic(() => import('@@/Modal'), { ssr: false });

interface DealerItem {
  district: string;
  location: string;
  name: string;
  address: string;
  gmap: string;
  thumb: string;
  time: string | null;
  fax: string | null;
  tel: string[];
}

interface VirtualTourItem extends SectionTitle {
  cta: ButtonElement<IconList>[];
  media: MediaElement;
}

interface LocationProps extends SectionTitle {
  virtualTour: VirtualTourItem;
}

const Location = ({ order, data }: ModuleData<LocationProps, null>) => {
  const {
    id,
    content: { title, virtualTour },
  } = data;

  const { screen } = useContext(ConfigContext);

  const dealers = dealersData.data;
  const [selectedDealer, setSelectedDealer] = useState<DealerItem>(dealers[0]);
  const [resultData, setResultData] = useState<DealerItem[]>() as any;
  const [categoryList, setCategoryList] = useState<any>(null);
  const [selectedCategory, setCategory] = useState<string>('all');

  useEffect(() => {
    if (!dealers) return;

    const countCategoryItems = dealers.reduce((acc: any, curr: any) => {
      const { district } = curr;
      acc[district] = acc[district] ? acc[district] + 1 : 1;
      return acc;
    }, {});

    const categoryList = Object.entries(countCategoryItems).map(([district, count]) => ({
      district,
      count,
    }));

    setCategoryList(categoryList);
  }, [dealers, setCategoryList]);

  const getFilteredData = useCallback(() => {
    return dealers.filter((item: DealerItem) => item.district === selectedCategory);
  }, [dealers, selectedCategory]);

  const getDisplayData = useCallback(() => {
    setResultData([]);
    setTimeout(() => {
      const resData = selectedCategory === 'all' ? dealers : getFilteredData();
      setResultData(resData);
      setSelectedDealer(resData[0]);
    }, 10);
  }, [selectedCategory, setSelectedDealer, getFilteredData, dealers]);

  useEffect(() => {
    if (!dealers) return;
    getDisplayData();
  }, [selectedCategory, getDisplayData, dealers]);

  const [isModalShow, setModalShow] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const onModalStatusHandler = useCallback(
    (e: boolean) => {
      setModalShow(e);
      setOpen(e);
    },
    [setModalShow, setOpen]
  );

  const handleOpenModal = () => {
    setOpen(!open);
    setModalShow(true);
  };

  return (
    <section id={id ? id : `section${order}`} className={`${styles.location}`}>
      <div className={`${styles.inner}`}>
        <div className={`${styles.head}`}>
          <h1 className={`${styles.sectionTitle}`}>{title}</h1>
        </div>
        <div className={`${styles.body}`}>
          {categoryList?.length > 0 && (
            <div className={`${styles.categoryWrap}`}>
              <div className={`${styles.categoryInner}`}>
                <button
                  className={`${styles.categoryItem} ${selectedCategory === 'all' ? styles.active : ''}`}
                  onClick={() => setCategory('all')}
                >
                  <span>ALL</span>
                </button>

                {categoryList.map((cat: any, index: number) => {
                  return (
                    <button
                      key={index}
                      className={`${styles.categoryItem} ${selectedCategory === cat.district ? styles.active : ''}`}
                      onClick={() => setCategory(cat.district)}
                    >
                      <span>{cat.district}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          <div className={`${styles.locationList}`}>
            <div className={`${styles.left}`}>
              <div className={`${styles.dealerList}`}>
                <ScrollShadow className={`${styles.listWrap}`}>
                  <div className={`${styles.listInner}`}>
                    {resultData?.length > 0 ? (
                      <Accordion
                        defaultExpandedKeys={[`${resultData[0].location} ${resultData[0].name} ${0}`]}
                        hideIndicator
                        showDivider={false}
                      >
                        {resultData.map((dealer: DealerItem, index: number) => (
                          <AccordionItem
                            key={`${dealer.location} ${dealer.name} ${index}`}
                            aria-label={`${dealer.location} ${dealer.name}`}
                            onPress={() => setSelectedDealer(dealer)}
                            classNames={{
                              base: styles.base,
                            }}
                            HeadingComponent={'h4'}
                            title={
                              <div
                                className={`${styles.dealerHead} ${
                                  selectedDealer.address === dealer.address ? styles.active : ''
                                }`}
                              >
                                <div className={`${styles.dealerHeadInner}`}>
                                  <div className={`${styles.thumb}`}>
                                    <Image
                                      src={`${dealer.thumb}`}
                                      alt={dealer.name}
                                      width={100}
                                      height={100}
                                      draggable={false}
                                    />
                                  </div>
                                  <div className={`${styles.content}`}>
                                    <div className={`${styles.dealerName}`}>{dealer.name}</div>
                                    <div className={`${styles.dealerLocation}`}>{dealer.location}</div>
                                    <div
                                      className={`${styles.statusIndicator} ${
                                        selectedDealer.address === dealer.address ? styles.active : ''
                                      }`}
                                    >
                                      <div className={`${styles.indicatorLabel}`}>Show detail</div>
                                      <div className={`${styles.indicatorIcon}`}>
                                        <SvgIcon name='arrowDownChevron' />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            }
                          >
                            <div className={`${styles.dealerDetail}`}>
                              {dealer.address && (
                                <div className={`${styles.detailItem}`}>
                                  {['2xl', 'xxl', 'max'].includes(screen as string) ? (
                                    <>
                                      <div className={`${styles.itemIcon} ${styles.iconLg}`}>
                                        <SvgIcon name='location' />
                                      </div>
                                      <div className={`${styles.itemValue}`}>{dealer.address}</div>
                                    </>
                                  ) : (
                                    <button className={`${styles.openMapCta}`} onClick={() => handleOpenModal()}>
                                      <div className={`${styles.itemIcon} ${styles.iconLg}`}>
                                        <SvgIcon name='location' />
                                      </div>
                                      <div className={`${styles.itemValue}`}>{dealer.address}</div>
                                    </button>
                                  )}
                                </div>
                              )}

                              {dealer.time && (
                                <div className={`${styles.detailItem}`}>
                                  <div className={`${styles.itemIcon}`}>
                                    <SvgIcon name='time' />
                                  </div>
                                  <div className={`${styles.itemValue}`}>{dealer.time}</div>
                                </div>
                              )}

                              {dealer.fax && (
                                <div className={`${styles.detailItem}`}>
                                  <div className={`${styles.itemIcon}`}>
                                    <SvgIcon name='fax' />
                                  </div>
                                  <div className={`${styles.itemValue}`}>{dealer.fax}</div>
                                </div>
                              )}

                              {dealer.tel && dealer.tel.length > 0 && (
                                <div className={`${styles.detailItem}`}>
                                  <div className={`${styles.itemIcon}`}>
                                    <SvgIcon name='tel' />
                                  </div>
                                  <div className={`${styles.itemValue} ${styles.valueTel}`}>
                                    {dealer.tel.map((data, index) => {
                                      return (
                                        <div key={index}>
                                          <a href={`tel:${data}`}>{data}</a>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    ) : (
                      <>_</>
                    )}
                  </div>
                </ScrollShadow>
              </div>

              <div className={`${styles.virtualTourBanner}`}>
                <div className={`${styles.virtualTourBannerInner}`}>
                  <div className={`${styles.thumb}`}>
                    <Media content={virtualTour.media} />
                  </div>
                  <div className={`${styles.content}`}>
                    <div className={`${styles.subTitle}`}>{virtualTour.subTitle}</div>
                    <div className={`${styles.title}`}>{virtualTour.title}</div>
                    <div className={`${styles.bannerAction}`}>
                      {virtualTour.cta.map((item: ButtonElement<IconList>, index: number) => (
                        <Button key={index} content={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.right}`}>
              {MatchMedia(BreakPoint.hd, MatchMediaType.minWidth) && (
                <div className={`${styles.mapWrap}`}>
                  <iframe
                    src={`${selectedDealer.gmap}`}
                    className={`${styles.map}`}
                    title={`${selectedDealer.name} Google Map`}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <CustomModal isModalShow={isModalShow} onUpdate={(e) => onModalStatusHandler(e)}>
        <div className={`${styles.mapPopup}`}>
          <div className={`${styles.mapWrap}`}>
            <iframe
              src={`${selectedDealer.gmap}`}
              className={`${styles.map}`}
              title={`${selectedDealer.name} Google Map`}
            />
          </div>
        </div>
      </CustomModal>
    </section>
  );
};

export default Location;
