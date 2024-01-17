import React, { FC } from 'react';
import InfiniteLoader from 'react-infinite-scroll-component';
import { EventGrid } from '../../../styles/blocks/EventGrid';
import { EventCard } from '../EventCard/EventCard';
import { FetchButton } from '../../../styles/blocks/FetchButton';
import { store } from '../../../data/store';
import { EventFeedback } from '../EventFeedback/EventFeedback';
import useMediaQuery from '../../../lib/useMediaQuery';
import DateIcon from '../../../data/assets/svg/date.svg';
import { EventListCategory, EventListCategoryBox, EventListCategoryIcon, EventListCategoryTitle } from '../../../styles/blocks/FilterBlock';

interface EventsListProps {
  events: any[];
  moreButton?: boolean;
  categoryTitle?: string;
  fetchNextPage: () => void;
}
const EventsList: FC<EventsListProps> = ({ events, categoryTitle, moreButton = false, fetchNextPage }) => {
  const mobileS = useMediaQuery('(max-width: 768px)');
  const storeEvents: any = store?.eventsStore?._events;

  return (
    <InfiniteLoader
      style={{ marginLeft: '-5px', marginTop: '16px' }}
      dataLength={storeEvents.length}
      next={() => fetchNextPage()}
      hasMore={store.eventsStore.hasMore}
      loader={<br />}
    >
      <EventListCategoryBox>
        <EventListCategory>
          <EventListCategoryIcon>
            <DateIcon />
          </EventListCategoryIcon>
          <EventListCategoryTitle>{categoryTitle}</EventListCategoryTitle>
        </EventListCategory>
      </EventListCategoryBox>
      <EventGrid>
        {events?.map((event) => <EventCard event={event} key={event.id} />)}

        {!mobileS && <EventFeedback feedbackMobile />}
        {moreButton && store.eventsStore._fetchConfig.skip + store.eventsStore._fetchConfig.take <= store.eventsStore._count ? (
          <FetchButton
            // style={{
            //   //@ts-ignore
            //   visibility:

            //       ? ''
            //       : 'hidden',
            // }}
            // backgroundColor
            onClick={() => store.eventsStore.fetchEventsNextPage()}
          >
            Загрузить еще
          </FetchButton>
        ) : null}
      </EventGrid>
    </InfiniteLoader>
  );
};

export default EventsList;
