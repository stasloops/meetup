import React from 'react';
import { EventGrid } from '../../styles/blocks/EventGrid';
import EventCardSkeleton from './EventCardSkeleton';

function EventsListSkeleton() {
  return (
    <EventGrid style={{ paddingLeft: '0px', paddingRight: '5px', marginTop: '28px' }}>
      {Array.from({ length: 12 }).map((i) => (
        <EventCardSkeleton />
      ))}
    </EventGrid>
  );
}

export default EventsListSkeleton;
