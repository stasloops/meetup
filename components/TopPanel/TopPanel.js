import Link from 'next/link';
import {
  TopPanelBlock,
  LogoPartMain,
  LogoPartSecond,
  LogoLink,
  RightColumn,
  TopPanelColumn,
  TopPanelLayout,
  TopPanelContentWrapper,
} from './TopPanelStyles';
import SunIcon from '../../data/assets/svg/sun.svg';
import MenuBurgerIcon from '../../data/assets/svg/menu-burger.svg';
import { store } from '../../data/store';
import { SideMenuButton } from '../SideMenu/SideMenuStyles';

export function TopPanel({ onChangeTheme, theme }) {
  return (
    <TopPanelBlock>
      <TopPanelContentWrapper>
        <TopPanelLayout>
          <TopPanelColumn>
            <SideMenuButton onClick={() => store.pageStore.setShowOuterPanel(store.pageStore.panelTypes.MENU)}>
              <MenuBurgerIcon />
            </SideMenuButton>
            <Link href="/events" passHref>
              <LogoLink>
                <div className="mainPart">
                  <LogoPartMain />
                </div>
                <div className="secondPart">
                  <LogoPartSecond />
                </div>
              </LogoLink>
            </Link>
          </TopPanelColumn>
          <RightColumn>
            <button
              type="button"
              style={{ border: 'none', background: 'transparent' }}
              onClick={() => onChangeTheme(!theme)}
            >
              <SunIcon />
            </button>
            {/* <TopPanelHeaderIcon onClick={() => onChangeTheme(!theme)}>
              <SunIcon />
            </TopPanelHeaderIcon> */}
          </RightColumn>
        </TopPanelLayout>
      </TopPanelContentWrapper>
    </TopPanelBlock>
  );
}
