'use client';
import { useState, useCallback, useEffect } from 'react';
import { ModuleData, SectionTitle } from '@/types';
import { TechnologyGroup, TechnologyGroupData } from './TechnologyGroup';
import styles from './TechnologyList.module.scss';

import technologyData from '../../../../../public/api/en/technology-data.json';
import { useParams } from 'next/navigation';

const TechnologyList = ({ order, data }: ModuleData<SectionTitle, null>) => {
  const {
    id,
    content: { title },
  } = data;

  const { lang } = useParams();
  const [technology, setTechnology] = useState<TechnologyGroupData[]>([]);
  const [currentSection, setCurrentSection] = useState('');

  //const technology = technologyData.data as TechnologyGroupData[];

    const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DEV_CMS_API_ENDPOINT}${process.env.NEXT_PUBLIC_DEV_CMS_ENDPOINT_SUFFIX}/${lang}/technology`);
      const technologyDatas = await response.json();
      setTechnology(technologyDatas.data);
      if(technologyDatas !== undefined){
      setCurrentSection(technologyDatas.data[0].label)
      }
    } catch (error) {
      console.log('\x1b[36m%s\x1b[0m', `==== DATA NOT FOUND () ====`);
      console.error('error', error);
    }

  };

    useEffect(() => {
      fetchData();
    }, []);

  
  const updateCurrentSection = useCallback(
    (target: string) => {
      setCurrentSection(target);
    },
    [setCurrentSection]
  );

  const ScrollToTarget = (target: string) => {
    const targetEl = document.querySelector(target) as HTMLElement;
    const headerEl = document.querySelector('header') as HTMLElement;
    const top = targetEl.offsetTop + (headerEl?.offsetHeight || 80);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section id={id ? id : `section${order}`} className={`${styles.technologyList}`}>
      <div className={`${styles.inner}`}>
        <hgroup className={`${styles.head}`}>
          <h1 className={`${styles.sectionTitle}`}>{title}</h1>
        </hgroup>
        <div className={`${styles.body}`}>
          <div className={`${styles.techList}`}>
            <div className={`${styles.left}`}>
              <div className={`${styles.groupNav}`}>
                {technology.map((group, index) => {
                  return (
                    <button
                      key={index}
                      className={`${styles.groupNavItem} ${currentSection === group.label ? styles.active : ''}`}
                      onClick={() => {
                        ScrollToTarget(`#${group.id}`);
                      }}
                    >
                      {group.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className={`${styles.right}`}>
              <div className={`${styles.listWrap}`}>
                {technology.map((group, index) => {
                  return (
                    <TechnologyGroup key={index} data={group} onUpdate={(target) => updateCurrentSection(target)} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyList;
