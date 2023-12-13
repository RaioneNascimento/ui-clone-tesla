import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import defaultTheme from './styles/theme/default';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)