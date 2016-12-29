import React from 'react';

const Header = () => (
  <section className="hero is-primary is-fullheight" id="header">
    <div className="hero-body">
      <div className="container is-filter">
        <h2 className="subtitle">Apollo Event #2</h2>
        <h1 className="title">"จบแล้ว... ไงต่อ?"</h1>
        <div className="content">
          <p>เรียนโท ทำงาน ประสบการณ์จากพี่นายช่าง</p>
        </div>
        <br />
        <div>
          <a className="button is-info" href="#event" data-scroll>ดูรายละเอียด</a>
          <span> </span>
          <a className="button is-primary" href="#register" data-scroll>ลงทะเบียน</a>
        </div>
      </div>
    </div>
  </section>
);

export default Header
