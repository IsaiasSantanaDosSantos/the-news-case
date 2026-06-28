import { spacing, radius, shadow, typography, layout } from './tokens';
import { darkColors, lightColors } from './colors';

export const baseTheme = {
  spacing,
  radius,
  shadow,
  typography,
  layout,
};

export const lightTheme = {
  ...baseTheme,
  colors: lightColors,
  mode: 'light',
};

export const darkTheme = {
  ...baseTheme,
  colors: darkColors,
  mode: 'dark',
};
