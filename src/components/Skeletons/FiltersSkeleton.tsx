import React from 'react';
import ContentLoader from 'react-content-loader';
import { backgroundColor, foregroundColor } from './config';

function FiltersSkeleton() {
  return (
    <ContentLoader speed={2} width="100%" height={800} backgroundColor={backgroundColor} foregroundColor={foregroundColor}>
      <rect x="0" y="14" rx="0" ry="0" width="110" height="24" />
      <rect x="0" y="54" rx="0" ry="0" width="100%" height="44" />
      <rect x="0" y="114" rx="0" ry="0" width="100%" height="44" />
      <rect x="0" y="172" rx="0" ry="0" width="100%" height="640" />
    </ContentLoader>
  );
}

export default FiltersSkeleton;
