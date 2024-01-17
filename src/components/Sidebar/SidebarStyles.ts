import Link from 'next/link';
import styled from 'styled-components';

export const SidebarPanel = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  max-width: 467px;
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
`;

export const SidebarContainer = styled.div`
  position: relative;
  padding-left: 102px;
  padding-top: 132px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 500px) {
    padding-left: 32px;
  }
`;

export const TopContent = styled.div``;
export const BottomContent = styled.div``;

export const CloseButton = styled.div`
  position: absolute;
  top: 64px;
  right: 32px;
  cursor: pointer;
`;

export const Terms = styled.div`
  margin-top: 27px;
  display: flex;
  flex-direction: column;
`;

export const TermsLink = styled.div`
  color: ${({ theme }) => theme.color};
  font-family: var(--noto-sans);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  opacity: 0.6;
  margin-top: 10px;
  cursor: pointer;

  &:first-child {
    margin-top: 0;
  }
`;

export const SidebarNavs = styled.div``;

export const SidebarNav = styled.div`
  color: #ff5a99;
  font-family: var(--noto-sans);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 20px;
  cursor: pointer;

  &:first-child {
    margin-top: 0;
  }
`;

export const SidebarServiceNavs = styled.div`
  margin-top: 27px;
`;

export const SidebarServiceNavWrapper = styled.div`
  margin-top: 20px;

  &:first-child {
    margin-top: 0;
  }
`;

export const SidebarServiceNav = styled.div`
  display: flex;
  cursor: pointer;
  gap: 12px;
`;

export const SidebarServiceNavTitle = styled.div`
  color: ${({ theme }) => theme.color};
  font-family: var(--noto-sans);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SidebarServiceNavIcon = styled.div<{ isRotate: boolean }>`
  display: inline-block;
  stroke: currentColor;
  fill: currentColor;
  stroke: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.color};
  fill: ${({ theme }) => theme.color};
  transform: ${({ isRotate }: any) => (isRotate ? 'none' : 'rotate(180deg)')};
`;

export const SidebarServiceUnderNav = styled.div`
  color: ${({ theme }) => theme.color};
  font-family: var(--noto-sans);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  margin-top: 12px;
  margin-left: 16px;
`;
