import React from 'react';
import ContentLoader from 'react-content-loader';
import useMediaQuery from '../../lib/useMediaQuery';
import { backgroundColor, foregroundColor } from './config';

function SliderSkeleton() {
  const isTablet = useMediaQuery('(max-width: 740px)');
  return (
    <ContentLoader speed={2} width="100%" height={isTablet ? 458 : 326} backgroundColor={backgroundColor} foregroundColor={foregroundColor}>
      <rect x="0" y="0" rx="0" ry="0" width="100%" height={isTablet ? 458 : 326} />
    </ContentLoader>
  );
}

export default SliderSkeleton;
