import React from 'react';

import whiteLogoImg from '../../asset/img/apollo-white.png'
import lightBulbImg from '../../asset/img/light-bulb.png'
import linkImg from '../../asset/img/link.png'
import starImg from '../../asset/img/star.png'

const About = () => (
  <section id="about">
    <div className="container has-text-centered">
      <img className="logo" src={whiteLogoImg}></img>

      <div className="main content">
        <p>ศูนย์กลางที่จะช่วยพัฒนาความรู้และทักษะของนิสิตวิศวฯ จุฬาฯ โดยความร่วมมือระหว่างศิษย์เก่าผู้มีประสบการณ์ในสายอาชีพต่างๆ อาจารย์ และนิสิตปัจจุบันเพื่อ</p>
      </div>

      <div className="columns is-desktop">
        <Item
          img={lightBulbImg}
          title="Inspire"
          content="ให้ความรู้ ข้อมูลข้อเท็จจริง และตัวอย่างจากผู้มีประสบการณ์"
        />

        <Item
          img={linkImg}
          title="Connect"
          content="เชื่อมศิษย์เก่า ภาครัฐ และบริษัทเอกชน กับนิสิตเพื่อแลกเปลี่ยนข้อมูลความรู้"
        />

        <Item
          img={starImg}
          title="Develop"
          content="พัฒนาให้นิสิตมีทักษะสำคัญพร้อมทำงานและเป็นผู้นำในอนาคต"
        />
      </div>

    </div>
  </section>
);

const Item = (props) => (
  <div className="column">
    <div className="circle has-text-centered">
      <img className="logo" src={props.img}></img>
    </div>
    <div className="content">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  </div>
);

export default About
