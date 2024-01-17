import styled from 'styled-components';

export const PageContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    & {
      flex-wrap: wrap;
    }
  }
`;
