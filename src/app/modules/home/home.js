import React, { useRef } from 'react'
import _ from 'lodash'
import $ from 'jquery'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assets/css/home.css';

export default () => {
  // 幻燈片設定
  const bannerPath = require.context("../../assets/images/homeBanner/");
  const bannerList =bannerPath.keys().map(bannerPath);
  var imgList = [];
  var count = 0;
  _.forEach(bannerList, banner => {
    imgList.push({
      id: count,
      url:  banner
    });
    count++;
  });
  const customSlider = useRef();
  const settings = {
      autoplay: true,
      autoplaySpeed: 15000,
      arrows: true,
      fade: true,
      lazyLoad: true,
      dots: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false
  };
  return (
    <div id="home">
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
      <div className="text">
        <a role="button" href="/about">
          <div className="enter  animate__animated animate__backInLeft">Enter</div>
          <div className="desc enter  animate__animated animate__bounceInLeft delay-10s">xxxxxxxxxxxxxx</div>
        </a>
      </div>
    </div>
  )
};
