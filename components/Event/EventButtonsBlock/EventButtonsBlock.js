import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ButtonEventCard } from '../../kit/Button/Button';
import {
  EventInfoButtonsBlock,
  EventInfoSharingWrapper,
  EventInfoSocialButtonsBlock,
  EventButtonLine,
} from '../EventInfo/EventInfoStyles';
import { IconButton, IconButtonEvent } from '../../kit/IconButton/IconButton';
import ShareIcon from '../../../data/assets/svg/share-icon.svg';
import LikeIcon from '../../../data/assets/svg/like-fill.svg';
import { withClickOutside } from '../../../helpers/hocs/withClickOutside';
import { EventSharing } from '../EventSharing/EventSharing';

export function EventButtonsBlock({ eventStyle, horizontal, event, hideSocial, hideLike, openEvent, disableButton }) {
  const [openSharing, setOpenSharing] = useState(false);
  const EventSharingHOC = withClickOutside(EventSharing);
  const sharingButtonRef = useRef();
  const router = useRouter();
  const target = openEvent ? `/events/${event.id}` : event?.link;

  return (
    <EventInfoButtonsBlock openEvent={openEvent} eventStyle={eventStyle} horizontal={horizontal}>
      {!disableButton && (
        <ButtonEventCard openEvent={openEvent} onClick={() => target && window.open(target)}>
          {openEvent ? 'Посмотреть' : 'Принять участие'}
        </ButtonEventCard>
      )}
      {eventStyle && <EventButtonLine />}
      <EventInfoSocialButtonsBlock>
        {openSharing && (
          <EventInfoSharingWrapper shareWindow={router.asPath === '/events'}>
            <EventSharingHOC
              exclude={[sharingButtonRef.current]}
              href={`${window.location.origin}/events/${event.id}`}
              onClickOutside={() => setOpenSharing(false)}
              onClickCallback={() => setOpenSharing(false)}
            />
          </EventInfoSharingWrapper>
        )}
        {!hideSocial && (
          <>
            {eventStyle ? (
              <IconButtonEvent openEvent={openEvent} ref={sharingButtonRef} onClick={() => setOpenSharing((e) => !e)}>
                <ShareIcon />
              </IconButtonEvent>
            ) : (
              <IconButton openEvent={openEvent} ref={sharingButtonRef} onClick={() => setOpenSharing((e) => !e)}>
                <ShareIcon />
              </IconButton>
            )}
            {!hideLike && !eventStyle && (
              <IconButton active>
                44
                <LikeIcon />
              </IconButton>
            )}
          </>
        )}
      </EventInfoSocialButtonsBlock>
    </EventInfoButtonsBlock>
  );
}
