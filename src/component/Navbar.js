import React from 'react';
import logoImg from '../../asset/img/Apollo-rocket-logo.png'

const Navbar = () => (
  <nav className="nav is-fixed">
    <div className="container">
      <Logo />
      <Tabs />
    </div>
  </nav>
);

const Logo = () => (
  <div className="nav-left">
    <a className="nav-item is-brand" href="#header" data-scroll>
      <img src={logoImg}></img>
    </a>
  </div>
);

const Tabs = () => (
  <div className="nav-right nav-menu">
    <a className="nav-item is-tab" href="#about" data-scroll>
      About us
    </a>
    <a className="nav-item is-tab" href="#event" data-scroll>
      Event
    </a>
    <a className="nav-item is-tab" href="#register" data-scroll>
      Register
    </a>
    <a className="nav-item is-tab" href="#contact" data-scroll>
      Contact
    </a>
  </div>
);


export default Navbar
