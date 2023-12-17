import React from 'react';
import styled from 'styled-components';
import { NormalTextBlock } from '../../../styles/blocks/Text';
import { linkList } from './utils/share-config';

const EventSharingWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 48px;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  box-shadow: 22px 22px 30px rgba(50, 52, 75, 0.34);
  background-color: ${({ theme }) => theme.cardBg};
`;

const EventSharingLink = styled.a`
  padding: 4px 8px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  cursor: pointer;
  ${NormalTextBlock} {
    color: ${({ theme }) => theme.color};
    white-space: nowrap;
  }

  &:hover ${NormalTextBlock} {
    text-decoration: underline;
  }
`;

export const EventSharing = React.forwardRef(({ href, onClickCallback }, ref) => {
  return (
    <EventSharingWrapper ref={ref}>
      {linkList.map((link) => (
        <EventSharingLink
          key={link.title}
          onClick={() => {
            link.action(href);
            if (onClickCallback) onClickCallback();
          }}
        >
          <link.icon />
          <NormalTextBlock>{link.title}</NormalTextBlock>
        </EventSharingLink>
      ))}
    </EventSharingWrapper>
  );
});

EventSharing.displayName = 'EventSharing';
