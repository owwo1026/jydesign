import React from 'react'
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.`;

function callback(key) {
    console.log(key);
}
export default () => (
    <div id='faq' class='faq'>
        <div class='title'>
            <h1>常見問題</h1>    
        </div>
        <div class='question'>
            <Collapse onChange={callback}>
                <Panel header="This is panel header 1" key="1">
                <Collapse defaultActiveKey="1">
                    <Panel header="This is panel nest panel" key="1">
                    <p>{text}</p>
                    </Panel>
                </Collapse>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
                </Panel>
            </Collapse>
        </div>
    </div>
)