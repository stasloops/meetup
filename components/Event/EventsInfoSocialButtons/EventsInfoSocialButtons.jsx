import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { IconButton, IconButtonEvent } from '../../kit/IconButton/IconButton';
import { EventInfoSharingWrapper, EventInfoSocialButtonsBlock2 } from '../EventInfo/EventInfoStyles';
import ShareIcon from '../../../data/assets/svg/share-icon.svg';
import { withClickOutside } from '../../../helpers/hocs/withClickOutside';
import { EventSharing } from '../EventSharing/EventSharing';

export function EventsInfoSocialButtons({ eventStyle, event, openEvent }) {
  const [openSharing, setOpenSharing] = useState(false);
  const EventSharingHOC = withClickOutside(EventSharing);
  const sharingButtonRef = useRef();
  const router = useRouter();
  //   const target = openEvent ? `/events/${event.id}` : event?.link;

  return (
    <EventInfoSocialButtonsBlock2>
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
        {/* {!hideLike && !eventStyle && (
          <IconButton active>
            44
            <LikeIcon />
          </IconButton>
        )} */}
      </>
    </EventInfoSocialButtonsBlock2>
  );
}
