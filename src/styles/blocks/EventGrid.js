import styled from 'styled-components';

export const EventGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 5px;
  gap: 16px;
  width: 100%;

  max-width: 907px;

  margin-top: 24px;
`;

export const EventPageGrid = styled(EventGrid)`
  max-width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(4, 290px);

  height: 100%;
  width: 100%;
  margin-bottom: 32px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 290px);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 290px);
  }

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    min-width: 343px;
    max-width: 343px;

    grid-template-columns: repeat(1, 343px);
  }
`;
