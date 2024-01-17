import styled, { css } from 'styled-components';

export const blackHover = css`
  background: ${({ theme }) => theme.buttonDownloadBlack};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const stdHover = css`
  background: ${({ theme }) => theme.orangeGradientInvert};
`;

export const Button = styled.button`
  cursor: pointer;
  height: 41px;
  width: 184px;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme, black }) => (black ? theme.color : theme.white)};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${({ theme }) => theme.buttonDownload};
  box-shadow: ${({ black }) => (!black ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none')};

  column-gap: 8px;

  path {
    fill: ${({ theme }) => theme.color};
  }

  &:hover {
    background: ${({ theme, black }) => (black ? theme.orangeGradientInvert : theme.blackHover)};
  }

  &:hover path {
    fill: url(#orangeGradient);
  }

  &:active {
    opacity: 0.8;
  }
`;

export const ButtonEventCard = styled.button`
  cursor: pointer;
  height: 41px;
  width: 184px;
  font-family: var(--noto-sans);
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${({ done, theme }) => (done ? theme.greenGradient : theme.orangeGradient)};
  box-shadow: ${({ black }) => (!black ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none')};

  column-gap: 8px;

  path {
    fill: ${({ theme }) => theme.color};
  }

  &:hover {
    background: ${({ theme, black }) => (black ? theme.orangeGradientInvert : theme.blackHover)};
  }

  &:hover path {
    fill: url(#orangeGradient);
  }

  &:active {
    opacity: 0.8;
  }
`;

export const ButtonOnMainPage = styled.button`
  cursor: pointer;
  height: 41px;
  width: 184px;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${({ done, theme }) => (done ? theme.greenGradient : theme.orangeGradient)};
  box-shadow: ${({ black }) => (!black ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none')};

  column-gap: 8px;

  path {
    fill: ${({ theme }) => theme.color};
  }

  &:hover {
    background: ${({ theme }) => theme.orangeGradientInvert};
  }

  &:hover path {
    fill: url(#orangeGradient);
  }

  &:active {
    opacity: 0.8;
  }
`;

export const ButtonErrorPage = styled.button`
  cursor: pointer;
  height: 41px;
  width: 184px;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${({ done, theme }) => (done ? theme.greenGradient : theme.orangeGradient)};
  box-shadow: ${({ black }) => (!black ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none')};

  column-gap: 8px;

  path {
    fill: ${({ theme }) => theme.color};
  }

  &:hover {
    background: ${({ theme }) => theme.orangeGradientInvert};
  }

  &:hover path {
    fill: url(#orangeGradient);
  }

  &:active {
    opacity: 0.8;
  }
`;
