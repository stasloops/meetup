import { Input } from '../Input/Input';

export function PhoneInput() {
  const normalizePhone = (value) => {
    let resultValue = '+7 ';

    const number = value.replace(/\D/g, '');
    if (!number || !number.startsWith('7')) return resultValue;

    if (number.length > 1) {
      resultValue += `(${number.substring(1, 4)}`;
    }
    if (number.length > 4) {
      resultValue += `) ${number.substring(4, 7)}`;
    }
    if (number.length > 7) {
      resultValue += ` ${number.substring(7, 9)}`;
    }
    if (number.length > 9) {
      resultValue += ` ${number.substring(9, 11)}`;
    }

    return resultValue;
  };

  const onInputFocus = (value) => {
    if (!value) return '+7 ';
    return value;
  };

  return (
    <Input
      maxlength={18}
      type="tel"
      onChange={(e) => {
        e.target.value = normalizePhone(e.target.value);
      }}
      onFocus={(e) => {
        e.target.value = onInputFocus(e.target.value);
      }}
    />
  );
}
