import styled from 'styled-components';
import { NormalTextBlock } from '../../../styles/blocks/Text';
import { darkTheme } from '../../../styles/theme';

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 100%;
  height: fit-content;
`;

export const TextAddContainer = styled.div`
  padding: 5px 0px 5px 9px;
  width: 100%;
  background-color: ${darkTheme.bg};
`;

export const TextAdd = styled(NormalTextBlock)`
  color: ${({ theme }) => theme.white};
  font-size: 400;
`;
