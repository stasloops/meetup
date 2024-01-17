import styled, { css } from 'styled-components';

import SearchOuter from '../../../data/assets/svg/searchOuter.svg';

const InputStyled = styled.input.attrs((props) => ({ type: props.type }))`
  font: 14px var(--inter);
  height: 36px;
  width: 300px;
  font-weight: 300;
  line-height: 20px;
  border: none;
  color: ${({ theme }) => theme.textTag};
  background: transparent;

  padding: ${(props) => (props.inputFilter ? '8px 0px 9px 42px' : '10px 0px 9px 52px')};

  &::placeholder {
    color: ${({ theme }) => theme.textTag};
    opacity: 0.6;
  }

  ${(props) =>
    props.valid &&
    css`
      border-image-source: ${({ theme }) => theme.greenGradient};
      background: transparent;
      border-image-slice: 1;
      border-width: 1px;
      outline: none;
    `}

  &:hover,
  &:focus {
    border-image-source: ${({ theme }) => theme.orangeGradient};
    background: transparent;
    border-image-slice: 1;
    border-width: 1px;
    outline: none;
  }

  @media (max-width: 1040px) {
    width: 280px;
  }
`;

const InputWrapper = styled.div`
  background: ${({ theme }) => theme.searchBg};

  display: flex;
  flex-direction: column;
  width: 300px;
  font: 14px var(--inter);
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  color: ${({ theme }) => theme.red};
  & span {
    margin-top: 7px;
  }

  @media (max-width: 1040px) {
    width: 280px;
  }

  @media (max-width: 675px) {
    & {
      width: 270px;
    }
  }
  @media (max-width: 375px) {
    & {
      width: 265px;
    }
  }
`;

const SearchWrapper = styled.div`
  display: ${(props) => (props.inputFilter ? 'none' : '')};

  position: absolute;
  left: 16px;
  top: 8px;

  & path {
    fill: ${({ theme }) => theme.textTag};
    stroke: none;
  }
`;

export function Input({ inputFilter, type, validationText, hasError, placeholder, valid, ...rest }) {
  return (
    <InputWrapper validationText={validationText}>
      <SearchWrapper inputFilter={inputFilter}>
        <SearchOuter />
      </SearchWrapper>
      <InputStyled type={type} placeholder={placeholder} error={hasError} valid={valid} inputFilter={inputFilter} {...rest} />
      {validationText && <span>{validationText}</span>}
    </InputWrapper>
  );
}
