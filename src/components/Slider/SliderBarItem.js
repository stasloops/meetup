import React from 'react';
import Image from 'next/image';
import { SBIImageWrapper, SideBarImage, SideBarSvg, ImageBox, SliderProgressItem } from './SliderStyles';

export function SliderBarItem({ imgSrc, current, setCurrentSlide, eventType, imageSVG }) {
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
      <SliderProgressItem current={current} />
    </ImageBox>
  );
}
