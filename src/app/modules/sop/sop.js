import React from 'react'
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import '../../assets/css/sop.css';

export default () => (
    <div className='sop'>
        <div className='title'>
            <h1>服務流程</h1>
        </div>
        <div className='sopContent'>
            <Timeline mode="alternate">
                <Timeline.Item  label='Step 1' 
                                dot={<img src="data:image/png;base64,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"/>}
                >
                    <div className='step' >
                        <div className='stepTitle'>
                           <b>初步溝通</b>
                        </div>
                        <div className='stepContent'>
                            <p>• 協助業主提出基本需求並加以彙整</p>
                            <p>• 了解設計風格</p>
                            <p>• 解說整體作業流程</p>
                            <p>• 場勘丈量費 ，設計費，工程監工費說明</p>
                        </div>
                    </div>
                </Timeline.Item>
                <Timeline.Item label='Step 2' 
                                dot={<img src="data:image/png;base64,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"/>}
                >
                    <div className='step'>
                        <div className='stepTitle'>場勘丈量</div>
                        <div className='stepContent'>
                            <p>• 協助業主提出基本需求並加以彙整</p>
                            <p>• 了解設計風格</p>
                            <p>• 解說整體作業流程</p>
                            <p>• 場勘丈量費 ，設計費，工程監工費說明</p>
                        </div>
                    </div>
                </Timeline.Item>
                <Timeline.Item  label='Step 3' 
                                dot={<img src="data:image/png;base64,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"/>} 
                >
                    <div className='step'>
                        <div className='stepTitle'>設計提案</div>
                        <div className='stepContent'>
                            <p>• 協助業主提出基本需求並加以彙整</p>
                            <p>• 了解設計風格</p>
                            <p>• 解說整體作業流程</p>
                            <p>• 場勘丈量費 ，設計費，工程監工費說明</p>
                        </div>
                    </div>
                </Timeline.Item>
                <Timeline.Item label='Step 4'>
                    <div className='step'>
                        <div className='stepTitle'>設計合約簽訂</div>
                        <div className='stepContent'>
                            <p>• 協助業主提出基本需求並加以彙整</p>
                            <p>• 了解設計風格</p>
                            <p>• 解說整體作業流程</p>
                            <p>• 場勘丈量費 ，設計費，工程監工費說明</p>
                        </div>
                    </div>
                </Timeline.Item>
                <Timeline.Item label='Step 5'>
                    <div className='step'>
                        <div className='stepTitle'>施工圖繪製</div>
                        <div className='stepContent'>
                            <p>• 協助業主提出基本需求並加以彙整</p>
                            <p>• 了解設計風格</p>
                            <p>• 解說整體作業流程</p>
                            <p>• 場勘丈量費 ，設計費，工程監工費說明</p>
                        </div>
                    </div>
                </Timeline.Item>
                <Timeline.Item label='Step 6' dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                    <div className='step'>
                        <div className='stepTitle'>施工合約簽訂</div>
                        <div className='stepContent'>
                            <p>• 協助業主提出基本需求並加以彙整</p>
                            <p>• 了解設計風格</p>
                            <p>• 解說整體作業流程</p>
                            <p>• 場勘丈量費 ，設計費，工程監工費說明</p>
                        </div>
                    </div>
                </Timeline.Item>
                <Timeline.Item label='Step 7' dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                    <div className='step'>
                        <div className='stepTitle'>工程施工</div>
                        <div className='stepContent'>
                            <p>• 協助業主提出基本需求並加以彙整</p>
                            <p>• 了解設計風格</p>
                            <p>• 解說整體作業流程</p>
                            <p>• 場勘丈量費 ，設計費，工程監工費說明</p>
                        </div>
                    </div>
                </Timeline.Item>
                <Timeline.Item label='Step 8' dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                    <div className='step'>
                        <div className='stepTitle'>完工交屋</div>
                        <div className='stepContent'>
                            <p>• 協助業主提出基本需求並加以彙整</p>
                            <p>• 了解設計風格</p>
                            <p>• 解說整體作業流程</p>
                            <p>• 場勘丈量費 ，設計費，工程監工費說明</p>
                        </div>
                    </div>
                </Timeline.Item>
                <Timeline.Item label='Step 9' dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                    <div className='step'>
                        <div className='stepTitle'>售後服務</div>
                        <div className='stepContent'>
                            <p>• 交付保固書</p>
                            <p>• 依保固書內容提供完善保固</p>
                            <p>• 免費諮詢與永續服務</p>
                        </div>
                    </div>
                </Timeline.Item>
            </Timeline>
        </div> 
    </div>
)