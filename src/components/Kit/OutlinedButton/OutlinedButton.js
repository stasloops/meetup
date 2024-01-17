import styled from 'styled-components';
import { Button } from '../Button/Button';

export const OutlinedButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.color};
  background: transparent;
  :hover {
    border-image-source: ${({ theme }) => theme.orangeGradientInvert};
    background: transparent;
    border-image-slice: 1;
    border-width: 1px;
  }
`;
