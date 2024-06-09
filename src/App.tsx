import { AppRouter } from '@/router/Router';
import { GlobalStyle } from '@/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
};
