import styled from 'styled-components';

export const IconButton = styled.button`
  height: 16px;
  background-color: transparent;
  padding: 0;
  border: none;

  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;

  display: flex;
  align-items: center;

  cursor: pointer;
  margin: 0;

  column-gap: 8px;

  color: ${({ theme }) => theme.iconColor};

  background: ${({ theme }) => theme.cardText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  & path {
    fill: ${({ theme, active }) => (active ? 'transparent' : theme.iconColor)};
    stroke: ${({ theme, active }) => (active ? theme.textGradient : 'none')};

    background: #000;
    overflow: hidden;
  }

  &:hover path {
    opacity: 0.6;
  }

  &:active path {
    opacity: 0.8;
  }
`;

export const IconButtonEvent = styled(IconButton)`
  & path {
    fill: url(#orangeGradient);
    stroke: none;
  }
`;
