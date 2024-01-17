import styled from 'styled-components';
import { Button } from '../../components/Kit/Button/Button';

export const FetchButton = styled(Button)`
  margin: 16px 0 11px;
  width: 100%;

  @media (max-width: 1000px) {
    & {
      max-width: 732px;
      margin-bottom: 43px;
    }
  }

  @media (max-width: 768px) {
    & {
      margin-bottom: 11px;
    }
  }
`;
