import React from 'react';
import ContentLoader from 'react-content-loader';
import { backgroundColor, foregroundColor } from './config';

function FilterBoxSkeleton() {
  return (
    <ContentLoader speed={2} width="100%" height={83} backgroundColor={backgroundColor} foregroundColor={foregroundColor}>
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="36" />
      <rect x="0" y="48" rx="0" ry="0" width="100%" height="36" />
    </ContentLoader>
  );
}

export default FilterBoxSkeleton;
