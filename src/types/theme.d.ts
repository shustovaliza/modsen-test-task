import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundMainColor: '#FAFAFA';
      white: '#FFFFFF';
      black: '#393939';
      orange: '#F17900';
      lightOrange: '#E0A449';
      error: '#ff5154';
    };
    media: {
      xs: `(max-width: 400px)`;
      sm: `(max-width: 600px)`;
      md: `(max-width: 900px)`;
      lg: `(max-width: 1200px)`;
    };
  }
}
