'use client';

import styled from 'styled-components';
import { useMemo, useRef, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { SliderArrowNext, SliderArrowPrev, SliderBarWrapper } from './SliderStyles';
import LeftArrow from '../../data/assets/svg/left-arrow.svg';
import { SliderBarItem } from './SliderBarItem';
import { store } from '../../data/store';

export const SliderBarItems = styled.div`
  column-gap: 8px;
  display: flex;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  padding: 4px 6px;
  margin: 0px 10px;

  @media (hover: hover) {
    overflow-x: hidden;
  }

  @media (max-width: 400px) {
    padding: 0;
    margin: 0;
    height: 48px;
  }
`;

export const SliderBarNew = observer(({ slidesData }) => {
  const slider = useRef();
  const LEFT_SLIDER_PADDING = 8;

  const viewedSize = 4;

  const dataLength = slidesData.length;
  const usedSlides = useMemo(() => {
    let arr = Array.from(slidesData);

    const keys = Object.keys(slidesData).map((v) => Number(v));
    const k = [];
    const codes = [];
    const cur = store.pageStore._currentSlide;
    const pos = cur % dataLength;

    if (dataLength > viewedSize) {
      if (pos === 0) {
        const a1 = arr.slice(dataLength - 1, dataLength);
        const a2 = arr.slice(pos, pos + viewedSize);
        const a3 = pos + viewedSize < dataLength ? arr.slice(pos + viewedSize, pos + viewedSize + 1) : arr.slice(0, 1);
        arr = [...a1, ...a2, ...a3];

        const k1 = keys.slice(dataLength - 1, dataLength);
        const k2 = keys.slice(pos, pos + viewedSize);
        const k3 = pos + viewedSize < dataLength ? keys.slice(pos + viewedSize, pos + viewedSize + 1) : keys.slice(0, 1);
        k.push(...k1, ...k2, ...k3);
        codes.push(...k1.map((v) => 900 + v), ...k2.map((v) => 1000 + v), ...k3.map((v) => 1100 + v));
      } else if (pos + viewedSize < dataLength) {
        const a1 = arr.slice(pos - 1, pos);
        const a2 = arr.slice(pos, pos + viewedSize);
        const a3 = arr.slice(pos + viewedSize, pos + viewedSize + 1);
        arr = [...a1, ...a2, ...a3];

        const k1 = keys.slice(pos - 1, pos);
        const k2 = keys.slice(pos, pos + viewedSize);
        const k3 = keys.slice(pos + viewedSize, pos + viewedSize + 1);
        k.push(...k1, ...k2, ...k3);
        codes.push(...k1.map((v) => 900 + v), ...k2.map((v) => 1000 + v), ...k3.map((v) => 1100 + v));
      } else {
        const a1 = arr.slice(pos - 1, pos);
        const a2 = arr.slice(pos, pos + viewedSize);
        const a3 = arr.slice(0, pos + viewedSize + 1 - dataLength);
        arr = [...a1, ...a2, ...a3];

        const k1 = keys.slice(pos - 1, pos);
        const k2 = keys.slice(pos, pos + viewedSize);
        const k3 = keys.slice(0, pos + viewedSize + 1 - dataLength);
        k.push(...k1, ...k2, ...k3);
        codes.push(...k1.map((v) => 900 + v), ...k2.map((v) => 1000 + v), ...k3.map((v) => 1100 + v));
      }
    } else {
      k.push(...keys);
      codes.push(...keys.map((v) => 1000 + v));
    }

    return { data: arr, idx: k, codes };
  }, [store.pageStore._currentSlide, dataLength, slidesData]);

  const decrementCurrentSlide = () => {
    store.pageStore.resetSliderPromoProgress();
    store.pageStore.decrementCurrentSlide();
  };

  const incrementCurrentSlide = () => {
    store.pageStore.resetSliderPromoProgress();
    store.pageStore.incrementCurrentSlide();
  };

  const setCurrentSlide = (slideIdnex) => {
    store.pageStore.resetSliderPromoProgress();
    store.pageStore.setCurrentSlide(slideIdnex);
  };

  const handlePrev = () => {
    decrementCurrentSlide();
  };

  const handleNext = () => {
    incrementCurrentSlide();
  };

  useEffect(() => {
    if (store.pageStore._sliderPromoProgress < 100) {
      return;
    }
    incrementCurrentSlide();
  }, [store.pageStore._sliderPromoProgress]);


  useEffect(() => {
    store.pageStore.setSliderItemsLength(usedSlides.data.length)
  }, [usedSlides.data.length])

  return (
    <SliderBarWrapper>
      <SliderArrowPrev onClick={handlePrev}>
        <LeftArrow />
      </SliderArrowPrev>
      <SliderBarItems ref={slider} padding={LEFT_SLIDER_PADDING}>
        {usedSlides.data.map((elem, index) => {
          const item = elem?.event || elem?.news;

          return (
            <SliderBarItem
              key={usedSlides.idx[index]}
              imageSVG={elem?.promoImage?.imageS || elem?.imageSVG}
              imgSrc={elem?.promoImage?.imageS || null}
              current={store.pageStore._currentSlide % dataLength === usedSlides.idx[index]}
              setCurrentSlide={() => setCurrentSlide(usedSlides.idx[index])}
              eventType={item?.eventType?.name || item?.newsType?.name || null}
            />
          );
        })}
      </SliderBarItems>

      <SliderArrowNext onClick={handleNext}>
        <LeftArrow />
      </SliderArrowNext>
    </SliderBarWrapper>
  );
});
