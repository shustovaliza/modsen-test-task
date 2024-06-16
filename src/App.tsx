import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { AppRouter } from '@/router/Router';
import { store } from '@/store/store';
import { GlobalStyle } from '@/styles/globalStyle';
import { theme } from '@/styles/theme';

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
