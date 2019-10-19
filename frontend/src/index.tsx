import * as Sentry from '@sentry/browser';
import 'babel-polyfill';
import createBrowserHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import configureStore from './redux/store';
import { register } from './serviceWorker';
import Amplify from 'aws-amplify';

declare global {
  interface Window {
    config: {
      sentry: {
        dsn: string;
        release: string;
        environment: string;
      };
    };
  }
}

if (window.config && window.config.sentry && window.config.sentry.dsn) {
  Sentry.init({
    dsn: window.config.sentry.dsn,
    release: window.config.sentry.release,
    environment: window.config.sentry.environment,
  });
}

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: process.env.REACT_APP_COGNITO_REGION,
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    identityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: 'serverlessforge',
        endpoint: process.env.REACT_APP_API_BASE_URL,
        region: process.env.REACT_APP_API_REGION,
      },
    ],
  },
});

const history = createBrowserHistory();
const { store, persistor } = configureStore(history);

const rootEl = document.getElementById('root');

if (rootEl) {
  ReactDOM.render(<App history={history} store={store} persistor={persistor} />, rootEl);
  register();
}

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line
    if (rootEl) {
      ReactDOM.render(<NextApp history={history} store={store} persistor={persistor} />, rootEl);
    }
  });
}
