'use client';
import { useEffect, useContext } from 'react';
import { ConfigContext } from '@/context/config.context';
import { ButtonElementDefault } from '@/types';
import { SetBreakPoint } from '@/hook/useBreakPoint';

export interface GlobalDataProps {
  logo: {
    src: {
      default: string;
      overlay: string;
      footer: string;
    };
  };
  navigation: {
    header: Record<string, any>[];
    footer: {
      title: string;
      items: ButtonElementDefault[];
    }[];
    globalNetwork: {
      title: string;
      items: ButtonElementDefault[];
    }[];
    footerStaticMenu: ButtonElementDefault[];
  };
  sns: {
    label: string;
    link: string;
    icon: string;
  }[];
  dictionary: Record<string, any>;
}

const GlobalConfig = ({ data }: { data: GlobalDataProps }) => {
  SetBreakPoint();
  const { dictionary } = data;
  const { setDictionary, setGlobalData } = useContext(ConfigContext);

  useEffect(() => {
    setDictionary(dictionary);
    setGlobalData(data);
  }, [data, setGlobalData, dictionary, setDictionary]);

  return <></>;
};

export default GlobalConfig;
