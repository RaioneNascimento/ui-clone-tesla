import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;

      secondary: string,
    };
    shadow: {
      text: string;
      default: string;
    }
  }
}