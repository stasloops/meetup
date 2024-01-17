import styled from 'styled-components';
import { H4, NormalText, NormalTextBlock } from '../../../styles/blocks/Text';

export const StyledFormCheckField = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: default;
  align-items: flex-start;

  & + & {
    margin-top: 17px;
    padding-top: 15px;
    // margin-top: 20px;
    // padding-top: 20px;
    // border-top: 1px solid ${({ theme }) => theme.borderOpacity};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  cursor: default;
  align-items: center;
`;

export const Label = styled(H4)`
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

export const Count = styled(NormalTextBlock)`
  margin-left: 8px;
  opacity: 0.6;
  background: ${({ theme }) => theme.orangeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: var(--roboto);
  font-weight: 300;
  opacity: ${(props) => (props.isChecked ? 1 : 0.6)};
`;

export const TooltipWrapper = styled.div`
  width: 100%;
`;
export const Tooltip = styled.div`
  ${NormalText};
  font-family: var(--inter);
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  margin-left: 26px;

  // line-height: 19px;
  // padding-top: 12px;
  color: ${({ theme }) => theme.filterHintColor};
  opacity: ${({ theme }) => theme.filterHintCategoryOpacity};
`;
