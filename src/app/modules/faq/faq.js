import React from 'react';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import faqList from '../../assets/json/faqList.json';
import _ from 'lodash'
import $ from 'jquery'
import '../../assets/css/faq.css';

export default () => {
  // _.map(faqList, item => {
  //   console.log('faqList = ' + item.title);
  // })
  return (
    <div id='faq' className='faq'>
      <div className='title'>
        <h1>常見問題</h1>
      </div>
      <div className='question'>
        { 
            _.map(faqList, (item,idx1) => (
              <div id={'faq'+idx1} className='questionItem'>
                <div className='que'>
                  <h3>{item.question}</h3>
                </div>
                <div className='ans'>
                  <span>{item.answer}</span>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  )
};
