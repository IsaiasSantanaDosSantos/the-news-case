import 'styled-components';
import { colors, spacing, radius, shadow, typography } from '../styles/tokens';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    spacing: typeof spacing;
    radius: typeof radius;
    shadow: typeof shadow;
    typography: typeof typography;
  }
}
