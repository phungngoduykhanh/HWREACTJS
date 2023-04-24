import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header/Header';
import Statee from './App/App';
import Count from './components/hook/Count';
import Form from './components/hook/Form';
import App from './App/App';
// import Covid from './components/Covid/Covid';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header/>
    <Statee/> */}
    {/* <Count/> */}
    {/* <Form/> */}
    <App/>
    {/* <Covid/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

