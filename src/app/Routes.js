import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './modules/about/aboutInfo.js';
import Contact from './modules/contact/contactInfo.js';
import Faq from './modules/faq/faq.js';
import Home from './modules/home/home.js';
import Sop from './modules/sop/sop.js';
import Works from './modules/works/works.js';

export default () => (
    <div class = "content">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/works' element={<Works />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/sop' element={<Sop />} />
            <Route path='/contact' element={<Contact />} />
            {/* <Route component={NoMatch} /> */}
        </Routes>    
    </div>
)