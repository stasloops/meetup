import styled from 'styled-components';
import { MenuLink } from '../Kit/MenuLink/MenuLink';
import { RowFlex } from '../../styles/blocks/Flex';
import { IconButton } from '../Kit/IconButton/IconButton';

export const SideMenuWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SideMenuMain = styled.div`
  padding: 132px 102px 34px;
  height: 100%;
  overflow-y: auto;

  @media (max-width: 440px) {
    & {
      padding: 132px 32px 34px;
    }
  }
`;

export const SideMenuList = styled.nav`
  display: flex;
  align-items: flex-start;

  & + & {
    margin-top: 40px;
  }
`;

export const PrivacyBlock = styled.div`
  display: flex;
  align-items: flex-start;

  flex-direction: column;
`;

export const SideMenuItem = styled(MenuLink)`
  font-size: 24px;
  font-weight: 700;
  display: inline-flex;
  color: ${({ theme }) => theme.white};
  line-height: 33px;
  font-size: 24px;
  background-color: transparent;
  padding: 0;

  & + & {
    margin-top: 20px;
  }

  :hover {
    background-color: transparent;
  }
`;

export const SideMenuLink = styled(MenuLink)`
  font-size: 14px;
  line-height: 20px;
  display: block;
  align-items: flex-start;
  color: #fff;
  margin-top: 10px;
  background: transparent;

  &:first-child {
    margin-top: 0;
  }
`;

export const SideMenuGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DropDownIconContainer = styled.div`
  width: 12px;
  height: 12px;
  transform: ${({ active }) => (active ? 'none' : 'rotate(180deg)')};

  & svg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
`;

export const SideMenuGroupItem = styled.div`
  display: inline-block;
  font-size: 16px;
  font-family: var(--noto-sans);
  line-height: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  padding-right: 24px;
  position: relative;

  & ${DropDownIconContainer} {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
`;

export const SideMenuGroupItemContainer = styled.div`
  margin-top: 10px;
  display: ${({ active }) => (active ? 'inline-block' : 'none')};
`;

export const SideMenuGroupLinks = styled(MenuLink)`
  font-size: 14px;
  line-height: 20px;
  align-items: flex-start;
  color: ${({ theme }) => theme.white};
  background-color: transparent;
  background: unset;

  & + & {
    margin-top: 10px;
  }

  :hover {
    background-color: transparent;
    background: unset;
  }
`;

export const SideMenuFooter = styled.div`
  height: 105px;
  flex-shrink: 0;
  margin-top: 64px;
  margin-left: -3px;
`;

export const SideMenuFooterLinks = styled(RowFlex)`
  align-items: center;

  & ${IconButton} path {
    fill: #ffffff;
  }

  & ${IconButton}:hover path {
    fill: url(#orangeGradient);
  }
`;

export const SideMenuButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;

  & rect {
    fill: url(#orangeGradient);
  }

  &:hover rect {
    stroke: url(#orangeGradient);
    fill: ${({ theme }) => theme.white};
  }

  &:active rect {
    opacity: 0.8;
  }
  &:focus rect {
    fill: url(#orangeGradient);
  }

  width: 26px;
  /* height: 21px; */
  top: 30px;
  left: calc((100vw - (1367px - 23px * 2)) / 2);

  @media (max-width: 1366px) {
    left: 16px;
  }

  @media (max-width: 1000px) {
    position: static;
  }
`;

export const CloseButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  max-width: 22px;
  position: relative;
  top: 64px;
  left: 413px;
  padding: 0;

  @media (max-width: 440px) {
    left: 321px;
  }
`;
