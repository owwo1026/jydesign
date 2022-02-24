import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './modules/about/aboutInfo.js';
import Contact from './modules/contact/contactInfo.js';

export default () => (
    <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />} />
        {/* <Route component={NoMatch} /> */}
    </Routes>
)