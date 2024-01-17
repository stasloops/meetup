'use client';

import { useMemo } from 'react';
import {
  SideMenuWrapper,
  SideMenuMain,
  SideMenuFooter,
  SideMenuList,
  SideMenuItem,
  SideMenuFooterLinks,
  PrivacyBlock,
  CloseButton,
} from './SideMenuStyles';
import { groupMenuConfig, menuConfig } from '../../helpers/menuConfig';
import { SideMenuGroup } from './SideMenuGroup';
import { FooterSocialContainer, LogoImage } from '../Footer/FooterStyles';
import { IconButton } from '../Kit/IconButton/IconButton';
import VKIcon from '../../data/assets/svg/footer/vk.svg';
import CloseIcon from '../../data/assets/svg/close.svg';
import TelegramIcon from '../../data/assets/svg/footer/telegram.svg';
import { store } from '../../data/store';
import useMediaQuery from '../../lib/useMediaQuery';

export function SideMenu() {
  const mobileS = useMediaQuery('(max-width: 768px)');
  const menu = useMemo(() => {
    const list = menuConfig.map((item) => (
      <SideMenuItem key={item.title} href={item.href}>
        {item.title}
      </SideMenuItem>
    ));
    if (mobileS) {
      list.push(<SideMenuItem href="/feedback">Обратная связь</SideMenuItem>);
    }

    return list;
  }, [mobileS]);

  return (
    <SideMenuWrapper>
      <CloseButton onClick={() => store.pageStore.resetOuterPanel()}>
        <CloseIcon />
      </CloseButton>
      <SideMenuMain>
        <SideMenuList style={{ display: 'flex', flexDirection: 'column' }}>{menu}</SideMenuList>
        <SideMenuList>
          <SideMenuGroup items={groupMenuConfig} />
        </SideMenuList>
        <PrivacyBlock />
        <SideMenuFooter>
          <SideMenuFooterLinks>
            <LogoImage />
            <FooterSocialContainer>
              <IconButton>
                <a href="https://vk.com/public207973995" target="_blank" rel="noreferrer">
                  <VKIcon />
                </a>
              </IconButton>
              <IconButton>
                <a href="https://t.me/+Be13u-DgNKU2NjFi" target="_blank" rel="noreferrer">
                  <TelegramIcon />
                </a>
              </IconButton>
            </FooterSocialContainer>
          </SideMenuFooterLinks>
        </SideMenuFooter>
      </SideMenuMain>
    </SideMenuWrapper>
  );
}
