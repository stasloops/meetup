'use client';

import { useState, forwardRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledCheckBox = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 1px solid ${({ theme }) => theme.checkbox};
  border-opacity: 0.75px;

  position: relative;
  cursor: pointer;
  // font-family: 'meetup-icons', serif;
  font-family: var(--inter);

  border-image-source: ${({ theme }) => theme.orangeGradient};
  border-image-slice: 1;
  border-width: 1px;

  &:hover,
  &.checked {
    border-image-source: ${({ theme }) => theme.orangeGradient};
    border-image-slice: 1;
    border-width: 1px;
  }

  &.checked {
    background: ${({ theme }) => theme.orangeGradient};
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
  }

  &:after {
    color: #fff;
    width: 16px;
    height: 16px;
    font-size: 16px;
    text-align: center;
    line-height: 16px;
    margin: auto;
    display: none;
  }

  &.checked:after {
    display: block;
  }

  & > input {
    display: none;
  }
`;

export const CheckBox = forwardRef(({ name, value, onChange, defaultValue, ...rest }, ref) => {
  const [checked, setChecked] = useState(defaultValue || false);

  const onClick = () => {
    setChecked((prev) => {
      if (onChange) {
        onChange(!prev);
      }

      return !prev;
    });
  };

  useEffect(() => {
    setChecked(!!value);
  }, [value]);

  return (
    <StyledCheckBox onClick={onClick} className={checked ? 'checked' : ''}>
      {checked ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      ) : null}
      <input {...rest} type="checkbox" checked={checked} name={name} onChange={(e) => setChecked(e.target.checked)} ref={ref} />
    </StyledCheckBox>
  );
});

CheckBox.displayName = 'CheckBox';
