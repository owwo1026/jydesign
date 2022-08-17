import React from "react";
import {
  MenuOutlined
} from "@ant-design/icons";
import united_design_logo from "../../assets/images/logo/LOGO_中英_橫式1.png";
import united_design_headerImg from "../../assets/images/img/T01_3.jpeg";
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
      <div className='mask'>
        <div className="headerTop header-sticky not-sticky animate__animated animate__fadeInDown">
          <div className="logo">
            <a role="button" href="/">
              <img id="headerLogo" src={united_design_logo} alt="維域設計室內裝修有限公司" />
            </a>
          </div>
          <div className='miniMenu'>
            <a className='dropbtn' href='#' onClick={(e) => miniMenuClick(e)}>
              <MenuOutlined style={{ fontSize: '30px', color: '#FFFFFF' }} />
            </a>
            <div className="dropdown-content" id="myDropdown">
              <a href="/about" onClick={(e) => menuClick(e)}>關於我們</a>
              <a href="/sop" onClick={(e) => menuClick(e)}>服務流程</a>
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
                <a className="nav-link" role="button" href="/sop">
                  服務流程
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
      </div>
    </header>
  )
};
