import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';

import Routes from './routes';
import store from 'store';
import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ReduxProvider store={store}>
        <Routes />
      </ReduxProvider>
    </ThemeProvider>
  );
}

export default App;
