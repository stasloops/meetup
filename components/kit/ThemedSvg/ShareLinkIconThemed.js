import styled from 'styled-components';
import ShareLinkIcon from '../../../data/assets/svg/share-link.svg';

export const ShareLinkIconThemed = styled(ShareLinkIcon)`
  path {
    fill: ${({ theme }) => theme.color};
  }
`;
