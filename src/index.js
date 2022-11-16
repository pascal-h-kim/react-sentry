import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducers/app';

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://349dead2b9544a21bb81393a42afbc7e@ops-sentry.knowre.com/35",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));

registerServiceWorker();
