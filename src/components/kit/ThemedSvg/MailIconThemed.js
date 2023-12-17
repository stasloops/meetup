import styled from 'styled-components';
import MailIcon from '../../../data/assets/svg/mail.svg';

export const MailIconThemed = styled(MailIcon)`
  path {
    fill: ${({ theme }) => theme.color};
  }
`;
