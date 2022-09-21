import React from "react";
import "../../assets/css/about.css";
import example from "../../assets/images/img/T01_2.jpg";
// <img src={example} />

export default () => {
  return (
    <div className="aboutInfo">
      {/* 第一段 關於維域 */}
      <div className="about-wy">
        <div className="about-wy-title">
          {/* <span className="cn">關於維域</span> */}
          <span className="en">WEI YU DESIGN</span>
        </div>
        <div className="about-wy-content">
          <p>
            Since 2019, I've helped hundreds of entrepreneurs (like you!) design
            strategic and unique website design to attract dream clientele,
            build a profitable business, and feel confident online. Not only do
            I design a stunning website for your brand, but my design process is
            all about collaboration - hence "with" in my business name!
          </p>
        </div>
      </div>
      {/* <div className="about-blank-img-1">
        <img src={example} />
      </div> */}
      {/* 第二段 設計理念 */}
      <div className="about-design">
        <div className="about-design-title">
          <span className="cn">設計理念</span>
          <span className="en">DESIGN CONCEPT</span>
        </div>
        <div className="about-design-content">
          <div className="about-design-content-text">
            <p>
              In May 2019, I launched Create with Danielle within weeks from the idea popping in my head.
              In one day, I booked my first client.
              Fast forward to three years later, I've had the opportunity to work with hundreds of amazing female entrepreneurs & creative businesses all over the world.
              If I can do it — you can do too! Starting a business not knowing the outcome is scary, but you can be successful by investing in your business, working hard & believing in yourself.
              So many entrepreneurs have reached out doubting their business ideas, as there's so many of the same out there. But this is where I come in, to help differentiate your brand from others, and build you a stunning website that will make you profitable & confident.
            </p>
          </div> 
          <div className="about-design-content-img"><img src={example} /></div>  
        </div>
      </div>
      {/* 第三段 人物介紹 */}
      {/* <div className="about-intro">
        <div className="about-intro-title">
          <span className="cn"></span>
          <span className="en">DESIGNER</span>
        </div>
        <div className="about-intro-content">
          <div className="about-intro-photo"></div>
          <div className="about-intro-text"></div>
        </div>
      </div> */}
      {/* 第四段 服務項目 */}
      <div className="about-service">
        <div className="about-service-1"></div>
        <div className="about-service-2"></div>
        <div className="about-service-3"></div>
        <div className="about-service-4"></div>
      </div>
      {/* 第五段 其他連結 */}
      <div className="about-other">
        <div className="about-other-title">
          <span></span>
        </div>
        <div className="about-other-go">
          <div className="about-other-img"><img src={example} /></div>
          <div className="about-other-content">
            <div className="about-other-content-text">PORTFOLIO</div>
            <div className="about-other-content-link">VIEW NOW</div>
          </div>
        </div>
        <div className="about-other-go">
          <div className="about-other-img"><img src={example} /></div>
          <div className="about-other-content">
            <div className="about-other-content-text">CONTACT US</div>
            <div className="about-other-content-link">VIEW NOW</div>
          </div>
        </div>
      </div>
    </div>
  );
};
