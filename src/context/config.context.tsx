'use client';
import { createContext, useState } from 'react';

export const ConfigContext = createContext<{
  globalData: any;
  setGlobalData: Function;
  dictionary: any;
  setDictionary: Function;
  screen: string | null;
  setScreen: Function;
  screenList: string | null;
  setScreenList: Function;
  isNavShow: boolean;
  setNavShow: Function;
  isNavOverlay: boolean;
  setNavOverlay: Function;
  isHeaderShow: boolean;
  setHeaderShow: Function;
  isFooterShow: boolean;
  setFooterShow: Function;
  isBreadcrumbOverlay: boolean;
  setBreadcrumbOverlay: Function;
}>({
  globalData: null,
  setGlobalData: () => {},
  dictionary: null,
  setDictionary: () => {},
  screen: null,
  setScreen: () => '',
  screenList: null,
  setScreenList: () => '',
  isNavShow: false,
  setNavShow: () => '',
  isNavOverlay: false,
  setNavOverlay: () => '',
  isHeaderShow: true,
  setHeaderShow: () => '',
  isFooterShow: true,
  setFooterShow: () => '',
  isBreadcrumbOverlay: false,
  setBreadcrumbOverlay: () => '',
});

export const ConfigContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [globalData, setGlobalData] = useState<any>(null);
  const [dictionary, setDictionary] = useState<any>(null);
  const [screen, setScreen] = useState<string | null>(null);
  const [screenList, setScreenList] = useState<string | null>(null);
  const [isNavShow, setNavShow] = useState<boolean>(false);
  const [isNavOverlay, setNavOverlay] = useState<boolean>(false);
  const [isHeaderShow, setHeaderShow] = useState<boolean>(true);
  const [isFooterShow, setFooterShow] = useState<boolean>(true);
  const [isBreadcrumbOverlay, setBreadcrumbOverlay] = useState<boolean>(false);

  return (
    <ConfigContext.Provider
      value={{
        globalData,
        setGlobalData,
        dictionary,
        setDictionary,
        screen,
        setScreen,
        screenList,
        setScreenList,
        isNavShow,
        setNavShow,
        isNavOverlay,
        setNavOverlay,
        isHeaderShow,
        setHeaderShow,
        isFooterShow,
        setFooterShow,
        isBreadcrumbOverlay,
        setBreadcrumbOverlay,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
