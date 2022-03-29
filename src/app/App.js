import React, { Component } from 'react';
import united_design_headerImg from "./assets/images/img/test01.jpeg"
import './App.css';
import './assets/css/main.css';
import Routes from './Routes';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Layout } from 'antd';

// const { Header, Content, Footer } = Layout;
export default function App() {
  return (
    <Layout>
      <Header/>
      <Routes/>
      <Footer/>
    </Layout>
  );
}
