import styled from 'styled-components';
import { H4, NormalText, NormalTextBlock } from '../../../styles/blocks/Text';

export const StyledFormCheckField = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: default;
  align-items: flex-start;

  & + & {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  cursor: default;
  align-items: center;
`;

export const Label = styled(H4)`
  margin-left: 8px;
`;

export const Count = styled(NormalTextBlock)`
  margin-left: 8px;
  opacity: 0.6;
`;

export const TooltipWrapper = styled.div`
  width: 100%;
`;
export const Tooltip = styled.div`
  ${NormalText};

  line-height: 19px;
  padding-top: 12px;
  color: ${({ theme }) => theme.color};
  opacity: 0.5;
`;
