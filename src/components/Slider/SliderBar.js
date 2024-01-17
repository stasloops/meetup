import { useEffect, useRef } from 'react';
import { SliderArrowNext, SliderArrowPrev, SliderBarItems, SliderBarWrapper } from './SliderStyles';
import { SliderBarItem } from './SliderBarItem';
import LeftArrow from '../../data/assets/svg/left-arrow.svg';

export function SliderBar({ slidesData, changeSlide, currSlide }) {
  const slider = useRef();
  const LEFT_SLIDER_PADDING = 8;
  const NEXT_SLIDE_INTERVAL = 8000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const itemPos = slider.current.querySelector('.current + *')?.offsetLeft || 0;
      const diff = itemPos - slider.current.scrollLeft;
      const SLIDER_WIDTH = slider.current.offsetWidth;

      if (diff >= SLIDER_WIDTH || diff < 0) {
        slider.current.scrollLeft = itemPos - LEFT_SLIDER_PADDING;
      }

      changeSlide(1);
    }, NEXT_SLIDE_INTERVAL);

    return () => clearInterval(intervalId);
  }, [currSlide.currentSlide, changeSlide]);

  const onPrev = () => {
    slider.current.scrollLeft -= slider.current.offsetWidth - LEFT_SLIDER_PADDING;
  };

  const onNext = () => {
    slider.current.scrollLeft += slider.current.offsetWidth - LEFT_SLIDER_PADDING;
  };

  return (
    <SliderBarWrapper>
      <SliderArrowPrev onClick={onPrev}>
        <LeftArrow />
      </SliderArrowPrev>
      <SliderBarItems ref={slider} padding={LEFT_SLIDER_PADDING}>
        {slidesData.map((elem, index) => {
          const item = elem?.event || elem?.news;
          return (
            <SliderBarItem
              key={item?.id}
              imgSrc={item?.eventImage?.url || item?.newsImage?.url || null}
              current={currSlide.currentSlide === index}
              setCurrentSlide={() => currSlide.setCurrentSlide(index)}
              eventType={item?.eventType?.name || item?.newsType?.name || null}
            />
          );
        })}
      </SliderBarItems>
      <SliderArrowNext onClick={onNext}>
        <LeftArrow />
      </SliderArrowNext>
    </SliderBarWrapper>
  );
}
