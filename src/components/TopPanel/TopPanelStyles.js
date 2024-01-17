import styled from 'styled-components';
import MenuIcon from '../../data/assets/svg/menu.svg';
import LogoMain from '../../data/assets/svg/logo-part-main.svg';
import LogoSecond from '../../data/assets/svg/logo-part-second.svg';
import { IconButton } from '../Kit/IconButton/IconButton';

export const ContentWrapperT = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 68px;
  /* margin-top: 42px; */

  @media (min-width: 1367px) {
    max-width: 1372px;
  }

  @media (max-width: 1366px) {
    padding: 20px 56px 0;
  }

  @media (max-width: 1000px) {
    max-width: 732px;
    padding: 24px 0 0;
  }

  @media (max-width: 740px) {
    max-width: 100vw;
    padding: 16px 26px 0;
  }

  @media (max-width: 450px) {
    max-width: 100vw;
    padding: 8px 13px 0;
  }
`;

export const TopPanelContentWrapper = styled(ContentWrapperT)`
  background-color: ${({ theme }) => theme.headerBg};
`;

export const TopPanelBlock = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;

  padding-bottom: 29px;
  padding-top: 29px;
  width: 100%;
  /* height: fit-content; // ? */
  height: 100px;

  background-color: ${({ theme }) => theme.headerBg};
  @media (max-width: 1245px) {
    & {
      padding-top: 0;
    }

    height: 95px;
  }

  @media (max-width: 740px) {
    height: 70px;
    padding-bottom: 4px;
  }
`;

export const TopPanelColumn = styled.div`
  display: flex;
  align-items: center;
  column-gap: 32px;
`;

export const MenuList = styled.nav`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 8px;
`;

export const MenuIconStyled = styled(MenuIcon)``;

export const TopPanelHeaderIcon = styled(IconButton)`
  width: 100%;
  &:hover path {
    opacity: 0.6;
  }

  & path {
    fill: url(#orangeGradient);
    stroke: none;
    background: #000;
    overflow: hidden;
  }

  &:focus path {
    opacity: 1;
  }
`;

export const TopPanelLayout = styled.header`
  display: flex;
  justify-content: space-between;
  height: 42px;

  & ${MenuIconStyled} {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & ${MenuList} {
      display: none;
    }
    & ${MenuIconStyled} {
      display: block;
    }
  }
`;

export const LogoPartMain = styled(LogoMain)`
  position: absolute;
`;

export const LogoPartSecond = styled(LogoSecond)`
  position: absolute;
  right: 96px;
  z-index: -1;
  transition: right 0.2s;
`;

export const LogoLink = styled.a`
  overflow: hidden;
  width: 142px;
  height: 100%;
  position: relative;

  & .mainPart,
  & .secondPart {
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  & .mainPart {
    width: 72px;
    left: 0;
    cursor: pointer;
  }

  & .secondPart {
    width: 114px;
    right: 0;
    clip-path: path(${'"M 120 -3 L 121 42 L -7 42 C 14 41 27 21 13 7 C 14 5 11 1 -12 0 L 120 0 Z"'});
  }

  @media (min-width: 1000px) {
    &:hover {
      ${LogoPartSecond} {
        right: 0;
      }
    }
  }

  @media (max-width: 1000px) {
    & {
      width: 72px;
    }
  }
`;

export const RightColumn = styled(TopPanelColumn)`
  column-gap: 16px;
`;

export const NotificationCount = styled.div`
  position: absolute;
  background-color: #fff;
  top: 0px;
  right: 5px;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotificationCountText = styled.div`
  font-family: var(--inter);
  font-size: 10px;
  font-weight: 700;
`;
