import React from "react";
import {
  MenuOutlined
} from "@ant-design/icons";
import united_design_logo from "../../assets/images/logo/united_design_logo_white.png";
import united_design_headerImg from "../../assets/images/logo/designexo-header-image.jpeg";
import "../../assets/js/main.js";
import "animate.css";
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import $ from 'jquery'


export default () => {
  function miniMenuClick(e) {
    e.stopPropagation();
    $('#myDropdown').toggle();
  }
  function menuClick(e) {
    e.stopPropagation();
}
  $(document).click(function() {
      $('#myDropdown').hide();
  });
  return (
    <header id="header" className="header">
      <div className="headerTop header-sticky not-sticky animate__animated animate__fadeInDown">
        <div className="logo">
          <a role="button" href="/">
            <img src={united_design_logo} alt="凝聚室內設計" />
          </a>
        </div>
        <div className='miniMenu'>
          <a className='dropbtn' href='javascript:void(0)' onClick={(e) => miniMenuClick(e)}>
            <MenuOutlined style={{ fontSize: '30px', color: '#FFFFFF' }} />
          </a>
          <div class="dropdown-content" id="myDropdown">
            <a href="/about" onClick={(e) => menuClick(e)}>關於我們</a>
            <a href="/works" onClick={(e) => menuClick(e)}>作品集</a>
            <a href="/faq" onClick={(e) => menuClick(e)}>常見問題</a>
            <a href="/contact" onClick={(e) => menuClick(e)}>聯絡我們</a>
          </div>
        </div>
        <nav className="menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" role="button" href="/about">
                關於我們
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" role="button" href="/works">
                作品集
              </a>
            </li>
            {/* <li className='nav-item'><a className='nav-link' role='button' href='/sop'>流程介紹</a></li> */}
            <li className="nav-item">
              <a className="nav-link" role="button" href="/faq">
                常見問題
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" role="button" href="/contact">
                聯絡我們
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="headerBottom">
        <img src={united_design_headerImg} alt="凝聚室內設計" />
      </div>
    </header>
  )
};
