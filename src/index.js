import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Notiflix from 'notiflix';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { theme } from 'service/theme';

Notiflix.Notify.init({
  width: '300px',
  position: 'center-center',
  timeout: 3000,
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/TV_Shows">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
