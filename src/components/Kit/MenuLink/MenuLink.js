'use client';

import styled from 'styled-components';
import React, { useMemo } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { store } from '../../../data/store';
import { darkTheme } from '../../../styles/theme';

const MenuLinkStyled = styled.a`
  font-size: 16px;
  line-height: 28px;
  font-family: var(--inter);
  font-weight: 500;
  background: ${({ theme, active }) => (active ? theme.purple : theme.tagBg)};
  color: ${({ theme, active }) => (active ? theme.white : theme.textTag)};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
  padding: 0 16px;

  @media (max-width: 740px) {
    font-size: 14px;
    line-height: 26px;
    font-weight: 400;
  }

  &:hover {
    /* background: ${darkTheme.purple}; */
    color: ${({ theme }) => theme.white};
  }
`;

export const MenuLink = React.forwardRef(({ children, href, className, eq }, ref) => {
  const router = useRouter();
  const asPath = usePathname();

  return (
    <MenuLinkStyled
      className={className}
      ref={ref}
      active={asPath === href}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
        if (store.pageStore._showOuterPanel) {
          store.pageStore.resetOuterPanel();
        }
      }}
    >
      {children}
    </MenuLinkStyled>
  );
});

MenuLink.displayName = 'MenuLink';
