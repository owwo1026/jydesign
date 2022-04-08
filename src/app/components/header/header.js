import React from 'react'
import { Affix, Row, Col  } from 'antd';
import united_design_logo from '../../assets/images/united_design_logo_white.png'
import united_design_headerImg from '../../assets/images/designexo-header-image.jpeg'
import '../../assets/js/main.js'
import 'animate.css';

export default () => (
    <header id='header' class='header'>
        <div class='headerTop header-sticky not-sticky animate__animated animate__fadeInDown'>
            <div class='logo'>
                <a role='button' href='/'>
                    <img src={united_design_logo} alt='凝聚室內設計'/>
                </a>
            </div>
            <nav class='menu'>
                <ul class='navbar-nav'>
                    <li class='nav-item'><a class='nav-link' role='button' href='/about'>關於我們</a></li>
                    <li class='nav-item'><a class='nav-link' role='button' href='/works'>作品集</a></li>
                    {/* <li class='nav-item'><a class='nav-link' role='button' href='/sop'>流程介紹</a></li> */}
                    <li class='nav-item'><a class='nav-link' role='button' href='/faq'>常見問題</a></li>
                    <li class='nav-item'><a class='nav-link' role='button' href='/contact'>聯絡我們</a></li>
                </ul>
            </nav>
        </div>
        <div class = 'headerBottom'>
            <img style={{width: '100%'}} src={united_design_headerImg} alt='凝聚室內設計'/>
        </div>
    </header>

)