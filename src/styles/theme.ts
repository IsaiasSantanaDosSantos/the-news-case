import { colors, spacing, radius, shadow, typography } from './tokens';

export const theme = {
  colors,
  spacing,
  radius,
  shadow,
  typography,
};

export const lightTheme = {
  ...theme,
  mode: 'light',
};

export const darkTheme = {
  ...theme,
  mode: 'dark',
};
