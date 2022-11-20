import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ReactDOM from 'react-dom/client';
import App from './components/App';
import reducers from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ createStore(reducers) }>
    <App />
  </Provider>

);

