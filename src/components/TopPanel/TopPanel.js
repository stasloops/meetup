'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  TopPanelBlock,
  LogoPartMain,
  LogoLink,
  RightColumn,
  TopPanelColumn,
  TopPanelLayout,
  TopPanelContentWrapper,
  NotificationCount,
  NotificationCountText,
} from './TopPanelStyles';
import SunIcon from '../../data/assets/svg/sun.svg';
import MoonIcon from '../../data/assets/svg/moon.svg';
import ProfileIcon from '../../data/assets/svg/profile.svg';
import NotificationIcon from '../../data/assets/svg/notification.svg';
import MenuBurgerIcon from '../../data/assets/svg/menu-burger.svg';
import { store } from '../../data/store';
import { SideMenuButton } from '../SideMenu/SideMenuStyles';

export function TopPanel({ onChangeTheme, theme }) {
  const router = useRouter();

  const routeToHome = () => {
    router.push('/events');
  };

  return (
    <TopPanelBlock>
      <TopPanelContentWrapper>
        <TopPanelLayout>
          <TopPanelColumn>
            <SideMenuButton onClick={() => store.pageStore.setShowOuterPanel(store.pageStore._panelTypes.MENU)}>
              <MenuBurgerIcon />
            </SideMenuButton>

            <LogoLink onClick={routeToHome}>
              <div className="mainPart">
                <LogoPartMain />
              </div>
            </LogoLink>
          </TopPanelColumn>
          <RightColumn>
            <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer', position: 'relative' }}>
              <NotificationCount>
                <NotificationCountText>6</NotificationCountText>
              </NotificationCount>
              <NotificationIcon />
            </button>
            <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
              <ProfileIcon />
            </button>
            <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => onChangeTheme(!theme)}>
              {theme ? <MoonIcon /> : <SunIcon />}
            </button>
          </RightColumn>
        </TopPanelLayout>
      </TopPanelContentWrapper>
    </TopPanelBlock>
  );
}
