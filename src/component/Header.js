import React from 'react';

const Header = () => (
  <section className="hero is-primary is-fullheight" id="header">
    <div className="hero-body">
      <div className="container is-filter">
        <h2 className="subtitle">Intania Career Round table by Apollo</h2>
        <h1 className="title">"เจาะลึกสายอาชีพ เปิดหีบชีวิตคนทำงาน"</h1>
        <div className="content">
        </div>
        <br />
        <div>
          <a className="button is-info" href="#event" data-scroll>ดูรายละเอียด</a>
          <span> </span>
          <a className="button is-primary" href="https://goo.gl/forms/bbE4K378BrzbhtUz1" target="_blank">ขึ้นทะเบียน</a>
        </div>
      </div>
    </div>
  </section>
);

export default Header
