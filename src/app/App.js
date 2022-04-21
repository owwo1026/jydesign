import React, { Component } from 'react';
import './App.css';
import './assets/css/main.css';
import Routes from './Routes';
import Header from './components/header/header';
import Footer from './components/footer/footer';

// const { Header, Content, Footer } = Layout;
export default function App() {
  return (
    <div>
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}
