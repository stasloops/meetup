import styled from 'styled-components';
import { Button } from '../Kit/Button/Button';
import { ContentWrapper } from '../../styles/blocks/ConentWrapper';

export const SliderContentWrapper = styled(ContentWrapper)`
  padding-right: 0;
  padding-top: 0;

  @media (max-width: ${({ theme }) => theme.tabletWidthDesktop}) {
    max-width: 100vw;
    padding: 24px 32px 0;
  }

  @media (max-width: 450px) {
    max-width: 100vw;
    padding: 16px 13px 0;
  }
`;

export const AboutSlider = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  width: 100%;
  height: fit-content;

  @media (max-width: ${({ theme }) => theme.tabletWidthDesktop}) {
    & {
      flex-direction: column;
      height: fit-content;
      align-items: start;
    }
  }

  @media (max-width: 450px) {
    padding: 0;
  }
`;

export const SliderPhonePng = styled.div`
  position: absolute;
  transform: translateY(-100px);
  z-index: 1;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 450px) {
    & {
      transform: translateY(-60px);
    }
  }
`;

export const SliderCardPhoneBg = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.backgroundAbout};
  background-size: cover;
  width: 450px;
  height: 70%;
  right: 0;
  z-index: -1;
  @media (max-width: ${({ theme }) => theme.tabletWidthDesktop}) {
    & {
      position: relative;
      width: 400px;
      height: 400px;
      top: 20%;
    }
  }
  @media (max-width: 450px) {
    & {
      width: 340px;
      height: 345px;
    }
  }
`;

export const SliderCardPhone = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  align-items: end;
  z-index: -1;
  right: 0;
  height: 100%;
  width: 50%;
  margin-right: 68px;
  @media (max-width: ${({ theme }) => theme.tabletWidthDesktop}) {
    & {
      align-items: start;
      justify-content: center;
      width: 100%;
      max-height: fit-content;
      position: relative;
    }
  }
`;

export const AboutSliderInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 75px;
  margin-bottom: 53px;
  width: fit-content;
  height: fit-content;
  max-width: 745px;
  @media (max-width: ${({ theme }) => theme.tabletWidthDesktop}) {
    & {
      position: relative;
      padding-top: 64px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      margin-bottom: 23px;
      padding-top: 48px;
    }
  }
`;

export const SliderInfoTitle = styled.span`
  font-family: var(--hoves-500);
  font-weight: 500;
  font-size: 60px;
  background-image: ${({ theme }) => theme.orangeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      font-size: 45px;
    }
  }
`;

export const SliderInfoHeader = styled.span`
  font-family: var(--hoves-500);
  font-weight: 500;
  font-size: 45px;
  padding-bottom: 17px;
  padding-top: 10px;
  color: ${({ theme }) => theme.color};
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      font-size: 30px;
      padding-bottom: 16px;
      padding-top: 8px;
    }
  }
`;

export const SliderInfoBody = styled.span`
  font-family: var(--hoves-400);
  font-weight: 400;
  font-size: 24px;
  padding-bottom: 35px;
  color: ${({ theme }) => theme.color};
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      font-size: 16px;
      padding-bottom: 32px;
    }
  }
`;

export const ButtonAboutSlider = styled(Button)`
  // width: fit-content;
  // padding-left: 64px;
  // padding-right: 64px;
  width: 178px;
  padding: 0px;
  margin-bottom: 126px;
  min-height: 41px;
`;

export const SliderInfoSvgCircle = styled.div`
  position: absolute;
  bottom: 0;
  width: 248px;
  height: 248px;
  margin-left: 55px;
  z-index: -1;
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    & {
      width: 175px;
      height: 175px;
      bottom: 36px;
      left: 8px;
    }
  }
`;

export const AboutLink = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 41px;
  color: ${({ theme }) => theme.white};
  align-items: center;
  text-decoration: none;
  width: 100%;
  text-align: center;
`;
