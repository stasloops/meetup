import styled from 'styled-components';
import { ContentWrapper } from '../../styles/blocks/ConentWrapper';
import { darkTheme } from '../../styles/theme';

export const BodyContentWrapper = styled(ContentWrapper)`
  padding-top: 0;

  @media (max-width: 450px) {
    & {
      padding: 0px 13px;
    }
  }
`;

export const BodyFooterContentWrapper = styled(ContentWrapper)`
  padding-top: 0;
  background-image: url('/img/about-social.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 1440px;
  @media (max-width: ${({ theme }) => theme.minDesktopSecond}) {
    & {
      padding: 0px 51px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      padding: 0;
      height: 544px;
    }
  }
`;

export const AboutBodyWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  padding-bottom: 110px;
  background-color: ${({ theme }) => theme.contentBg};
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      padding-bottom: 64px;
    }
  }
`;

export const AboutBodyHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  padding-top: 136px;
  padding-bottom: 74px;
  @media (max-width: ${({ theme }) => theme.minDesktopSecond}) {
    & {
      flex-direction: column;
      gap: 64px;
      padding-top: 110px;
      padding-bottom: 50px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      gap: 49px;
      padding-top: 97px;
    }
  }
`;

export const BodyHeaderTitle = styled.span`
  font-family: var(--hoves-500);
  font-weight: 500;
  font-size: 32px;
  color: #bdbdbd;
  width: 100%;
  max-width: 285px;
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

export const BodyHeaderText = styled.span`
  font-family: var(--hoves-400);
  font-weight: 400;
  font-size: 24px;
  color: ${darkTheme.bg};
  width: 100%;
  max-width: 755px;
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      font-size: 16px;
    }
  }
  @media (max-width: 1240px) {
    & {
      max-width: 600px;
    }
  }
  @media (max-width: 1100px) {
    & {
      max-width: 100%;
    }
  }
`;

export const AboutBodySvg = styled.div`
  position: absolute;
  top: 62px;
  left: 255px;
  min-width: 244px;
  min-height: 265px;
  @media (max-width: ${({ theme }) => theme.maxDesktop}) {
    & {
      left: 200px;
    }
  }
  @media (max-width: ${({ theme }) => theme.minDesktopSecond}) {
    & {
      left: inherit;
      top: 35px;
      right: 139px;
      min-width: 244px;
      max-width: 244px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      min-width: 140px;
      max-width: 140px;
      min-height: 150px;
      max-height: 150px;
      top: 60px;
      left: 170px;
    }
  }
  @media (max-width: 450px) {
    & {
      left: 209px;
    }
  }
`;

export const AboutBodyInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 64px;
  height: fit-content;
  margin-top: 34px;
`;

export const BodyInfoTitle = styled.span`
  font-family: var(--hoves-500);
  font-weight: 500;
  font-size: 32px;
  background-image: ${({ theme }) => theme.orangeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: ${({ theme }) => theme.minDesktopSecond}) {
    & {
      display: none;
    }
  }
`;

export const BodyInfoCardBlock = styled.div`
  display: grid;
  row-gap: 92px;
  column-gap: 92px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.minDesktopSecond}) {
    & {
      grid-template-columns: 1fr;
      row-gap: 83px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      row-gap: 52px;
    }
  }
`;

export const InfoCardItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: fit-content;
  max-width: 300px;
  height: fit-content;

  @media (max-width: ${({ theme }) => theme.minDesktopSecond}) {
    & {
      max-width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      max-width: ${(props) => (props.smallText ? '180px' : '200px')};
    }
  }
`;

export const CardItemTextTitle = styled.span`
  font-family: var(--hoves-500);
  font-weight: 500;
  font-size: 24px;
  color: ${darkTheme.bg};
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      font-size: 16px;
    }
  }
`;

export const CardItemTextBody = styled.span`
  font-family: var(--hoves-400);
  font-weight: 400;
  font-size: 20px;
  color: #828282;
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      font-size: 12px;
    }
  }
`;

export const CardItemImage = styled.div`
  position: relative;
  min-width: 240px;
  min-height: 240px;
  max-height: 240px;
  background-color: ${({ theme }) => theme.contentBgReverse};
  padding: 10px;
  @media (max-width: ${({ theme }) => theme.minDesktopSecond}) {
    & {
      padding: 8px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      min-width: 140px;
      min-height: 140px;
      padding: 6px;
    }
  }
  @media (max-width: 450px) {
    & {
      height: fit-content;
    }
  }
`;

export const InfoCardItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  gap: 32px;

  @media (min-width: 1101px) {
    &:nth-child(3),
    &:nth-child(3) + & {
      ${CardItemImage} {
        order: 1;
      }
      ${InfoCardItemText} {
        order: 2;
      }
    }
  }
  @media (max-width: 1100px) {
    &:nth-child(even) {
      ${CardItemImage} {
        order: 1;
      }
      ${InfoCardItemText} {
        order: 2;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      gap: 8px;
      margin-left: ${(props) => (props.smallText ? '16px' : '0px')};
    }
  }
`;

export const CardItemNumber = styled.span`
  position: absolute;
  top: -20px;
  left: -20px;
  font-family: var(--hoves-500);
  font-weight: 500;
  font-size: 32px;
  background-image: ${({ theme }) => theme.orangeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      font-size: 28px;
      top: -21px;
      left: -17px;
      width: 33px;
      height: 38px;
      align-items: center;
      display: flex;
    }
  }
`;

export const CardItemBlockSvg = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 450px) {
    & {
      width: 128px;
      height: 128px;
    }
  }
`;

export const AboutBodyFooter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 520px;
  justify-content: end;
  padding-bottom: 64px;
  padding-left: 34px;
  @media (max-width: ${({ theme }) => theme.minDesktopSecond}) {
    & {
      padding-bottom: 32px;
      padding-left: 0;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      padding: 0 13px 32px;
    }
  }
`;

export const BodyFooterInfo = styled.div`
  font-family: var(--hoves-500);
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      gap: 16px;
    }
  }
`;

export const BodyFooterInfoTitle = styled.span`
  font-size: 32px;
  color: ${({ theme }) => theme.white};
  @media (max-width: ${({ theme }) => theme.maxMobileWidth}) {
    & {
      font-size: 24px;
    }
  }
`;

export const TitleGradient = styled(BodyFooterInfoTitle)`
  background-image: ${({ theme }) => theme.orangeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const BodyFooterInfoText = styled(BodyFooterInfoTitle)`
  font-size: 24px;
  max-width: 1060px;
  @media (max-width: ${({ theme }) => theme.maxMobileWidth}) {
    & {
      font-size: 16px;
    }
  }
`;
