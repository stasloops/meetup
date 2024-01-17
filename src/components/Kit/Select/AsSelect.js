/* eslint-disable */
import styled from 'styled-components';
import { components } from 'react-select';
import ReactSelect from 'react-select/async';
import { forwardRef } from 'react';
import { NormalText } from '../../../styles/blocks/Text';

export const StyledSelect = styled(ReactSelect)`
  border: 0px solid ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.controlBg};
  width: 100%;
  font-family: var(--noto-sans);
  font-weight: 400;

  & .Select__control {
    background: none;
    border: none;
    border-radius: unset;
    cursor: pointer;
    width: 100%;
    color: red;

    &--is-focused {
      box-shadow: unset;
    }
    &--menu-is-open {
      & .Select__indicator {
        transform: rotate(180deg);
      }
    }
  }

  & .Select__value-container {
    padding: unset;
  }
  & .Select__indicator-separator {
    display: none;
  }

  & .Select__single-value,
  & .Select__input-container,
  & .Select__placeholder {
    ${NormalText};

    height: 44px;
    margin: 0;
    padding: 12px 33px 12px 16px;
    background: ${({ theme }) => theme.orangeGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: normal;
  }

  & .Select__indicator,
  & .Select__indicator:hover {
    // background: ${({ theme }) => theme.orangeGradient};
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    // background-clip: text;
  }

  & .Select__indicator:hover {
    opacity: 0.7;
  }

  & .Select__menu {
    margin: 0;
    padding: 12px 4px 12px 0;
    border-radius: unset;
    background: unset;
    box-shadow: unset;
    outline: 0px solid ${({ theme }) => theme.color};
    width: count(100%);
    position: static;
  }

  & .Select__menu-list {
    padding: 0;
    max-height: 215px;

    &::-webkit-scrollbar {
      width: 1px;
      background-color: unset;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.color};
    }
  }

  & .Select__option {
    ${NormalText};
    cursor: pointer;

    background: ${({ theme }) => theme.orangeGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 500;

    &.Select__option--is-focused,
    &.Select__option--is-selected {
      // background: unset;
      font-weight: 700;
    }

    &.Select__option--is-selected,
    &:hover {
      // text-decoration: underline;
    }
  }
`;

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ArrowGradient">
          <stop offset="0%" stopColor="#EF6129" />
          <stop offset="25%" stopColor="#F06032" />
          <stop offset="50%" stopColor="#F85D6A" />
          <stop offset="75%" stopColor="#FD5B8C" />
          <stop offset="100%" stopColor="#FF5A99" />
        </linearGradient>
      </defs>
      <path
        // fill="url(#ArrowGradient)"
        fill="#FD5B8C"
        d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
      ></path>
    </svg>
  </components.DropdownIndicator>
);

const ClearIndicator = (props) => (
  <components.ClearIndicator {...props}>
    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path
        fill="#FD5B8C"
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </components.ClearIndicator>
);

const NoOptionsMessage = (props) => (
  <components.NoOptionsMessage {...props}>
    <span>Нет данных</span>
  </components.NoOptionsMessage>
);

const LoadingMessage = (props) => (
  <components.LoadingMessage {...props}>
    <span>Идет загрузка</span>
  </components.LoadingMessage>
);

export const AsyncSelect = forwardRef((props, ref) => {
  return (
    <StyledSelect
      {...props}
      isClearable
      cacheOptions
      defaultOptions
      ref={ref}
      classNamePrefix="Select"
      components={{ DropdownIndicator, ClearIndicator, NoOptionsMessage, LoadingMessage }}
    />
  );
});

AsyncSelect.displayName = 'Select';
