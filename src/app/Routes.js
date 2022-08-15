import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import $ from 'jquery'
import About from './modules/about/aboutInfo.js';
import Contact from './modules/contact/contactInfo.js';
import Faq from './modules/faq/faq.js';
import Home from './modules/home/home.js';
import Sop from './modules/sop/sop.js';
import Works from './modules/works/works.js';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { UpCircleTwoTone } from "@ant-design/icons";

export default () => {
    const location = useLocation();
    // const [isLoading, setIsLoading] = useState(false);
    if (location.pathname === '/') {
        $(document).ready(function () {
            $('body').css({'overflow-x': 'clip', 'overflow-y': 'clip'});
            $('.header').css({'background-image': 'none', 'height': '100%'});
            $('.header-sticky').addClass('header-fixed-top');
        });
    }
    return (
        <div className = "content">
            { location.pathname === '/' ? <Header/>:<Header/> }
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/works' element={<Works />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/sop' element={<Sop />} />
                <Route path='/contact' element={<Contact />} />
                {/* <Route component={NoMatch} /> */}
            </Routes>
            { location.pathname === '/' ? <div/>:<Footer/> }
            <div className='back_to_top'>
                <UpCircleTwoTone style={{ fontSize: "40px" }} twoToneColor="#7B7B7B" />
            </div>  
        </div>
    )
}