import styled from 'styled-components';
import { RowFlex } from '../../styles/blocks/Flex';
import { darkTheme } from '../../styles/theme';

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 32px;

  height: fit-content;
  display: flex;
  align-items: flex-start;

  @media (max-width: 830px) {
    margin-top: 84px;
  }

  @media (max-width: 700px) {
    margin-top: ${({ openSrcSlider }) => (openSrcSlider ? '132px' : '79px')};
  }
`;

export const SliderBarWrapper = styled.div`
  position: absolute;
  max-width: 496px;
  height: 68px;
  right: 24px;
  bottom: 28px;
  display: flex;
  align-items: center;
  /* background-color: ${darkTheme.overlay}; */
  background-color: ${({ theme }) => theme.overlay};
  border-radius: 4px;
  z-index: 1;

  @media (max-width: 1184px) {
    right: 24px;
    bottom: 16px;
  }

  @media (max-width: 830px) {
    top: -84px;
    right: 8px;
    left: 8px;
    bottom: unset;
    margin: auto;
  }

  @media (max-width: 450px) {
    //height: 44px;
    height: 54px;
    top: -62px;
  }
`;

export const SliderBarItems = styled.div`
  column-gap: 8px;
  display: flex;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  padding: 4px 6px;
  margin: 0 10px;

  @media (hover: hover) {
    overflow-x: hidden;
  }

  @media (max-width: 400px) {
    padding: 0;
    margin: 0;
    height: 48px;
  }
`;

export const SliderLeftColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100%;
  width: 527px;
  padding: 32px;
  z-index: 1;

  @media (max-width: 1184px) {
    width: 50%;
  }

  @media (max-width: 1000px) {
    padding: 16px 16px;
  }

  @media (max-width: 830px) {
    width: 100%;
    height: fit-content;
  }
`;

export const SliderRightColumn = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, isNews }) => (isNews ? 'none' : theme.sliderBg)};
  z-index: 1;
  overflow: hidden;

  @media (max-width: 1184px) {
    width: 50%;
    background: none;
  }

  @media (max-width: 830px) {
    width: 100%;
    height: fit-content;
    padding: 16px 16px;
  }
`;

export const SliderEventTags = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 8px;
  min-height: 30px;
`;

export const SliderCircle = styled.div`
  z-index: 10;

  position: absolute;
  width: 375px;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 185px;
  margin: auto;

  @media (max-width: 1184px) {
    right: 0;
  }

  @media (max-width: 830px) {
    width: 100%;
    height: auto;
    bottom: 0;
    top: unset;
    margin: 0 auto;

    & svg {
      height: 240px;
    }
  }
`;

export const CrossMdStyled = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;

  bottom: 295px;
  right: 469px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1184px) {
    display: none;
  }
`;

export const SliderSliceCircle = styled.div`
  position: absolute;

  right: 128px;
  top: 16px;
  bottom: 15px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1184px) {
    display: none;
  }

  @media (max-width: 830px) {
    top: 0;
  }
`;

export const SliderNewsCrosses = styled.div`
  position: absolute;
  width: 453px;
  //width: 100%;
  overflow-y: hidden;
  height: 246px;
  top: 0;
  left: 0;
`;

export const SliderNewsHat = styled.div`
  position: absolute;
  width: 139px;
  height: 304px;
  top: 0;
  right: 0;

  @media (max-width: 1184px) {
    display: none;
  }
`;

export const SliderContent = styled(RowFlex)`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 326px;
  overflow-x: visible;
  overflow-y: hidden;
  background: ${({ theme, isNews, backgroundColorImage }) =>
    // eslint-disable-next-line no-nested-ternary
    backgroundColorImage ? `url(${backgroundColorImage})` : isNews ? '#5D5FEF' : theme.sliderBg};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 830px) {
    flex-direction: column;
    height: fit-content;
  }

  @media (max-width: 740px) {
    min-height: 458px;
  }
`;


export const SliderTopLeftIcon = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 0;
  left: 0;

`


export const SliderContentTittle = styled.div`
  font-family: var(--noto-sans);
  font-weight: 500;
  font-size: 24px;
  line-height: 32.69px;
  color: #fff;

  margin-bottom: 16px;
  height: 66px;

  @media (max-width: 1000px) {
    margin-bottom: 8px;
    height: fit-content;
  }

  @media (max-width: 500px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const SliderAboutWrapper = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const SliderEventButtonsBlock = styled.div`
  position: relative;
  z-index: 2;
  width: 209px;
  height: 42px;
  margin-top: 32px;
  margin-bottom: 3px;
