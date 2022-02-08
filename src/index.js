import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CallbackHook from './components2/CallbackHook';

import App from './App';
import { ThemeContextProvider } from './context/ThemeContext';

ReactDOM.render(
  // <ThemeContextProvider>
  //   <App />
  // </ThemeContextProvider>,
  <CallbackHook />,
  document.getElementById('root')
);
