import styled from 'styled-components';
import { Button } from '../../components/Kit/Button/Button';

export const FilterWrapper = styled.div`
  width: 302px;
  padding: 24px 0;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  row-gap: 8px;

  ${Button} {
    width: 100%;
    background: ${({ theme }) => theme.bgOpacity};
  }

  &.open {
    bottom: -44px;
  }

  @media (max-width: 1000px) {
    width: 358px;
    & ${Button} {
      width: 358px;
    }
  }

  @media (max-width: 768px) {
    z-index: 3;
  }
`;
