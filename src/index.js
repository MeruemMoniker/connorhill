import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


