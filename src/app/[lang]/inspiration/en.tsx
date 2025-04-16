'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import styles from './Inspiration.module.scss';

export interface InspirationItem {
  id: number;
  name: string;
  category_name: string;
  cate_id: string;
  vr?: boolean;
  vr_house_id?: 'p1' | 'p2' | 'p3' | 'p4';
  space_name?: string;
  primary?: number;
  description?: string;
}

const En = () => {
  const [inspirationData, setInspirationData] = useState<InspirationItem[]>([]);
  const [filteredData, setFilteredData] = useState<InspirationItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('0');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          '/assets/global/inspiration/common/json/data.json',
        );
        const data = await response.json();

        // Sort data to show VR items first
        const sortedData = [...data].sort((a, b) => {
          if (a.vr === b.vr) return 0;
          return a.vr ? -1 : 1;
        });

        setInspirationData(sortedData);
        setFilteredData(sortedData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching inspiration data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(`.${styles.menuBtn}`)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);

    if (categoryId === '0') {
      setFilteredData(inspirationData);
    } else {
      const filtered = inspirationData.filter((item) => {
        // Handle items with multiple categories (e.g. "1:3")
        const categories = item.cate_id.split(':');
        return categories.includes(categoryId);
      });
      setFilteredData(filtered);
    }

    setIsMenuOpen(false);
  };

  return (
    <div className={styles.bodyInner}>
      <div className={styles.page}>
        <section className={styles.inspirationWrapper}>
          <div className={styles.inspirationHead}>
            <h2 className={styles.indexTitle}>INSPIRATION</h2>
            <button
              className={styles.menuBtn}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}>
              TYPE
            </button>
            {isMenuOpen && (
              <div className={styles.openMenu} ref={menuRef}>
                <button
                  className={styles.closeBtn}
                  onClick={toggleMenu}
                  aria-label="Close menu"></button>
                <div className={styles.sortMenuTitle}>TYPE</div>
                <ul>
                  <li className={selectedCategory === '0' ? styles.active : ''}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategoryChange('0');
                      }}>
                      All
                    </a>
                  </li>
                  <li className={selectedCategory === '1' ? styles.active : ''}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategoryChange('1');
                      }}>
                      All suite
                    </a>
                  </li>
                  <li className={selectedCategory === '2' ? styles.active : ''}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategoryChange('2');
                      }}>
                      Boutique
                    </a>
                  </li>
                  <li className={selectedCategory === '3' ? styles.active : ''}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategoryChange('3');
                      }}>
                      Resort
                    </a>
                  </li>
                  <li className={selectedCategory === '4' ? styles.active : ''}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategoryChange('4');
                      }}>
                      Urban
                    </a>
                  </li>
                  <li className={selectedCategory === '5' ? styles.active : ''}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategoryChange('5');
                      }}>
                      Suburban
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {isLoading ? (
            <div className={styles.loading}>
              <div className={styles.loader}></div>
            </div>
          ) : (
            <ul className={styles.grid}>
              {filteredData.map((item) => (
                <li
                  key={item.id}
                  className={`${styles.item} ${item.vr ? styles.vr : ''}`}>
                  <Link href={`/en/inspiration/${item.id}`} legacyBehavior>
                    <a className={styles.inspirationThumb}>
                      <div className={styles.thumb}>
                        <img
                          src={`/assets/global/inspiration/images/img${item.id}.jpg`}
                          alt={item.name}
                          width={600}
                          height={400}
                        />
                      </div>
                      <div className={styles.name}>
                        <p className={styles.ttl}>{item.name}</p>
                        <p className={styles.sub}>
                          {/* {item.category_name} */}
                          {item.space_name && `${item.space_name}`}
                        </p>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default En;
