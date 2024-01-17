import { useRouter } from 'next/navigation';
import React from 'react';
import { store } from '../../data/store';
import { INav, SIDEBAR_NAV_CONFIG, SIDEBAR_SERVICE_NAV_CONFIG } from '../../helpers/sidebarConfig';
import {
  BottomContent,
  CloseButton,
  SidebarContainer,
  SidebarNav,
  SidebarNavs,
  SidebarPanel,
  SidebarServiceNavs,
  Terms,
  TermsLink,
  TopContent,
} from './SidebarStyles';
import { SideMenuFooter, SideMenuFooterLinks } from '../SideMenu/SideMenuStyles';
import { FooterSocialContainer, LogoImage } from '../Footer/FooterStyles';
import { IconButton } from '../Kit/IconButton/IconButton';
import VKIcon from '../../data/assets/svg/footer/vk.svg';
import CloseIcon from '../../data/assets/svg/close.svg';
import TelegramIcon from '../../data/assets/svg/footer/telegram.svg';
import SidebarNavItem from './SidebarNavItem';

function Sidebar() {
  const router = useRouter();

  const close = () => {
    store.pageStore.resetOuterPanel();
  };

  const routeByPath = (path: string) => {
    if (!path) {
      return;
    }
    router.push(path);
    close();
  };

  return (
    <SidebarPanel>
      <SidebarContainer>
        <CloseButton onClick={close}>
          <CloseIcon />
        </CloseButton>
        <TopContent>
          <SidebarNavs>
            {SIDEBAR_NAV_CONFIG.map((item: INav) => (
              <SidebarNav onClick={() => routeByPath(item.href || '')} key={item.title}>
                {item.title}
              </SidebarNav>
            ))}
          </SidebarNavs>
          <SidebarServiceNavs>
            {SIDEBAR_SERVICE_NAV_CONFIG.map((item: INav) => (
              <SidebarNavItem key={item.title} item={item} />
            ))}
          </SidebarServiceNavs>

          <Terms>
            <TermsLink onClick={() => routeByPath('/rules')}>Правила пользования сайтом</TermsLink>
          </Terms>
        </TopContent>

        <BottomContent>
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
        </BottomContent>
      </SidebarContainer>
    </SidebarPanel>
  );
}

export default Sidebar;
