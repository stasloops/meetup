"use client"

import styled from 'styled-components';
import { useMemo } from 'react';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  LiText,
  NormalTextBlock,
  UL,
  StaticH1,
  StaticNormalTextBlock,
} from '../../../styles/blocks/Text';
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

const elementMatrix = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  p: NormalTextBlock,
  ul: UL,
  li: LiText,
  br: styled.br``,
  a: styled.a``,
};

const getChildren = (node) => {
  return node.children.map((subNode, index) => {
    if (!subNode.name && subNode.type === 'text') return subNode.data;
    // eslint-disable-next-line react/no-array-index-key
    if (subNode.name === 'br') return <elementMatrix.br key={index} />;
    const Component = elementMatrix[subNode.name] || elementMatrix.p;
    const ComponentStyle = styled.div`
      color: black;
    `;
    const { style, ...attrs } = subNode.attribs || {};
    return (
      // eslint-disable-next-line react/no-array-index-key
      <ComponentStyle key={index} as={subNode.name} {...attrs}>
        {!!node?.children?.length && getChildren(subNode)}
      </ComponentStyle>
    );
  });
};

export function EventContent({ event, eventStyle }) {
  // eslint-disable-next-line global-require
  const { parseDocument } = require('htmlparser2');

  const content = useMemo(() => {
    if (!event?.eventDescription?.full) return '';
    const dom = parseDocument(event?.eventDescription.full);
    return getChildren(dom);
  }, [event?.eventDescription?.full, parseDocument]);

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
        price={event?.eventPayment && event?.payment !== 0 && Object?.entries(event?.eventPayment)}
      />
      {event?.eventLocation?.eventGeolocation?.id && <EventMap event={event} />}
    </EventContentWrapper>
  );
}
