import { forwardRef } from 'react';
import { CheckBox } from '../../Kit/CheckBox/CheckBox';
import { StyledFormCheckField, Label, Count } from './FormCheckFieldStyles';

export const FormCheckField = forwardRef(({ label, count, ...rest }, ref) => {
  return (
    <StyledFormCheckField>
      <CheckBox {...rest} ref={ref} />
      <Label>{label} v </Label>
      {count && <Count>{count}</Count>}
    </StyledFormCheckField>
  );
});

FormCheckField.displayName = 'FormCheckField';
