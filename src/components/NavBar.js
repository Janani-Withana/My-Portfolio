// src/NavBar.js

import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import Avatar from '../Assets/png/nav-avatar-janani.png';
import 'aos/dist/aos.css';
import '../formatted.css'; // Import your CSS file for styling
import AOS from 'aos';

const NavBar = () => {
  useEffect(() => {
    AOS.init();

    const hamburgerMenu = () => {
      document.body.classList.toggle("stopscrolling");
      document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
      document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
      document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
      document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
    };

    const hidemenubyli = () => {
      document.body.classList.toggle("stopscrolling");
      document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
      document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
      document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
      document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
    };

    document.getElementById("hamburger-button").onclick = hamburgerMenu;
    const mobileNavItems = document.querySelectorAll('.mobile-navbar-tabs-li');
    mobileNavItems.forEach(item => item.onclick = hidemenubyli);

    return () => {
      document.getElementById("hamburger-button").onclick = null;
      mobileNavItems.forEach(item => item.onclick = null);
    };
  }, []);

  return (
    <div className='navheader'>
      <div className="navbar" id="navbar">
        <div className="hey">Hey!</div>
        <div className="logo" tabIndex="0" aria-label="janani logo">
          <div className="logo-top">
            <img src={Avatar} alt="animation-head" id="nav-avatar" />
          </div>
        </div>
        <div className="navbar-tabs" id="navbar-tabs">
          <ul className="navbar-tabs-ul">
            <li className="home activeThistab navbar-tabs-li">
              <Link to="home" tabIndex="0" smooth={true} duration={100} aria-label="Home menu button">&#60;/Home&#62;</Link>
            </li>
            <li className="about navbar-tabs-li">
              <Link to="about" smooth={true} duration={300} aria-label="About menu button">&#60;/AboutMe&#62;</Link>
            </li>
            <li className="skills navbar-tabs-li">
              <Link to="skills" smooth={true} duration={500} aria-label="Skills menu button">&#60;/Skills&#62;</Link>
            </li>
            <li className="projects navbar-tabs-li">
              <Link to="projects" smooth={true} duration={700} aria-label="Projects menu button">&#60;/Projects&#62;</Link>
            </li>
            <li className="projects navbar-tabs-li">
              <Link to="footer" smooth={true} duration={100} aria-label="Projects menu button">&#60;/Contact&#62;</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="hamburger" id="hamburger" data-aos="fade">
        <div className="hamburgerbase">
          <button id="hamburger-button" tabIndex="0" aria-label="Menu Button">
            <span className="burger-bar" id="burger-bar1"></span>
            <span className="burger-bar" id="burger-bar2"></span>
            <span className="burger-bar" id="burger-bar3"></span>
          </button>
        </div>
      </div>

      <div className="mobiletogglemenu" id="mobiletogglemenu">
        <ul className="mobile-navbar-tabs-ul" id="mobile-ul">
          <li id="home-mobile-tab" className="mobile-navbar-tabs-li home activeThismobiletab">
            <Link to="home" tabIndex="0" aria-label="Home menu button">&#60;/Home&#62;</Link>
          </li>
          <li id="aboutme-mobile-tab" className="mobile-navbar-tabs-li about">
            <Link to="about" tabIndex="0" aria-label="about menu button">&#60;/AboutMe&#62;</Link>
          </li>
          <li id="skills-mobile-tab" className="mobile-navbar-tabs-li skills">
            <Link to="skills" tabIndex="0" aria-label="skills menu button">&#60;/Skills&#62;</Link>
          </li>
          <li id="projects-mobile-tab" className="mobile-navbar-tabs-li projects">
            <Link to="projects" tabIndex="0" aria-label="projects menu button">&#60;/Projects&#62;</Link>
          </li>
          <li id="projects-mobile-tab" className="mobile-navbar-tabs-li projects">
            <Link to="footer" tabIndex="0" aria-label="projects menu button">&#60;/Contact&#62;</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
