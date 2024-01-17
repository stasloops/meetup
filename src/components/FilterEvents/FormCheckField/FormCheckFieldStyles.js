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
  background: ${({ theme }) => theme.orangeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-left: 8px;
  cursor: pointer;
  font-family: var(--roboto);
  font-weight: 300;
  opacity: ${(props) => (props.isChecked ? 1 : 0.75)};
`;

export const Count = styled(Label)`
  background: ${({ theme }) => theme.orangeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: var(--roboto);
  font-weight: 300;
  opacity: ${(props) => (props.isChecked ? 1 : 0.6)};
`;
