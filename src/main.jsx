import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'; 
import { Toaster } from 'react-hot-toast';
import rootReducer from './reducer/index.js';
import {configureStore} from "@reduxjs/toolkit"
import App from './App.jsx';
import './index.css';

const store = configureStore({
  reducer:rootReducer,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// legacy_createStore as