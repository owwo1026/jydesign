import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.css';
import './assets/css/main.css';
import Routes from './Routes';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

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
