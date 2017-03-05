import React, { Component } from 'react'
import smoothScroll from 'smooth-scroll'
import Navbar from './component/Navbar'
import Header from './component/Header'
import About from './component/About'
import Event from './component/Event'
import Register from './component/Register'
import Contact from './component/Contact'

export default class App extends Component {
  componentDidMount() {
    document.addEventListener('fb_init', e => FB.XFBML.parse());
    smoothScroll.init({
      speed: 500,
      offset: 50,
      easing: 'easeOutQuad'
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Event />
        <Contact />
      </div>
    );
  }
}
