import styled from 'styled-components';
import { MenuList } from '../../components/TopPanel/TopPanelStyles';
import { blackHover, Button, stdHover } from '../../components/kit/Button/Button';

export const FilterBlock = styled.div`
  width: 100%;
  display: flex;

  flex-direction: column;
  row-gap: 17px;

  overflow: hidden;

  align-items: center;
  justify-content: space-between;

  column-gap: 24px;

  /* position: sticky;
  top: 100px;
  z-index: 5;

  background-color: ${({ theme }) => theme.bg};
  padding-bottom: 12px; */

  /* & > ${Button} {
    display: none;
  } */

  & ${MenuList} > * {
    &:after {
      display: flex;
    }
  }

  /* @media (max-width: 1245px) {
    top: 95px;
  } */

  @media (max-width: 769px) {
    & {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 32px;
      padding-bottom: 8px;
    }

    & ${Button} {
      display: flex;
      // width: 100%;
    }
  }

  /* @media (max-width: 740px) {
    top: 87px;
  } */
`;

export const NotFoundFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 84px 188px;
  row-gap: 16px;

  @media (max-width: 1450px) {
    & {
      padding: 84px 182px;
    }
  }
  @media (max-width: 1334px) {
    & {
      padding: 84px 122px;
    }
  }
  @media (max-width: 1000px) {
    & {
      padding: ${(props) => (props.notFound ? '48px' : '')};
    }
  }
  @media (max-width: 768px) {
    & {
      padding: 84px 88px 214px;
    }
  }
  @media (max-width: 513px) {
    padding: ${(props) => (props.notFound ? '' : '84px 11px 100px')};
    & {
      row-gap: 32px;
    }
  }

  @media (max-width: 450px) {
    & {
      padding: ${(props) => (props.notFound ? '' : '19px 31px 100px')};
    }
  }
`;

export const ResetButton = styled(Button)`
  width: 234px;
  height: 42px;
  flex-grow: 0;
  margin-top: 16px;

  @media (max-width: 1000px) {
    & {
      margin-top: 32px;
    }
  }

  @media (max-width: 450px) {
    & {
      margin-top: 50px;
    }
  }
`;

export const NotFoundLink = styled(Button)`
  width: 234px;
  height: 42px;
  flex-grow: 0;
  margin-top: 16px;

  font:
    14px Inter,
    serif;
  line-height: 17px;
  color: ${({ theme, black }) => (black ? theme.color : theme.white)};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${({ theme, black }) => (black ? theme.bgPromo : theme.orangeGradient)};
  box-shadow: ${({ black }) => (!black ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none')};

  column-gap: 8px;

  path {
    fill: ${({ theme }) => theme.color};
  }

  &:hover > div {
    ${({ black }) => black && blackHover}
  }

  &:hover {
    ${({ black }) => !black && stdHover}
  }

  &:hover path {
    fill: url(#orangeGradient);
  }

  &:active {
    opacity: 0.8;
  }

  @media (max-width: 450px) {
    & {
      margin-top: 50px;
    }
  }
`;

export const NotFoundText = styled.span`
  font-family:
    TT Hoves,
    sans-serif;
  font-weight: 500;
  font-size: 32px;
  width: 100%;
  background-image: ${({ theme }) => theme.orangeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 311px;
  height: 100%;
  max-height: 44px;
  max-width: 286px;
`;

export const AboutNotFound = styled.span`
  font-family:
    TT Hoves,
    sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: ${({ theme }) => theme.textTag};
  width: 100%;
  max-width: 612px;
  height: 100%;
  max-height: 33px;
  text-align: center;
  @media (max-width: 1250px) {
    & {
      max-height: 60px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      font-size: 24px;
    }
  }
  @media (max-width: 450px) {
    & {
      max-width: 214px;
    }
  }
`;

export const FilterFeedback = styled.div`
  display: ${(props) => (props.feedbackMobile ? 'none' : 'flex')};
  flex-direction: column;
  width: 302px;

  &.open {
    @media (max-width: 1000px) {
      & {
        display: none;
      }
    }
  }
  @media (max-width: 740px) {
    & {
      display: ${(props) => (props.feedbackMobile ? 'flex' : 'none')};
    }
  }

  @media (max-width: 1000px) {
    & {
      width: 358px;
    }
  }

  @media (max-width: 768px) {
    & {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 302px;
      bottom: 0;
      width: 349px;
    }
  }
`;

export const FilterBox = styled.div`
  display: none;
  column-gap: 8px;

  position: sticky;
  position: -webkit-sticky;
  top: 100px;
  z-index: 5;

  background-color: ${({ theme }) => theme.bg};
  padding-bottom: 12px;

  @media (max-width: 1245px) {
    top: 95px;
  }

  @media (max-width: 1000px) {
    & {
      display: flex;
    }
  }
  @media (max-width: 769px) {
    & {
      width: 100%;
    }
  }
  @media (max-width: 740px) {
    & {
      flex-direction: column;
    }

    top: 70px;
  }
`;

export const SearchButton = styled(Button)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  width: 597px;
  height: 36px;
  padding: 0;
  display: flex;
  justify-content: start;
  padding-left: 32px;
  background: ${({ theme }) => theme.filterBg};
  color: ${({ theme }) => theme.textTag};

  @media (max-width: 740px) {
    & {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const DropDown = styled(SearchButton)`
  width: 127px;
  height: 36px;
  background: ${({ theme }) => theme.filterBg};
  box-shadow: none;

  :hover {
    background: ${({ theme }) => theme.filterBg};
  }

  @media (max-width: 769px) {
    & {
      width: 127px;
    }
  }
  @media (max-width: 740px) {
    & {
      width: 100%;
    }
  }
`;
