import { AppRouter } from '@/router/Router';
import { GlobalStyle } from '@/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
};
