import { colors, spacing, radius, shadow, typography, layout } from './tokens';

export const theme = {
  colors,
  spacing,
  radius,
  shadow,
  typography,
  layout,
};

export const lightTheme = {
  ...theme,
  mode: 'light',
};

export const darkTheme = {
  ...theme,
  mode: 'dark',
};
