import { useState } from 'react';
import Image from 'next/image';
import { EventInfoAboutBlock, EventInfoWrapper } from './EventInfoStyles';
import { InfoLabel, InfoLabelDate } from './InfoLabel/InfoLabel';
import { getCardImagePath } from '../EventCard/imageMatrix';
import { EventsInfoSocialButtons } from '../EventsInfoSocialButtons/EventsInfoSocialButtons';
import { EventCardImageWrapper } from '../EventCard/EventCardStyles';

export function EventInfo({ eventStyle, event }) {
  const eventFormatBoth = event?.eventFormat?.name === 'both';
  const eventOnline = event?.eventFormat?.name === 'online' ? 'Онлайн' : 'Офлайн';
  const eventFormat = eventFormatBoth ? 'Онлайн/Офлайн' : eventOnline;
  const isFreeEvent = event?.eventPayment?.base === 0 || event?.eventPayment === null;
  const endAddress =
    event?.eventLocation?.eventPlatform === null
      ? `${event?.eventLocation?.eventGeolocation.city}`
      : `${event?.eventLocation?.eventGeolocation.city}, ${event?.eventLocation?.eventPlatform?.title}`;

  const [imgLoading, setImgLoading] = useState(true);

  function formatDate(dateString) {
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
      timeZone: 'GMT',
      timeZoneName: 'short',
    };
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', options).replace('UTC', 'GMT+3');
  }

  function shiftTimeByHours(dateString, hours) {
    if (!dateString) {
      return;
    }
    const date = new Date(dateString);
    date.setHours(date.getHours() + hours);
    return date?.toISOString();
  }

  function daysUntilDate(dateStr) {
    const targetDate = new Date(dateStr);
    const utc3Offset = 3 * 60; // UTC+3 in minutes
    const localOffset = targetDate.getTimezoneOffset();
    const targetDateUtc3 = new Date(targetDate.getTime() + (localOffset + utc3Offset) * 60 * 1000);
    const currentDateUtc3 = new Date(new Date().getTime() + (new Date().getTimezoneOffset() + utc3Offset) * 60 * 1000);
    const timeDifference = targetDateUtc3.getTime() - currentDateUtc3.getTime();
    return Math.ceil(timeDifference / (1000 * 3600 * 24));
  }

  const transformDateToText = (date) => {
    return formatDate(shiftTimeByHours(date || '', 3)).toUpperCase();
  };

  const dateLabelText = () => {
    if ((event?.eventDate && event?.eventDate?.showStart === event?.eventDate?.showEnd) || !event?.eventDate?.showEnd) {
      return transformDateToText(event?.eventDate?.showStart);
    }

    if (event?.eventDate && event?.eventDate?.showStart !== event?.eventDate?.showEnd) {
      return {
        start: transformDateToText(event?.eventDate?.showStart),
        end: transformDateToText(event?.eventDate?.showEnd),
      };
    }

    return transformDateToText(event?.date);
  };

  return (
    <EventInfoWrapper>
      <EventCardImageWrapper imgLoading={imgLoading}>
        {event?.eventImage?.url ? (
          <Image
            src={event?.eventImage?.url}
            width={358}
            height={0}
            alt={event?.eventType?.name}
            priority
            placeholder="empty"
            onLoadStart={() => setImgLoading(true)}
            onLoad={() => setImgLoading(false)}
            style={{ height: '100%' }}
          />
        ) : (
          <Image
            src={getCardImagePath(event?.eventType?.name)}
            width={358}
            height={177}
            alt={event?.eventType?.name}
            priority
            placeholder="empty"
            onLoadStart={() => setImgLoading(true)}
            onLoad={() => setImgLoading(false)}
          />
        )}
      </EventCardImageWrapper>
      <EventInfoAboutBlock>
        <InfoLabelDate
          title="Когда:"
          event={event}
          text={typeof dateLabelText() === 'string' ? dateLabelText() : null}
          start={dateLabelText()?.start}
          end={dateLabelText()?.end}
          daysBeforeStarting={daysUntilDate(event?.eventDate ? event?.eventDate?.showStart : event?.date)}
        />
        {(event?.eventFormat?.name === 'offline' || event?.eventFormat?.name === 'both' || event?.eventLocation?.eventPlatform?.address) && (
          <InfoLabel event={event} title="Где:" text={endAddress} />
        )}
        <InfoLabel title="Стоимость:" text={isFreeEvent ? 'Бесплатно' : 'Платно'} />
        <InfoLabel title="Формат:" text={eventFormat} />
        {event?.eventComplexity && <InfoLabel title="Сложность:" text={event?.eventComplexity?.description || event?.eventComplexity?.name} />}
        <InfoLabel title="Тип события:" text={event?.eventType?.name} />
        <InfoLabel title="Источник:" text={event?.eventSource?.name.toUpperCase()} />
      </EventInfoAboutBlock>
      <EventsInfoSocialButtons eventStyle={eventStyle} event={event} />
    </EventInfoWrapper>
  );
}
