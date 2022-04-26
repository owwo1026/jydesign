import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Affix } from 'antd';
import { UpCircleTwoTone } from "@ant-design/icons";
import './app/assets/css/main.css';
import Routes from './app/Routes';
import Header from './app/components/header/header';
import Footer from './app/components/footer/footer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes/>
      <Footer/>
      <div className='back_to_top'>
        <UpCircleTwoTone style={{ fontSize: "40px" }} twoToneColor="#7B7B7B" />
      </div>  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
