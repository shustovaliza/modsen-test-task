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
    height: 100%; 
    width: 100%;
    font-family: ${(props) => props.theme.fonts.mainFont};
    font-weight: 400;
    background: ${(props) => props.theme.colors.backgroundMainColor};
    color: ${(props) => props.theme.colors.black};
  }

  #root {
    height: 100%; 
    width: 100%;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};

    &:hover {
      color: ${(props) => props.theme.colors.lightOrange};
    }
  }

  button {
    cursor: pointer;
    font-family: ${(props) => props.theme.fonts.mainFont};
  }
`;
