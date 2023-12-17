import styled from 'styled-components';

export const DetailEventBlock = styled.div`
  display: flex;
  column-gap: 32px;
  margin-bottom: 63px;
  margin-top: 32px;

  @media (max-width: 1000px) {
    & {
      margin-top: 9px;
      column-gap: 16px;
    }
  }

  @media (max-width: 738px) {
    & {
      flex-direction: column;
      row-gap: 32px;
    }
  }

  @media (max-width: 1000px) {
    & {
      margin-top: 15px;
    }
  }
`;
