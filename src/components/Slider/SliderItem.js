import React, { useMemo } from 'react';
import Image from 'next/image';
import {
  CrossBgStyled,
  CrossMdStyled,
  CrossSmStyled,
  SliderAboutWrapper,
  SliderCircle,
  SliderContent,
  SliderContentTittle,
  SliderEventButtonsBlock,
  SliderImage,
  SliderImageWrapper,
  SliderLeftColumn,
  SliderNewsHat,
  SliderRightColumn,
  SliderTopLeftIcon,
} from './SliderStyles';
import { StaticTextBlock } from '../../styles/blocks/Text';
import { EventButtonsBlock } from '../Event/EventButtonsBlock/EventButtonsBlock';
import Circle from '../../data/assets/svg/circle.svg';
import SliderNewsHatSvg from '../../data/assets/svg/slider-news-hat.svg';
import SliderArrowSvg from '../../data/assets/svg/slider-news-crosses.svg';
import CrossMdSvg from '../../data/assets/svg/crossMd.svg';
import CrossSmSvg from '../../data/assets/svg/crossSm.svg';
import CrossBgSvg from '../../data/assets/svg/crossBg.svg';

export function SliderItem({ slideData, imageSVG, promoImage }) {
  const MAX_TITTLE_LENGTH = 58;
  const MAX_TEXT_LENGTH = 160;
  const isNews = !!slideData?.newsType?.name;
  const isSlideData = !!slideData;
  const promoBackground = promoImage?.imageBackground;
  const promoView = promoImage?.imageM;
  const promoPreview = promoImage?.imageS;

  const title = useMemo(() => {
    let tmp = '';
    if (isNews) {
      tmp = slideData.description;
    } else if (slideData?.eventDescription) {
      tmp = slideData?.eventDescription?.full;
    } else {
      tmp = '';
    }
    // eslint-disable-next-line no-useless-escape
    return tmp !== '' ? tmp.replace(/(\<(\/?[^>]+)>)/g, '') : '';
  }, [isNews, slideData]);

  return (
    <SliderContent isNews={isNews} backgroundColorImage={promoBackground}>
      {(promoBackground === undefined || promoBackground === null) && !isNews && (
        <SliderCircle fullCircle={isSlideData && !promoView?.url && !promoPreview?.url}>
          <Circle />
        </SliderCircle>
      )}
      <SliderLeftColumn>
        <SliderAboutWrapper>
          {isSlideData && (
            <SliderContentTittle>
              {slideData.name.length > MAX_TITTLE_LENGTH ? `${slideData.name.slice(0, MAX_TITTLE_LENGTH)}...` : slideData.name}
            </SliderContentTittle>
          )}
          <StaticTextBlock>{title.length > MAX_TEXT_LENGTH ? `${title.slice(0, MAX_TEXT_LENGTH)}...` : title}</StaticTextBlock>

          <SliderEventButtonsBlock>
            {isSlideData && <EventButtonsBlock horizontal hideLike openEvent event={slideData} isNews={isNews} />}
          </SliderEventButtonsBlock>
        </SliderAboutWrapper>
        {isNews ?
          <>
            <SliderTopLeftIcon>
              <SliderArrowSvg />
            </SliderTopLeftIcon>
          </>
          : null}
      </SliderLeftColumn>
      <SliderRightColumn isNews={isNews}>
        {!isNews ? (
          <>
            <CrossMdStyled>
              <CrossMdSvg />
            </CrossMdStyled>
            <CrossSmStyled>
              <CrossSmSvg />
            </CrossSmStyled>
            <CrossBgStyled>
              <CrossBgSvg />
            </CrossBgStyled>
            <CrossBgStyled>
              <CrossBgSvg />
            </CrossBgStyled>
            <SliderNewsHat>
              <SliderNewsHatSvg />
            </SliderNewsHat>
          </>
        ) : (<>
          <SliderNewsHat>
            <SliderNewsHatSvg />
          </SliderNewsHat>
        </>)}
        <SliderImageWrapper>
          {isSlideData && promoView?.url && <SliderImage src={promoView?.url} />}
          {isSlideData && !promoView?.url && (
            <SliderImageWrapper>
              {/* <IllustrationSvg /> */}
              <Image
                src={imageSVG}
                alt="прочее"
                width={709}
                height={326}
                priority
                placeholder="empty"
                style={{ height: '120%', overflowY: 'none' }}
              />
            </SliderImageWrapper>
          )}
        </SliderImageWrapper>
      </SliderRightColumn>
    </SliderContent>
  );
}
