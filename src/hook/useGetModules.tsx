import React from 'react';
import { Module } from '@/types/index';
import { ModuleList } from '@/types/modules';

export const GetModule = (data: Record<string, any>) => {
  const generateModule = (item: Module<any, any>, index: number) => {
    const key = `module${index}`;

    if (typeof ModuleList[item.module] !== 'undefined') {
      return React.createElement(ModuleList[item.module], {
        key,
        order: index,
        data: item,
      });
    }

    return React.createElement(
      () => (
        <section className='noModule'>
          <div className='noModuleLabel'>
            <span>
              The Module <mark>{item.module}</mark> has not been created yet.
            </span>
          </div>
        </section>
      ),
      { key }
    );
  };

  return data?.content.map((item: Module<any, any>, index: number) => generateModule(item, index));
};

export const GetModuleList = (data: Record<string, any>) => {
  const generateModule = (item: Module<any, any>, index: number) => {
    const key = `module${index}`;

    if (typeof ModuleList[item.module] !== 'undefined') {
      return (
        <div key={`#${item.id ? item.id : 'section' + index}`} className='moduleItem'>
          <a href={`#${item.id ? item.id : 'section' + index}`} className='moduleLink'>
            {index + 1}. {item.module}
          </a>
        </div>
      );
    }

    return React.createElement(
      () => <section className='noModule'>The Module {item.module} has not been created yet.</section>,
      { key }
    );
  };

  return data?.content.map((item: Module<any, any>, index: number) => generateModule(item, index));
};
