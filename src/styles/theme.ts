import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    backgroundMainColor: '#FAFAFA',
    white: '#FFFFFF',
    black: '#393939',
    orange: '#F17900',
    lightOrange: '#E0A449',
    error: '#ff5154',
    orangeTransparent: '#FBD7B24D',
  },
  media: {
    xs: `(max-width: 400px)`,
    sm: `(max-width: 600px)`,
    md: `(max-width: 900px)`,
    lg: `(max-width: 1200px)`,
  },
  fonts: {
    mainFont: 'Lexend Deca',
  },
};
