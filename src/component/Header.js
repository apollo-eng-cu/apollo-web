import React from 'react';

const Header = () => (
  <section className="hero is-primary is-fullheight" id="header">
    <div className="hero-body">
      <div className="container is-filter">
        <h2 className="subtitle">Apollo Event #3</h2>
        <h1 className="title">"งานแรกต้องทำไง...งานไหนถึงจะดี ?"</h1>
        <div className="content">
          <p>ก้าวแรกสู่โลกแห่งการทำงาน ผ่านมุมมองจากผู้มีประสบการณ์</p>
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
