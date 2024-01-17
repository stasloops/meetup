'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { SBIImageWrapper, SideBarImage, SideBarSvg, ImageBox, SliderProgressItem } from './SliderStyles';
import { store } from '../../data/store';

export const SliderBarItem = React.memo(
  observer(({ imgSrc, current, setCurrentSlide, eventType, imageSVG }) => {
    useEffect(() => {
      let interval = null;

      if (!current) {
        return clearInterval(interval);
      }

      interval = setInterval(() => {
        store.pageStore.incrementSliderPromoProgress(1);
      }, 8000 / 100);
      return () => {
        clearInterval(interval);
      };
    }, [current]);

    return (
      <ImageBox
        aria-hidden="true"
        onClick={() => {
          setCurrentSlide();
        }}
        current={current}
        className={current ? 'current' : ''}
      >
        <SBIImageWrapper>
          {imgSrc && <SideBarImage src={imgSrc} />}
          {!imgSrc && (
            <SideBarSvg>
              <Image src={imageSVG} width={110} height={60} alt={eventType} />
            </SideBarSvg>
          )}
        </SBIImageWrapper>
        <SliderProgressItem progress={store.pageStore._sliderPromoProgress} current={current} />
      </ImageBox>
    );
  }),
);
