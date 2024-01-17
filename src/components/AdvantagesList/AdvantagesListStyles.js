import styled from 'styled-components';
import { ContentWrapper } from '../../styles/blocks/ConentWrapper';

export const AdvantagesContentWrapper = styled(ContentWrapper)`
  padding-top: 0;

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      padding: 0 13px;
    }
  }
`;

export const AdvantagesListWrapper = styled.div`
  position: relative;
  height: fit-content;
  width: 100%;
  padding: 110px 0 110px 0;

  @media (max-width: ${({ theme }) => theme.tabletWidth}) {
    & {
      padding-bottom: 64px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      padding-top: 64px;
    }
  }
`;

export const AdvantagesListWrapperSvg = styled.div`
  position: absolute;
  z-index: -1;
  width: 779px;
  height: 702px;
  max-height: 100%;
  right: 0;
  bottom: 0;

  @media (max-width: ${({ theme }) => theme.tabletWidthDesktop}) {
    & {
      display: flex;
      align-items: end;
      height: 541px;
      width: 541px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      width: 364px;
    }
  }

  @media (max-width: 500px) {
    & path {
      transform: translateX(220px);
    }
  }
`;

export const AdvantagesListInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      gap: 32px;
    }
  }
`;

export const AdvantagesListInfoTitle = styled.span`
  font-family: var(--hoves-500);
  font-weight: 500;
  font-size: 32px;
  background-image: ${({ theme }) => theme.orangeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      font-size: 24px;
    }
  }
`;

export const ListInfoCardsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: fit-content;
  width: 100%;
  column-gap: 18px;
  @media (max-width: ${({ theme }) => theme.tabletWidth}) {
    & {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 8px;
      column-gap: 8px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      grid-template-columns: 1fr;
      row-gap: 16px;
    }
  }
`;

export const ListInfoCardItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 462px;
  width: fit-content;
  gap: 8px;
  padding: 32px;
  background-color: ${({ theme }) => theme.contentBg};
  @media (max-width: ${({ theme }) => theme.tabletWidth}) {
    & {
      grid-column-start: ${(props) => (props.view === '03' ? '1' : 'auto')};
      grid-column-end: ${(props) => (props.view === '03' ? '3' : 'auto')};
      min-height: ${(props) => (props.view === '03' ? 'fit-content' : 'auto')};
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      grid-column-start: initial;
      grid-column-end: initial;
      height: fit-content;
      min-height: fit-content;
    }
  }
`;

export const CardItemNumber = styled(AdvantagesListInfoTitle)`
  font-size: 60px;
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      font-size: 45px;
    }
  }
`;

export const CardItemBodyText = styled.span`
  font-family: var(--inter);
  font-weight: 400;
  font-size: 24px;
  color: #828282;
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      font-size: 16px;
    }
  }
`;
