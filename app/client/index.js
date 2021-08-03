import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { CookiesProvider } from "react-cookie";
// setup fake backend
// import { configureFakeBackend } from './src/_helpers/fake-backend';
// configureFakeBackend();

ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  document.getElementById('root'),
);
