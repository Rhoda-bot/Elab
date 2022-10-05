import axios from 'axios';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = createRoot(document.getElementById('root')!); // createRoot(container!) if you use TypeScript
// default axios request //
axios.defaults.baseURL = 'https://elab-api.herokuapp.com/api/v1/';
const getToken = JSON.stringify(localStorage.getItem('token'));
axios.defaults.headers.common.Authorization = `Bearer ${getToken}`;
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.headers.post.Accept = 'application/form-data';
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
