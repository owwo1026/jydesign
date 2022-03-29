import React, { useState, useEffect, useCallback } from 'react'
import { Form, Input, InputNumber, Button, Row, Col } from 'antd';
import _ from 'lodash'
import axios from 'axios';
import united_design_logo from "../../assets/images/S__213770243.jpg"

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const contact = props => { 
    const postNotify = (data) => {
        data= { 
            message: JSON.stringify(data)+'\n1231231231',
            stickerPackageId: '446',
            stickerId: '1988'
        };
        var formData = Object.keys(data).map(
            function (keyName) {
                return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
            }
        ).join('&');
        const cors = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://notify-api.line.me/api/notify';
        axios({
            method : `POST`,
            timeout: 600000,
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer W06xfG8uS1SEjCmdRPbOFAFDcPfT97I4JXOcFaUrVxJ'
            },
            withCredentials: false,
            url:`${cors}${url}`,
            data:formData
        }).then(response => {
            console.log('whttp response', response)
        })
        .catch( error => {
            console.log('whttp error', error)
        })
    }
    const onFinish = (values) => {
        console.log(values.user);
        postNotify(values.user);
    };
    return (
        <div class='contact'>
            <div class='title'>
                <h1>聯絡我們</h1>    
            </div>
            <Row>
                <Col span={12}>
                    <div class='myMiniInfo'>
                        <img style={{width: '70%'}} src={united_design_logo} alt="凝聚室內設計"/>
                    </div>
                </Col>
                <Col span={12}>
                    <div class='contactForm' >
                        <Form {...layout} name='nest-messages' onFinish={onFinish} 
                            // validateMessages={validateMessages}
                        >
                            <Form.Item
                                name={['user', 'name']} label='姓名'
                                rules={[
                                    { required: false },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'phone']} label='電話'
                                rules={[
                                    // { type: 'email' },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'email']} label='電子信箱'
                                rules={[
                                    // { type: 'email' },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'address']} label='聯絡地址'
                                rules={[
                                    // { type: 'email' },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item name={['user', 'housingStatus']} label='房屋現況'>
                                <Input />
                            </Form.Item>
                            <Form.Item name={['user', 'sqft']} label='坪數'>
                                <Input />
                            </Form.Item>
                            <Form.Item name={['user', 'budgetRange']} label='預算範圍'>
                                <Input />
                            </Form.Item>
                            <Form.Item name={['user', 'desc']} label='需求說明'>
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                <Button type='primary' htmlType='submit'>
                                    確認送出
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default contact