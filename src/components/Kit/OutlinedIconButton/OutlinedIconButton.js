import styled from 'styled-components';
import { OutlinedButton } from '../OutlinedButton/OutlinedButton';

export const OutlinedIconButton = styled(OutlinedButton)`
  background-color: transparent;
  position: relative;
  min-width: 288px;

  path {
    fill: ${({ theme }) => theme.color};
  }

  &:hover {
    background: ${({ theme }) => theme.orangeGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & svg {
    fill: ${({ theme, active }) => (active ? 'url(#orangeGradient)' : theme.color)};
    margin-right: 10px;
  }

  &:hover path {
    fill: url(#orangeGradient);
  }

  &:active path {
    opacity: 0.8;
  }
`;
