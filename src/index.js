import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import rootReducer from './slices/uuidData';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

const store = configureStore({
  reducer: rootReducer,
})

render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
