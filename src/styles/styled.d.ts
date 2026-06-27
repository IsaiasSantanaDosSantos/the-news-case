import 'styled-components';
import {
  colors,
  spacing,
  radius,
  shadow,
  typography,
  layout,
} from '../styles/tokens';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    spacing: typeof spacing;
    radius: typeof radius;
    shadow: typeof shadow;
    typography: typeof typography;
    layout: typeof layout;
  }
}
