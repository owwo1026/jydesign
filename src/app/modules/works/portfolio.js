import React, { useRef } from 'react'
import { Tabs } from 'antd';
import _ from 'lodash'
import $ from 'jquery'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assets/css/portfolio.css';
import worksList from '../../assets/json/worksList.json';

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
            <div className='work-wrap'>
                <div className='work-content'>
                    <div className='work-title'><h3>PORTFOLIO / 作品集</h3></div>
                    <div className='work-desc'><p>作品集寶貝們</p></div>
                </div>
                <ul className='work-list'>
                    { 
                        _.map(imgList, (item,idx1) => (
                            <li id={'w'+idx1} className='work-list-item'>
                                <a href={'/portfolioInfo/'+idx1}>
                                    <div className='project-img'><img src={item.images[0].url} alt={item.images[0].desc} id={item.images[0].id} /></div>
                                    <div className='project-content'>
                                        <div className='project-title'>{item.name}</div>
                                        {/* <div className='project-desc'>{item.desc}</div> */}
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}