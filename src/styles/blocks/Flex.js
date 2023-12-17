import styled from 'styled-components';

export const RowFlex = styled.span`
  display: flex;
  flex-direction: row;
`;

export const ColFlex = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ColFlexEvent = styled(ColFlex)`
  max-width: 900px;
  background-color: ${({ theme }) => theme.white};

  @media (max-width: 1000px) {
    min-width: 496px;
    max-width: 496px;
  }

  @media (max-width: 555px) {
    min-width: 349px;
    max-width: 349px;
  }
`;
