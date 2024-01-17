'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAnimationShow } from './hooks/useAnimationShow';

export const AnimateStyled = styled.div`
  animation: 0.5s linear 0s ${(props) => (props.show ? props.inAnimation : props.outAnimation)};
`;

export const AnimateInOut = React.forwardRef(({ inAnimation, outAnimation, show, children, className, style, ...attrs }, ref) => {
  const [internalShow, setInternalShow, firstRender] = useAnimationShow(show);
  const [animationEnd, setAnimationEnd] = useState(false);

  const handleAnimationEnd = () => {
    setInternalShow(show);
    setAnimationEnd(show);
  };

  useEffect(() => {
    if (show) setInternalShow(true);
  }, [show, setInternalShow]);

  return internalShow ? (
    <AnimateStyled
      outAnimation={firstRender ? null : outAnimation}
      show={show}
      ref={ref}
      style={style}
      inAnimation={firstRender || animationEnd ? null : inAnimation}
      onAnimationEnd={handleAnimationEnd}
      className={className}
      {...attrs}
    >
      {children}
    </AnimateStyled>
  ) : null;
});

AnimateInOut.displayName = 'AnimateInOut';
