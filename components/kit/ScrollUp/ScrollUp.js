import React from 'react';
import ScrollToTop from 'react-scroll-up';
import styled from 'styled-components';
import ScrollUpIconLight from '../../../data/assets/svg/scroll-up-light.svg';
import { lightTheme } from '../../../styles/theme';

const ScrollUpTrace = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  right: '0',
  width: '46px',
};

const ScrollUpWrapper = styled.div`
  & > div {
    padding-bottom: 32px;

    @media (max-width: 1000px) {
      & {
        padding-bottom: 64px;
      }
    }

    @media (max-width: 768px) {
      & {
        padding-bottom: 32px;
      }
    }
  }
`;

export const ScrollUpButton = styled.span`
  position: sticky;
  position: -webkit-sticky;
  top: 95vh;
  width: 46px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    & {
      top: 85vh;
    }
  }
`;

export const ScrollIcon = styled(ScrollUpIconLight)`
  :hover {
    background: ${lightTheme.cardFooter};
    border-radius: 1px;
    backdrop-filter: blur(10px);
  }

  &:active path {
    fill: ${({ theme }) => theme.white};
  }
`;

export function ScrollUp() {
  return (
    <ScrollUpWrapper>
      <ScrollToTop showUnder={1000} style={ScrollUpTrace}>
        <ScrollUpButton>
          <ScrollIcon />
        </ScrollUpButton>
      </ScrollToTop>
    </ScrollUpWrapper>
  );
}
