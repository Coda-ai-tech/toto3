'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from './InspirationDetail.module.scss';
import { InspirationItem } from '../en';

// Extend the InspirationItem interface to include detail page specifics
interface InspirationDetailItem extends InspirationItem {
  slides?: string[];
  thumbnails?: string[];
  similar_items?: InspirationItem[];
}

const InspirationDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<InspirationDetailItem | null>(null);
  const [similarItems, setSimilarItems] = useState<InspirationItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch inspiration data from local JSON file
        const response = await fetch(
          '/assets/global/inspiration/common/json/data.json',
        );

        if (!response.ok) {
          throw new Error('Failed to fetch inspiration data');
        }

        const data = await response.json();

        // Find the current item
        const item = data.find(
          (item: InspirationItem) => item.id === Number(id),
        );

        if (item) {
          // Set number of slides based on ID (this could be in the data.json)
          const slidesCount = id === '1' ? 6 : 3;

          // Generate slide paths
          const basePath = `/assets/global/inspiration/images/id${id}`;
          const slides = Array(slidesCount)
            .fill(0)
            .map(
              (_, i) =>
                `${basePath}/id${id}_slide-img${(i + 1)
                  .toString()
                  .padStart(2, '0')}.jpg`,
            );

          // Generate thumbnail paths
          const thumbnails = Array(slidesCount)
            .fill(0)
            .map(
              (_, i) =>
                `${basePath}/id${id}_slide-img${(i + 1)
                  .toString()
                  .padStart(2, '0')}_thumb.jpg`,
            );

          // Find similar items
          const similar = data
            .filter((i: InspirationItem) => {
              // Handle multiple categories (e.g. "1:3")
              const itemCats = item.cate_id.split(':');
              const otherCats = i.cate_id.split(':');

              return (
                itemCats.some((cat: any) => otherCats.includes(cat)) &&
                i.id !== item.id
              );
            })
            .slice(0, 4); // Limit to 4 similar items

          setDetail({
            ...item,
            slides,
            thumbnails,
          });
          setTotalSlides(slidesCount);
          setSimilarItems(similar);
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching inspiration detail:', error);
        setIsLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(totalSlides - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  if (!detail) {
    return (
      <div className={styles.notFound}>
        <h2>Inspiration not found</h2>
        <Link href="/en/inspiration">Return to inspiration gallery</Link>
      </div>
    );
  }

  return (
    <div id="body_inner" className={styles.bodyInner}>
      {/* Main image container positioned at the top with title inside */}
      <div className={styles.sliderContainer}>
        <div className={styles.inspirationHead}>
          <h2 className={styles.indexTitle}>
            {/* <Link href="/en/inspiration">INSPIRATION</Link> */}
          </h2>
        </div>

        <div className={styles.sliderWrapper} ref={sliderRef}>
          {detail.slides && detail.slides.length > 0 && (
            <div className={styles.slideContainer}>
              {detail.slides.map((slide, index) => (
                <div
                  key={index}
                  className={`${styles.slideItem} ${
                    index === currentSlide ? styles.active : ''
                  }`}>
                  <img src={slide} alt={`${detail.name} slide ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div id="contents" className={styles.contents}>
        <div id="refPage" className={styles.refPage}>
          <div className={styles.mvArea}>
            <div className={styles.stack}>
              <div className={styles.thumbnailWrapper}>
                {detail.thumbnails && detail.thumbnails.length > 0 && (
                  <ul className={styles.thumbnailList}>
                    {detail.thumbnails.map((thumb, index) => (
                      <li
                        key={index}
                        className={`${styles.thumbnailItem} ${
                          index === currentSlide ? styles.active : ''
                        }`}
                        onClick={() => goToSlide(index)}>
                        <img src={thumb} alt={`Thumbnail ${index + 1}`} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div
                className={`${styles.infoArea} ${
                  !detail.vr ? styles.nonvr : ''
                }`}>
                <div className={styles.counter}>
                  <img
                    src="/inspiration_common/images/arrow_left.png"
                    alt="Previous"
                    className={styles.slidePrev}
                    onClick={prevSlide}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' fill='black'/%3E%3C/svg%3E";
                    }}
                  />
                  <span className={styles.curSlide}>{currentSlide + 1}</span>/
                  <span className={styles.allSlide}>{totalSlides}</span>
                  <img
                    src="/inspiration_common/images/arrow_right.png"
                    alt="Next"
                    className={styles.slideNext}
                    onClick={nextSlide}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' fill='black'/%3E%3C/svg%3E";
                    }}
                  />
                </div>

                {detail.vr && (
                  <div className={styles.vrButton}>
                    <a href="#" className={styles.vrLink}>
                      GO TO VR SPACE
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <section className={styles.mainContents}>
            <h1>{detail.name}</h1>

            <div className={styles.detail}>
              <p>{detail.description}</p>
            </div>

            {similarItems.length > 0 && (
              <div className={styles.anotherSpaceArea}>
                <h2>SIMILAR TYPE</h2>
                <div className={styles.similarItems}>
                  {similarItems.map((item, index) => (
                    <div key={item.id} className={styles.similarItem}>
                      <Link href={`/en/inspiration/${item.id}`}>
                        <div className={styles.similarThumb}>
                          <img
                            src={`/assets/global/inspiration/images/img${item.id}.jpg`}
                            alt={item.name}
                          />
                        </div>
                        <div className={styles.similarName}>
                          <p>{item.name}</p>
                          <span>{item.category_name}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.detailBtnArea}>
              <div className={styles.detailBtn}>
                <Link href="/en/inspiration">
                  <div className={styles.blackLine}>SEE ALL</div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InspirationDetail;
