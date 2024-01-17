'use client';

/* eslint-disable no-nested-ternary */
import { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { SliderWrapper } from './SliderStyles';
import { SliderItem } from './SliderItem';
import { store } from '../../data/store';
import { SliderBarNew } from './SliderBarNew';
import { getCardImagePath } from '../Event/EventCard/imageMatrix';
import SliderSkeleton from '../Skeletons/SliderSkeleton';

export const Slider = observer(() => {
  const promoData = store.pageStore._promoData;

  const processedData = useMemo(
    () =>
      promoData?.map((elem) => {
        const { event, news } = elem || {};
        const item = event || news;
        const { eventType, newsType } = item || {};
        const imageSVG = getCardImagePath(eventType?.name || newsType?.name || null);
        return { ...elem, imageSVG };
      }),
    [JSON.stringify(promoData)],
  );

  const currentProcessedData = processedData ? processedData[store.pageStore._currentSlide] : null

  return (
    <SliderWrapper openSrcSlider={store.pageStore._showOuterPanel === store.pageStore._panelTypes.SEARCH}>
      {processedData ? (
        <>
          <SliderItem
            imageSVG={currentProcessedData?.imageSVG || '/assets/svg/cards/other.svg'}
            slideData={currentProcessedData?.event || currentProcessedData?.news}
            promoImage={currentProcessedData?.promoImage}
          />
          {processedData && processedData.length > 0 && <SliderBarNew slidesData={processedData} />}
        </>
      ) : (
        <SliderSkeleton />
      )}
    </SliderWrapper>
  );
});
