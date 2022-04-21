import React from "react";
// import { Layout, Menu, Breadcrumb } from 'antd';

export default () => (
  <div id="home">
    <div id="banner">banner</div>
    <div id="message">
      {/* timeline、events、messages */}
      <div
        className="fb-page"
        data-href="https://m.facebook.com/unitedaarch/"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://m.facebook.com/unitedaarch/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://m.facebook.com/unitedaarch/">凝聚設計</a>
        </blockquote>
      </div>
    </div>
  </div>
);
