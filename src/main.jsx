import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router.jsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
