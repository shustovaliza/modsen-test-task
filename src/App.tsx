import { AppRouter } from '@/router/router';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/Theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
};
