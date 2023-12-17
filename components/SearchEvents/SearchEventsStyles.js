import styled from 'styled-components';
import { H1 } from '../../styles/blocks/Text';
import { Button } from '../kit/Button/Button';

export const SearchEventsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0;
    align-items: end;
    padding-right: 28px;
  }

  @media (max-width: 526px) {
    align-items: center;
    padding-top: 77px;
    padding-right: 30px;
  }
  @media (max-width: 400px) {
    padding-right: 15px;
  }
`;

export const SearchEventsTitle = styled(H1)`
  margin-bottom: 28px;
`;

export const SearchEventsButton = styled(Button)`
  width: 107px;
  height: 36px;
  flex-grow: 0;

  :hover {
    opacity: 1;
  }

  @media (max-width: 675px) {
    & {
      width: 80px;
    }
  }
`;

export const SearchEventsControls = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;

  & ${SearchEventsButton} {
    min-width: 80px;

    @media (max-width: 768px) {
      width: 92px;
    }
    @media (max-width: 375px) {
      width: 80px;
    }
  }
`;
