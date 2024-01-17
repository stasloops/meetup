import styled from 'styled-components';
import { MenuList } from '../../components/TopPanel/TopPanelStyles';
import { blackHover, Button, stdHover } from '../../components/Kit/Button/Button';

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

export const FilterIcon = styled.span`
  display: inline-block;
  height: 16px;
  stroke-width: 2;

  fill: #fff;
  color: #fff;
  stroke: #fff;
`;

export const EventsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const EventListCategoryBox = styled.div`
  padding-left: 5px;

  @media (max-width: 1330px) {
    padding-right: 12px;
  }

  @media (max-width: 1000px) {
    padding-right: 0;
  }
`;
export const EventListCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${({ theme }) => (!theme.isLight ? 'rgba(255, 255, 255, 0.49)' : '#000')};
`;

export const EventListCategoryTitle = styled.h5`
  color: ${({ theme }) => theme.color};
  font-family: var(--inter);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;

export const EventListCategoryIcon = styled.span`
  display: inline-block;
  stroke: currentColor;
  fill: currentColor;
  color: ${({ theme }) => theme.color};
  stroke: ${({ theme }) => theme.color};
`;

export const NotFoundLink = styled(Button)`
  width: 234px;
  height: 42px;
  flex-grow: 0;
  margin-top: 16px;

  /* font:
    14px Inter,
    serif; */
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
  font-family: var(--hoves-500);
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
  font-family: var(--hoves-400);
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
  width: 100%;
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
    margin-top: 15px;
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
  font-family: var(--inter);
  line-height: 17px;
  width: 597px;
  height: 36px;
  padding: 0;
  display: flex;
  justify-content: start;
  padding-left: 32px;
  background: ${({ theme }) => theme.filterBg};
  color: ${({ theme }) => theme.textTag};
  border: 1px solid #ff5a9953;

  @media (max-width: 740px) {
    & {
      padding-left: 0;
      width: 100%;
      justify-content: center;
      margin-top: 11px;

      &:first-child {
        margin-top: 0;
      }
    }
  }
`;

export const DropDown = styled(SearchButton)`
  width: 127px;
  height: 36px;
  background: ${({ theme }) => theme.filterBg};
  box-shadow: none;
  background: var(--Linear, linear-gradient(63deg, #ef6129 12.75%, #f06032 16.6%, #f85d6a 43.57%, #fd5b8c 63.6%, #ff5a99 75.16%));
  padding-left: 0;
  display: flex;
  justify-content: center;
  color: #fff;

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
