import React from 'react';
import ContentLoader from 'react-content-loader';
import useMediaQuery from '../../lib/useMediaQuery';
import { EventCardWrapper } from '../Event/EventCard/EventCardStyles';
import { backgroundColor, foregroundColor } from './config';

function EventCardSkeleton() {
  const tablet = useMediaQuery('(max-width: 1000px)');
  return (
    <EventCardWrapper>
      <ContentLoader
        speed={2}
        width="100%"
        height={400}
        // viewBox="0 0 90% 400"
        backgroundColor={backgroundColor}
        foregroundColor={foregroundColor}
      >
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="177" />
        <rect x="16" y="190" rx="0" ry="0" width="182" height="13" />
        <rect x="16" y="220" rx="0" ry="0" width="220" height="13" />
        <rect x="16" y="240" rx="0" ry="0" width="220" height="13" />
        <rect x="16" y="260" rx="0" ry="0" width="119" height="13" />
        <rect x="16" y="285" rx="0" ry="0" width="32" height="32" />
        <rect x="58" y="294" rx="0" ry="0" width="216" height="13" />
        <rect x="16" y="330" rx="0" ry="0" width="55" height="13" />
        <rect x={tablet ? '79%' : '77%'} y="330" rx="0" ry="0" width="55" height="13" />
        <circle cx="29" cy="94%" r="13" />
        <circle cx="80%" cy="94%" r="13" />
        <circle cx="91%" cy="94%" r="13" />
      </ContentLoader>
    </EventCardWrapper>
  );
}

export default EventCardSkeleton;
