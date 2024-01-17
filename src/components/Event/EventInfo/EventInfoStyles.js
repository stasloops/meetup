import styled from 'styled-components';
import { Button } from '../../Kit/Button/Button';

export const EventButtonLine = styled.div`
  height: 1px;
  width: inherit;
  margin-left: -16px;
  background-color: ${({ theme }) => theme.bg};
`;

export const EventInfoButtonsBlock = styled.div`
  display: flex;

  align-items: ${(props) => (props.openEvent ? 'center' : '')};
  margin-top: ${(props) => (props.openEvent ? '0px' : '16px')};
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  gap: ${({ horizontal }) => (horizontal ? '32.24px' : '12px')};
  margin-left: ${(props) => (props.eventStyle ? '8px' : 'none')};

  @media (max-width: 1024px) {
    margin-left: ${(props) => (props.eventStyle ? '16px' : 'none')};
  }
`;

export const EventInfoAboutBlock = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: inherit;
  gap: 16px;
  margin: 0 16px;
`;

export const AdvWrapper = styled.div`
  max-height: 155px;
  min-height: 155px;

  overflow: hidden;

  display: flex;
  justify-content: center;
  background-color: #f3f3f3;

  svg {
    height: 100%;
  }
`;

export const EventImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const EventInfoWrapper = styled.div`
  min-width: 304px;
  max-width: 304px;
  width: fit-content;
  height: fit-content;

  // padding-bottom: 15px;

  display: flex;
  flex-direction: column;

  gap: 16px;

  justify-content: flex-start;
  background-color: ${({ theme }) => theme.contentBg};

  @media (max-width: 1000px) {
    & {
      width: 100%;
      max-width: 220px;
      min-width: 220px;
      align-items: flex-start;
      justify-content: space-between;
    }

    & ${Button} {
      width: 100%;
      max-width: 87%;
    }

    & ${AdvWrapper} {
      max-width: 100%;
      width: 348px;
    }

    & ${EventInfoButtonsBlock} {
      width: 100%;
      justify-content: flex-end;
    }

    &:after {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    & ${Button} {
      max-width: 188px;
    }
  }

  @media (max-width: ${({ theme }) => theme.minDesktop}) {
    min-width: 220px;
    max-width: 220px;
  }

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      max-width: 100%;
      min-width: 288px;
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
    }

    & ${EventInfoButtonsBlock} {
      width: 100%;
      flex-direction: column;
    }

    & ${Button} {
      width: 100%;
    }
  }
`;

export const EventInfoSocialButtonsBlock = styled.div`
  height: 16px;
  display: flex;
  column-gap: 16px;
  width: fit-content;
  justify-content: center;
  position: relative;
`;

export const EventInfoSocialButtonsBlock2 = styled.div`
  display: flex;
  column-gap: 16px;
  width: 100%;
  background-color: #f2f2f2;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: space-beetwen;
  position: relative;
`;

export const EventInfoSharingWrapper = styled.div`
  position: absolute;
  left: -16px;
  bottom: 0;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    left: ${(props) => (props.shareWindow ? '-249px' : '')};
  }

  @media (max-width: 292px) {
    left: ${(props) => (props.shareWindow ? '-150px' : '')};
    bottom: 60px;
  }
`;
