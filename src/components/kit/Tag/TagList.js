import styled from 'styled-components';

export const TagList = styled.span`
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  column-gap: 4px;
  row-gap: 2px;
  flex-wrap: wrap;
`;
