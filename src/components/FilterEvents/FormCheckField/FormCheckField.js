'use client';

import { forwardRef } from 'react';
import { CheckBox } from '../../Kit/CheckBox/CheckBox';
import { StyledFormCheckField, Label, Count } from './FormCheckFieldStyles';

export const FormCheckField = forwardRef(({ label, count, ...rest }, ref) => {
  if (!count) return null;

  return (
    <StyledFormCheckField>
      <CheckBox {...rest} ref={ref} />
      <Label isChecked={rest.value} onClick={() => rest.onChange(!rest.value)}>
        {label}
      </Label>
      <Count isChecked={rest.value}>{count}</Count>
    </StyledFormCheckField>
  );
});

FormCheckField.displayName = 'FormCheckField';
