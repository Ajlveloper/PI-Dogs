import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import axios from 'axios';
import './index.css';
import reportWebVitals from './reportWebVitals';
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process?.env?.REACT_APP_API || "http://localhost:3001"


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
