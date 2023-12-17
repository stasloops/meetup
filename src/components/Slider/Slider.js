"use client"

/* eslint-disable no-nested-ternary */
import { useEffect, useMemo, useState } from 'react';
import { SliderWrapper } from './SliderStyles';
import { SliderItem } from './SliderItem';
import { store } from '../../data/store';
import { SliderBarNew } from './SliderBarNew';
import { getCardImagePath } from '../Event/EventCard/imageMatrix';

export function Slider({ promoData }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const processedData = useMemo(
    () =>
      promoData?.map((elem) => {
        const { event, news } = elem || {};
        const item = event || news;
        const { eventType, newsType } = item || {};
        const imageSVG = getCardImagePath(eventType?.name || newsType?.name || null);
        return { ...elem, imageSVG };
      }),
    [promoData],
  );
  useEffect(() => {}, [processedData]);

  const changeSlide = (direction = 1) => {
    setCurrentSlide((prev) => (prev + direction + processedData.length) % processedData.length);
  };

  if (!processedData || !processedData.length) {
    return null;
  }

  const currentProcessedData = processedData[currentSlide % processedData.length];

  return (
    <SliderWrapper openSrcSlider={store.pageStore._showOuterPanel === store.pageStore._panelTypes.SEARCH}>
      <SliderItem
        imageSVG={currentProcessedData?.promoImage?.imageM || '/assets/svg/cards/other.svg'}
        slideData={currentProcessedData?.event || currentProcessedData?.news}
        promoImage={currentProcessedData?.promoImage}
      />
      <SliderBarNew
        slidesData={processedData}
        changeSlide={changeSlide}
        currSlide={{ currentSlide, setCurrentSlide }}
      />
    </SliderWrapper>
  );
}
