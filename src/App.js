import React from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Routes />
    </Router>
  </ThemeProvider>
);

export default hot(module)(App);
