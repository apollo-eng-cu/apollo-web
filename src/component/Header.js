import React from 'react';

const Header = () => (
  <section className="hero is-primary is-fullheight" id="header">
    <div className="hero-body">
      <div className="container is-filter">
        <h2 className="subtitle">Apollo Event #1</h2>
        <h1 className="title">"พร้อมยัง ?"</h1>
        <div className="content">
          <p>จะเรียนจบแล้ว จะฝึกงานแล้ว จะเลือกภาคแล้ว พร้อมกันยัง ?
          รู้หรือยังว่าอยากเลือกเดินทางไหน ต้องเตรียมตัวยังไงบ้าง ?</p>
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
