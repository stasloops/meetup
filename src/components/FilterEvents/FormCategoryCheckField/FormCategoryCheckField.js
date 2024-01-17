import { forwardRef } from 'react';
import { CheckBox } from '../../Kit/CheckBox/CheckBox';
import { StyledFormCheckField, Label, Count, Tooltip, TooltipWrapper, ContentWrapper } from './FormCategoryCheckFieldStyles';

export const FormCategoryCheckField = forwardRef(({ label, count, description, values, ...rest }, ref) => {
  return (
    <StyledFormCheckField>
      <ContentWrapper>
        <CheckBox {...rest} defaultValue={values} ref={ref} />
        <Label isChecked={rest.value} onClick={() => rest.onChange(!rest.value)}>
          {label}{' '}
        </Label>
        {count && <Count isChecked={rest.value}>{count}</Count>}
      </ContentWrapper>
      <TooltipWrapper>
        <Tooltip>{description}</Tooltip>
      </TooltipWrapper>
    </StyledFormCheckField>
  );
});

FormCategoryCheckField.displayName = 'FormCategoryCheckField';
