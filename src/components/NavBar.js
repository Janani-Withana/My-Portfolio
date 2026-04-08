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
            <li className="home navbar-tabs-li">
              <Link
                to="home"
                tabIndex="0"
                spy
                smooth
                duration={100}
                offset={-100}
                activeClass="activeThistab"
                aria-label="Home menu button"
              >
                &#60;/Home&#62;
              </Link>
            </li>
            <li className="about navbar-tabs-li">
              <Link
                to="about"
                spy
                smooth
                duration={300}
                offset={-100}
                activeClass="activeThistab"
                aria-label="About menu button"
              >
                &#60;/AboutMe&#62;
              </Link>
            </li>
            <li className="experience navbar-tabs-li">
              <Link
                to="experience"
                spy
                smooth
                duration={400}
                offset={-100}
                activeClass="activeThistab"
                aria-label="Experience menu button"
              >
                &#60;/Experience&#62;
              </Link>
            </li>
            <li className="skills navbar-tabs-li">
              <Link
                to="skills"
                spy
                smooth
                duration={500}
                offset={-100}
                activeClass="activeThistab"
                aria-label="Skills menu button"
              >
                &#60;/Skills&#62;
              </Link>
            </li>
            <li className="projects navbar-tabs-li">
              <Link
                to="projects"
                spy
                smooth
                duration={700}
                offset={-100}
                activeClass="activeThistab"
                aria-label="Projects menu button"
              >
                &#60;/Projects&#62;
              </Link>
            </li>
            <li className="contact navbar-tabs-li">
              <Link
                to="footer"
                spy
                smooth
                duration={100}
                offset={-100}
                activeClass="activeThistab"
                aria-label="Contact menu button"
              >
                &#60;/Contact&#62;
              </Link>
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
          <li id="home-mobile-tab" className="mobile-navbar-tabs-li home">
            <Link
              to="home"
              tabIndex="0"
              spy
              smooth
              duration={100}
              offset={-80}
              activeClass="activeThismobiletab"
              aria-label="Home menu button"
            >
              &#60;/Home&#62;
            </Link>
          </li>
          <li id="aboutme-mobile-tab" className="mobile-navbar-tabs-li about">
            <Link
              to="about"
              tabIndex="0"
              spy
              smooth
              duration={300}
              offset={-80}
              activeClass="activeThismobiletab"
              aria-label="about menu button"
            >
              &#60;/AboutMe&#62;
            </Link>
          </li>
          <li id="experience-mobile-tab" className="mobile-navbar-tabs-li experience">
            <Link
              to="experience"
              tabIndex="0"
              spy
              smooth
              duration={400}
              offset={-80}
              activeClass="activeThismobiletab"
              aria-label="experience menu button"
            >
              &#60;/Experience&#62;
            </Link>
          </li>
          <li id="skills-mobile-tab" className="mobile-navbar-tabs-li skills">
            <Link
              to="skills"
              tabIndex="0"
              spy
              smooth
              duration={500}
              offset={-80}
              activeClass="activeThismobiletab"
              aria-label="skills menu button"
            >
              &#60;/Skills&#62;
            </Link>
          </li>
          <li id="projects-mobile-tab" className="mobile-navbar-tabs-li projects">
            <Link
              to="projects"
              tabIndex="0"
              spy
              smooth
              duration={700}
              offset={-80}
              activeClass="activeThismobiletab"
              aria-label="projects menu button"
            >
              &#60;/Projects&#62;
            </Link>
          </li>
          <li id="contact-mobile-tab" className="mobile-navbar-tabs-li contact">
            <Link
              to="footer"
              tabIndex="0"
              spy
              smooth
              duration={100}
              offset={-80}
              activeClass="activeThismobiletab"
              aria-label="Contact menu button"
            >
              &#60;/Contact&#62;
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
