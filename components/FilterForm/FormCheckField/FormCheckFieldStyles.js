import styled from 'styled-components';
import { NormalTextBlock } from '../../../styles/blocks/Text';

export const StyledFormCheckField = styled.span`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  cursor: default;

  & + & {
    margin-top: 12px;
  }
`;

export const Label = styled(NormalTextBlock)`
  margin-left: 8px;
`;

export const Count = styled(Label)`
  opacity: 0.6;
`;
