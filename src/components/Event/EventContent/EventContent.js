'use client';

import styled from 'styled-components';
import { StaticH1, StaticNormalTextBlock } from '../../../styles/blocks/Text';
import { EventPrice } from '../EventPrice/EventPrice';
import { EventMap } from '../EventMapLocation/EventMap';
import { EventPageOrganization, EventPageOrganizationIcon } from './EventContentStyle';

const EventContentWrapper = styled.article`
  row-gap: 12px;
  width: fit-content;

  ${StaticH1} {
    display: block;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  ${EventPageOrganization} + ${StaticH1} {
    margin-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.minDesktop}) {
    & {
      max-width: 100%;
    }
  }
`;

export function EventContent({ event, eventStyle, content }) {
  // eslint-disable-next-line global-require

  return (
    <EventContentWrapper>
      {event?.eventOrganizer && (
        <EventPageOrganization>
          <EventPageOrganizationIcon url={event?.eventOrganizer?.image} />
          {/* <EventCardOrganization onClick={handleSelectByOrganise}>
                {event?.eventOrganizer?.image && <EventCardOrganizationIcon url={event?.eventOrganizer?.image} />}
                {event?.eventOrganizer?.name}

              </EventCardOrganization> */}
          {event?.eventOrganizer?.name.toString()}
        </EventPageOrganization>
      )}
      <StaticH1 eventStyle={eventStyle}>{event?.name}</StaticH1>
      <StaticNormalTextBlock eventStyle={eventStyle} style={{ wordWrap: 'break-word' }}>
        {content}
      </StaticNormalTextBlock>
      <EventPrice
        eventStyle={eventStyle}
        event={event}
        lowPrice={event?.eventPayment?.low}
        highPrice={event?.eventPayment?.high}
        price={event?.eventPayment && event?.payment !== 0 && Object?.entries(event?.eventPayment)}
      />
      <div id="yn_map">{event?.eventLocation?.eventGeolocation?.id && <EventMap event={event} />}</div>
    </EventContentWrapper>
  );
}
