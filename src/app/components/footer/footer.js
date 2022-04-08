import React from "react";
import { FacebookOutlined } from '@ant-design/icons';
import { Space, Button } from 'antd';

export default () => (
  <div id="footer" class="footer">
    <div/>
    <div class='text'>
      United Design ©2022
    </div>
    <div class='messageIcon'>
      <Space>
        <a>
          <FacebookOutlined style={{ fontSize: '40px' }}/>
          {/* <FacebookOutlined style={{ fontSize: '40px', color: '#40a9ff' }}/> */}
        </a>
      </Space>
    </div>
  </div>
);
