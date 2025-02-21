'use client';
import { useState, useCallback } from 'react';
import { ModuleData, SectionTitle } from '@/types';
import { TechnologyGroup, TechnologyGroupData } from './TechnologyGroup';
import styles from './TechnologyList.module.scss';

import technologyData from '../../../../../public/api/en/technology-data.json';

const TechnologyList = ({ order, data }: ModuleData<SectionTitle, null>) => {
  const {
    id,
    content: { title },
  } = data;

  const technology = technologyData.data as TechnologyGroupData[];

  const [currentSection, setCurrentSection] = useState(technology[0].label || '');

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
