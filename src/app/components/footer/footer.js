import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  PhoneOutlined,
  MailOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Space, Button } from "antd";
import line_icon from "../../assets/images/icon/icons8-line-48.png";

export default () => (
  <div id="footer" className="footer">
    <div className="info">
      <h4>凝聚室內裝修設計</h4>
      <p>地址：台北市松山區民族東路689號</p>
      <p>手機：0987-654-321</p>
      <p>電子信箱：uniteddesign0@gmail.com</p>
    </div>
    <div className="text">United Design ©2022</div>
    <div className="messageIcon">
      <Space>
        <a
          role="button"
          href="https://www.facebook.com/uniteddesign00"
          target="_blank"
        >
          <FacebookOutlined style={{ fontSize: "30px" }} />
        </a>
        <a
          role="button"
          href="https://www.instagram.com/uniteddesign0/"
          target="_blank"
        >
          <InstagramOutlined style={{ fontSize: "30px" }} />
        </a>
        <a 
          role="button" 
          href="https://line.me/ti/p/4mBzKaqaTB"
          target="_blank"
        >
          <MessageOutlined style={{ fontSize: "30px" }} />
        </a>
        <a role="button" href="tel:+886-987654321">
          <PhoneOutlined style={{ fontSize: "30px" }} />
        </a>
        <a role="button" href="mailto:uniteddesign0@gmail.com">
          <MailOutlined style={{ fontSize: "30px" }} />
        </a>
      </Space>
    </div>
  </div>
);
