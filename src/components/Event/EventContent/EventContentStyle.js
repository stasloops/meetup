import styled from 'styled-components';
import { EventCardOrganizationIcon, EventCardOrganizationLogo } from '../EventCard/EventCardStyles';

export const EventPageOrganization = styled(EventCardOrganizationLogo)`
  font-size: 14px;
  color: ${({ theme }) => theme.tagColor};
  border: none;
  margin-top: 13px;
  padding-left: 0px;
`;

export const EventPageOrganizationIcon = styled(EventCardOrganizationIcon)`
  background: no-repeat center/100% url(${(props) => props.url});
  width: 32px;
  height: 32px;
  margin-right: 9px;
`;
