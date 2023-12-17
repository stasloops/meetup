import styled from 'styled-components';
import CookiesIcon from '../../../data/assets/svg/cookies.svg';
import { Switch } from '../Switch/Switch';
import { ThemedSvg } from '../ThemedSvg/ThemedSvg';

const ThemeSwitcherLayout = styled.div`
  display: flex;
  align-items: center;
`;

const ThemeName = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 9px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.themeText};
  word-wrap: normal;
  max-width: 33px;
  margin-left: 5px;
  margin-right: 8px;
`;

export function ThemeSwitcher({ onChangeTheme, theme }) {
  return (
    <ThemeSwitcherLayout>
      <ThemedSvg ElementSvg={CookiesIcon} />
      <ThemeName>Темная тема</ThemeName>
      <Switch onChange={onChangeTheme} value={theme} />
    </ThemeSwitcherLayout>
  );
}
