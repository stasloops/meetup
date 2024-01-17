import styled from 'styled-components';

export const FilterSectionHeader = styled.div`
  font-family: var(--inter);
  font-style: normal;
  weight: 400;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.filterHintColor};
  opacity: ${({ theme }) => theme.filterHintOpacity};
`;
