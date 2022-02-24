import React from 'react'
import { Space, Slider, Button } from 'antd';

export default () => (
    <div id='navbarNav'>
        <Space size='8'>
            <Button type='link' href='/about'>關於我們</Button>
            <Button type='link' href='/contact'>聯絡我們</Button>
        </Space>
    </div>
)