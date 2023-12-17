"use client"

import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import {
  EventBodyWrapper,
  EventCardBody,
  EventCardDateText,
  EventCardFooter,
  EventCardFormatText,
  EventCardImageWrapper,
  EventCardOrganization,
  EventCardOrganizationIcon,
  EventCardPriceText,
  EventCardTag,
  EventCardTagList,
  EventCardTitle,
  EventCardWrapper,
} from './EventCardStyles';
import ShareIcon from '../../../data/assets/svg/share-icon.svg';
import { IconButton } from '../../kit/IconButton/IconButton';
import { EventSharing } from '../EventSharing/EventSharing';
import { withClickOutside } from '../../../helpers/hocs/withClickOutside';
import { ColFlex } from '../../../styles/blocks/Flex';
import { getCardImagePath } from './imageMatrix';
import { themeMatrix } from '../../../helpers/themeMatrix';
import { store } from '../../../data/store';
import { ReplaySubject } from 'rxjs';

export function EventCard({ event }) {
  const isFreeEvent = event.eventPayment?.base === 0 || event.eventPayment === null;
  const inOffline = event?.eventFormat?.name === 'offline';
  const inBothFormat = event?.eventFormat?.name === 'both';
  const [openSharing, setOpenSharing] = useState(false);
  const EventSharingHOC = withClickOutside(EventSharing);
  const sharingButtonRef = useRef();
  const maxLengthText = 83;
  const [imgLoading, setImgLoading] = useState(true);

  const linkRef = useRef(null);

  const handleSelectByOrganise = (e) => {
    e.stopPropagation();
    // store.eventsStore.setFetchConfig({ organizer: event?.eventOrganizer?.name });
    // store.eventsStore.toggleInCardOrganizerSelect(true);
  };

  const handleSelectCard = () => {
    window.open(`/events/${event.id}`, '_blank');
  };

  function formatDate(dateString) {
    const options = { weekday: 'long', day: 'numeric', month: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false, timeZone: 'GMT', timeZoneName: 'short' };
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', options).replace('UTC', 'GMT+3')

  }

  function shiftTimeByHours(dateString, hours) {
    const date = new Date(dateString);
    date.setHours(date.getHours() + hours);
    return date.toISOString();
  }
  return (
    <EventCardWrapper>
      <EventBodyWrapper onClick={handleSelectCard} role="button">
        <a ref={linkRef} href={`/events/${event.id}`} target="_blank" rel="noreferrer" style={{ display: 'none' }}>
          fd
        </a>
        <EventCardTagList>
          {!event?.eventThemeTags?.length && <EventCardTag>{themeMatrix.other}</EventCardTag>}
          {event?.eventThemeTags?.map(({ eventTheme: { id, description, name } }) => {
            const isActive = name.toLowerCase() === 'selected';

            return (
              <EventCardTag key={id} active={isActive}>
                {isActive ? 'Интересное' : description}
              </EventCardTag>
            );
          })}
        </EventCardTagList>
        <EventCardImageWrapper imgLoading={imgLoading} onClick={() => console.log(event.eventType?.name)}>
          {event.eventImage?.url ? (
            <Image
              src={event.eventImage?.url}
              width={358}
              height={0}
              alt={event.eventType?.name}
              priority
              placeholder="blur"
              blurDataURL="/assets/svg/logo-part-main.svg"
              onLoadStart={() => setImgLoading(true)}
              onLoadingComplete={() => setImgLoading(false)}
              style={{ height: '100%' }}
            />
          ) : (
            <Image
              src={getCardImagePath(event.eventType?.name)}
              width={358}
              height={177}
              alt={event.eventType?.name}
              priority
              placeholder="blur"
              blurDataURL="/assets/svg/logo-part-main.svg"
              onLoadStart={() => setImgLoading(true)}
              onLoadingComplete={() => setImgLoading(false)}
            />
          )}
        </EventCardImageWrapper>
        <EventCardBody>
          <ColFlex>
            <EventCardDateText>
            {formatDate(shiftTimeByHours(event.date, 3))}
              {/* {dayjs(event.date)?.utcOffset('+03:00')?.format('dddd, DD.MM @ HH:mm')} GMT+3 */}
            </EventCardDateText>
            <EventCardTitle>
              {event.name.length > maxLengthText ? `${event.name.slice(0, maxLengthText)}...` : event.name}
            </EventCardTitle>
          </ColFlex>
          <ColFlex>
            {event?.eventOrganizer && (
              <EventCardOrganization onClick={handleSelectByOrganise}>
                {event?.eventOrganizer?.image && <EventCardOrganizationIcon url={event?.eventOrganizer?.image} />}
                {event?.eventOrganizer?.name}
              </EventCardOrganization>
            )}
            <EventCardFormatText>
              {inBothFormat && 'Онлайн/Офлайн'}
              {!inBothFormat && (inOffline ? 'Офлайн' : 'Онлайн')}{' '}
              <EventCardPriceText free={isFreeEvent}>{isFreeEvent ? 'Бесплатно' : 'Платно'}</EventCardPriceText>
            </EventCardFormatText>
          </ColFlex>
        </EventCardBody>
      </EventBodyWrapper>
      <EventCardFooter>
        <IconButton ref={sharingButtonRef} onClick={() => setOpenSharing((e) => !e)}>
          <ShareIcon />
        </IconButton>
        {/* <IconButton active>
          44
          <LikeIcon />
        </IconButton> */}
      </EventCardFooter>
      {openSharing && (
        <EventSharingHOC
          href={`${window.location.origin}/events/${event.id}`}
          exclude={[sharingButtonRef.current]}
          onClickOutside={() => setOpenSharing(false)}
          onClickCallback={() => setOpenSharing(false)}
        />
      )}
    </EventCardWrapper>
  );
}
