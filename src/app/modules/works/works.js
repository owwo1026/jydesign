import React, { useRef } from 'react'
import { Tabs } from 'antd';
import _ from 'lodash'
import $ from 'jquery'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assets/css/works.css';
import worksList from '../../assets/json/worksList.json';

const { TabPane } = Tabs;

export default () => {
    const customSlider = useRef();
    const settings = {
        adaptiveHeight: true,
        lazyLoad: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    function imageClick(e, id) {
        var width = $('.worksModal').width(),
            height = $('.worksModal').height(),
            windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            scrollTop = $(window).scrollTop(),
            // top = (windowHeight / 2 - height / 2) / 3 * 2 + scrollTop,
            // left = windowWidth / 2 - width / 2,
            top = (windowHeight/2 - (windowHeight/2)) / 2,
            left = (windowWidth/2 - (windowWidth/2)) / 2;
            console.log('top = ' + top);
            console.log('left = ' + left);
            console.log('width = ' + width);
            console.log('height = ' + height);
            console.log('windowWidth = ' + windowWidth);
            console.log('windowHeight = ' + windowHeight);
        $('.worksModal').css({
            top: top,
            left: left,
            transform: `translate(${top}, ${left})`
        });
        console.log('id = ' + id);
        customSlider.current.slickGoTo(id);
        e.stopPropagation();
        if( $('.works').hasClass('modalBlur') ) {
            $('.works').removeClass('modalBlur');
            $('.header').removeClass('modalBlur');
            $('.footer').removeClass('modalBlur');
        } else {
            $('.works:not("#worksModal")').addClass('modalBlur');
            $('.header').addClass('modalBlur');
            $('.footer').addClass('modalBlur');
        }
        $('.worksModal').toggle();
    }
    // $(window).scroll(function(){
    //     var width = $('.worksModal .slick-current img').attr('height',$(this).height()),
    //         height = $('.worksModal .slick-current').outerHeight(),
    //         windowWidth = $(window).width(),
    //         windowHeight = $(window).height(),
    //         scrollTop = $(window).scrollTop(),
    //         // top = (windowHeight / 2 - height / 2) / 3 * 2 + scrollTop,
    //         // left = windowWidth / 2 - width / 2,
    //         top = (windowHeight/2 - (windowHeight/2)) / 2,
    //         left = (windowWidth/2 - (windowWidth/2)) / 2;
    //         console.log('top = ' + top);
    //         console.log('left = ' + left);
    //         console.log('width = ' + width);
    //         console.log('height = ' + height);
    //         console.log('windowWidth = ' + windowWidth);
    //         console.log('windowHeight = ' + windowHeight);
    //     $('.worksModal').css({
    //         top: top,
    //         left: left,
    //         transform: `translate(${top}, ${left})`
    //     });
    // })
    function modalImageClick(e) {
        e.stopPropagation();
    }
    $(document).click(function() {
        $('.works').removeClass('modalBlur');
        $('.header').removeClass('modalBlur');
        $('.footer').removeClass('modalBlur');
        $('.worksModal').hide();
    });
    // 處理img
    var imgList = [];
    var imgItem = [];
    var slideList = [];
    var count = 0;
    _.forEach(worksList, item => {
        imgItem = [];
        slideList = [];
        count = 0;
        const works = require.context("../../assets/works/");
        const worksItem = _.filter(works.keys(), p => p.includes(item.path));
        // console.log("worksItem = " + worksItem);
        // console.log("worksItem: "+ worksItem);
        _.forEach(worksItem.map(works), img => {
            imgItem.push({
                id: count,
                url:  img
            });
            slideList.push({
                id: count,
                url:  img
            });
            count++;
        });
        imgList.push({
            name: item.name,
            desc: item.desc,
            images: imgItem,
            slideList: slideList
        });
    });
    return (
        <div className='works'>
            <div className='title'>
                <h1>作品集</h1>    
            </div>
            <div className="imgList">
                <Tabs type="card" centered="true" size="large" className="antdTabs">
                { 
                    _.map(imgList, (item) => (
                        <TabPane tab={<div className='antdTabPane'>{item.name}</div>} key={item.name}>
                            <div className='desc'>{item.desc}</div>
                            <div className='imgItems'>
                                {   
                                    _.map(item.images, (img) => (
                                        <div className='img animate__animated animate__zoomIn'> 
                                            <a className='click_worksModal'>
                                                <img onClick={(e) => imageClick(e, img.id)} className='imgListItem' src={img.url} alt={img.desc} id={img.id} width='300' height='200' />
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>
                            <div id='worksModal' className='worksModal animate__animated animate__zoomIn' onClick={(e) => modalImageClick(e)}>
                                <Slider 
                                    {...settings}
                                    ref={slider => (customSlider.current = slider)}
                                >
                                    { 
                                        _.map(item.slideList, (item) => (
                                            <img src={item.url} />
                                        ))
                                    }
                                </Slider>
                            </div>
                        </TabPane>
                    ))
                }
                </Tabs>
            </div>
        </div>
    )
}