import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    background: var(--background-color);
    height: 100%; 
    width: 100%;
    font-family: Lexend Deca;
    font-weight: 400;
    color: var(--text-color-black);

  }

  #root {
    height: 100%; 
    width: 100%;
  }
`;