`;

// const ProgressKeyframes = keyframes`
//   0% {
//     width: 0;
//   }
//   100% {
//     width: 100%;
//   }
// `;

// const progressAnimation = css`
//   8s linear ${ProgressKeyframes};
// `;

export const SliderImageWrapper = styled.div`
  position: relative;

  & path[fill='#E3E6FF'] {
    display: none;
  }

  @media (max-width: 1184px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 161px;
    position: absolute;
    top: 32px;
    right: 16px;
  }

  @media (max-width: 830px) {
    width: 100%;
    position: relative;
    top: unset;
    bottom: unset;
    left: unset;
    right: unset;
  }
`;

export const SliderImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const SliderSvg = styled.div`
  width: 100%;
  height: 100%;
`;

export const SideBarImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const SideBarSvg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const SliderArrowBar = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  height: 16px;
  margin: auto 0;
  cursor: pointer;
  background: ${({ theme }) => theme.sliderArrowsBg};
  z-index: 1;
  border-radius: 1px;
  display: flex;
  justify-content: center;
  align-items: center;

  & path {
    fill: ${({ theme }) => (theme.iconColor !== '#FFFFFF' ? 'url(#orangeGradient)' : theme.iconColor)};
  }
`;

export const SliderArrowPrev = styled(SliderArrowBar)`
  left: -8px;
`;

export const SliderArrowNext = styled(SliderArrowBar)`
  transform: rotate(180deg);
  right: -8px;
`;

export const SBIImageWrapper = styled.div`
  flex-direction: column;

  overflow: hidden;
  width: 110px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  border-radius: 1px;
  flex-shrink: 0;

  & + & {
    margin-left: 8px;
  }

  & svg {
    transform: scale(0.5);
  }
  ${({ current }) => (current ? 'box-shadow: 0 0 8px rgba(255, 90, 152, 1);' : '')};

  @media (max-width: 450px) {
    width: 80px;
    height: 44px;
  }
`;

export const SliderBox = styled.div`
  overflow: hidden;
  height: 72px;
  display: flex;
  flex-direction: column;
  ${({ current }) => (current ? 'box-shadow: 0 0 8px rgba(255, 90, 152, 1);' : '')};

  user-select: none;
  cursor: pointer;
  border-radius: 1px;
  flex-shrink: 0;
  & + & {
    margin-left: 8px;
  }
  & svg {
    transform: scale(0.5);
  }
  @media (max-width: 450px) {
    width: 80px;
    height: 44px;
  }
`;

export const ImageBox = styled.div`
  cursor: pointer;
  flex-shrink: 0;
  width: 110px;
  user-select: none;
  border-radius: 1px;

  ${({ current }) => (current ? 'box-shadow: 0 0 8px rgba(255, 90, 152, 1);' : '')};

  @media (max-width: 450px) {
    width: 80px;
  }
`;

export const SliderProgressList = styled(RowFlex)`
  width: 100%;
  column-gap: 8px;
`;

export const SliderProgressItem = styled.div`
  height: 6px;
  width: ${({ progress }) => `${progress}%`};

  &:after {
    content: '';
  }
  &:before {
    content: '';
    position: absolute;
    height: 6px;
    /* background: ${({ theme }) => theme.orangeGradient}; */
  }

  height: 6px;
  background: ${({ theme, current }) => (current ? theme.orangeGradient : 'none')};
  /* animation: ${({ current }) => (current ? progressAnimation : 'none')}; */
`;

export const DefaultImage = styled.div`
  position: absolute;
  top: -158px;
  right: -224px;

  @media (max-width: 1184px) {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 161px;
    position: absolute;
    top: 32px;
    right: 16px;
  }

  @media (max-width: 830px) {
    width: 100%;
    position: relative;
    top: unset;
    bottom: unset;
    left: unset;
    right: unset;
  }
`;

export const CrossSmStyled = styled.div`
  position: absolute;
  bottom: 99px;
  width: 12px;
  height: 12px;
  right: 595px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const CrossBgStyled = styled.div`
  position: absolute;
  top: 55px;
  width: 14px;
  height: 14px;
  right: 783px;

  @media (max-width: 1000px) {
    display: none;
  }
`;
