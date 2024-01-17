'use client';

import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import styled, { ThemeProvider } from 'styled-components';
import { usePathname } from 'next/navigation';
import { darkTheme, lightTheme } from '../styles/theme';
import { TopPanel } from './TopPanel/TopPanel';
import { DefaultGradient } from '../styles/blocks/DefaultGradient';
import { GreenGradient } from '../styles/blocks/GreenGradient';
import { Footer } from './Footer/Footer';
import { store } from '../data/store';
import { OuterPanel } from './OuterPanel/OuterPanel';
import { ContentWrapper } from '../styles/blocks/ConentWrapper';
import SearchPanel from './SearchPanel/SearchPanel';
import Sidebar from './Sidebar/Sidebar';
import CookiesPanel from './Cookies/CookiesPanel';
import { storage } from '../helpers/storage';

const StyledMain = styled.main`
  margin-top: 100px;
  ${({ isEvent }) => (isEvent ? 'position: relative;' : '')};

  @media (max-width: 1245px) {
    margin-top: 95px;
    /* & {

    } */
  }

  @media (max-width: 840px) {
    margin-top: 140px;
  }

  @media (max-width: 740px) {
    margin-top: 110px;
  }
`;

export const MainLayout = observer(({ children }) => {
  const path = usePathname();
  const isEvent = path !== '/events/[id]';
  const isAbout = path === '/about';
  const [theme, setTheme] = useState(storage.get('is_light'));

  const toggleTheme = (isLight) => {
    storage.set('is_light', isLight);
    setTheme(isLight);
  };
  return (
    <div className={theme ? '' : 'dark'}>
      <ThemeProvider theme={theme ? { ...lightTheme, isLight: theme } : { ...darkTheme, isLight: theme }}>
        {store.pageStore._showOuterPanel && store.pageStore._showOuterPanel === store.pageStore._panelTypes.MENU && (
          <OuterPanel place="left">
            <Sidebar />
          </OuterPanel>
        )}
        {store.pageStore._showOuterPanel && store.pageStore._showOuterPanel === store.pageStore._panelTypes.SEARCH && (
          // <OuterPanel>
          <SearchPanel />
          // </OuterPanel>
        )}
        <TopPanel onChangeTheme={toggleTheme} theme={theme} />
        {isAbout && <StyledMain isEvent={isEvent}>{children}</StyledMain>}
        {!isAbout && (
          <ContentWrapper style={{ position: 'relative' }}>
            <StyledMain isEvent={isEvent}>{children}</StyledMain>
          </ContentWrapper>
        )}
        <DefaultGradient />
        <GreenGradient />
        <Footer />
        <CookiesPanel />
      </ThemeProvider>
    </div>
  );
});
