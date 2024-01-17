import styled from 'styled-components';

const SwitchLayout = styled.div`
  width: 22px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color};
  display: flex;
  align-items: center;
  padding-left: ${({ value }) => (value ? '2px' : '12px')};
  transition: all 0.25s ease-in-out;
  cursor: pointer;
`;

const SwitchDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 50%;
`;

export function Switch({ value, onChange }) {
  return (
    <SwitchLayout value={value} onClick={() => onChange(!value)}>
      <SwitchDot />
    </SwitchLayout>
  );
}
