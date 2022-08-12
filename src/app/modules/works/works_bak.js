import React, { useState, useRef } from 'react'
// import { Layout, Menu, Breadcrumb } from 'antd';
import _ from 'lodash'
import $ from 'jquery'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import worksList from '../../assets/json/worksList.json';

// const requireContext = require.context('../../assets/images/works/1',true, /^\.\/.*\.jpg$/);
// const projectImgs = requireContext.keys().map(requireContext);
// console.log('projectImgs = ' + projectImgs);

export default () => {
    // const [slideIndex, setSlideIndex] = useState(0);
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
    // $(window).scroll(function(){
    //     var width = $('.worksModal').outerWidth(),
    //         height = $('.worksModal').outerHeight(),
            
    //         $window = $(window),
    //         bodyWidth = $window.width(),
    //         bodyHeight = $window.height(),
            
    //         scrollTop = $window.scrollTop(),
    //         top = (bodyHeight / 2 - height / 2) / 3 * 2 + scrollTop,
    //         left = bodyWidth / 2 - width / 2;
    //         console.log('top = ' + (bodyHeight / 2 - height / 2) / 3 * 2 + scrollTop);
        
    //     $('.worksModal').css({
    //         top: top,
    //         left: left,
    //         transform: `translate(${top}, ${left})`
    //     });
    // });
    
    function imageClick(e, id) {
        var width = $('.worksModal').outerWidth(),
            height = $('.worksModal').outerHeight(),
            
            $window = $(window),
            bodyWidth = $window.width(),
            bodyHeight = $window.height(),
            
            scrollTop = $window.scrollTop(),
            top = (bodyHeight / 2 - height / 2) / 3 * 2 + scrollTop,
            left = bodyWidth / 2 - width / 2;
            console.log('top = ' + (bodyHeight / 2 - height / 2) / 3 * 2 + scrollTop);
        
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
            $('.works').addClass('modalBlur');
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
    var count = 0;
    _.map(worksList, (item) => (
        _.map(item.images, img => {
            imgList.push({
                id: count,
                desc: img.desc,
                url:  item.path + img.fileName
            });
            count++;
        })
    ))
    return (
        <div className='works'>
            <div className='title'>
                <h1>作品集</h1>    
            </div>
            <div className='imgList'>
                { 
                    _.map(imgList, (item,idx1) => (
                        <div className='img animate__animated animate__zoomIn'> 
                            <a className='click_worksModal'>
                                <img onClick={(e) => imageClick(e, item.id)} className='imgListItem' src={item.url} alt='Fjords' width='300' height='200' />
                            </a>
                            <div className='desc'>{item.desc}</div>
                        </div>
                    ))
                }
            </div>
            <div className='worksModal animate__animated animate__zoomIn' onClick={(e) => modalImageClick(e)}>
                <Slider 
                    {...settings}
                    ref={slider => (customSlider.current = slider)}
                >
                    { 
                        _.map(imgList, (item) => (
                            <img src={item.url} />
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}