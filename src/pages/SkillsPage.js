// src/SkillsSection.js

import React from 'react';
import '../formatted.css'; // Import your CSS file for styling
import htmlLogo from '../Assets/png/htmllogo.png';
import cssLogo from '../Assets/png/csslogo.png';
import jsLogo from '../Assets/png/jslogo.png';
import bootstrapLogo from '../Assets/png/bootstraplogo.png';
import reactLogo from '../Assets/png/reactlogo.png';
import nodeLogo from '../Assets/png/nodelogo.png'
import flutterLogo from '../Assets/png/flutterLogo1.png'
import kotlinLogo from '../Assets/png/kotlinlogo.png'

const SkillsPage = () => {
  return (
    <section className="skills-section-container" id="skills">
      <div className="skills-section">
        <div className="section-heading" data-aos="fade-up">
          <h2 className="section-heading-article" tabIndex="0" aria-label="skills heading">
            &#60;/Skills&#62;
          </h2>
          <p className="sectionHeadingP"></p>
        </div>

        <div className="frontend-dev-section">
          <h3 className="frontend-dev-heading" data-aos="fade-up" tabIndex="0" aria-label="As a frontend a developer these are the skills i have">
            Tech Stack
          </h3>
          <ul className="tech-stack-wrapper">
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={htmlLogo} alt="Html skill" className="tech-stack-logo" />
              <span className="tooltip">HTML</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={cssLogo} alt="css skill" className="tech-stack-logo" />
              <span className="tooltip">CSS</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={jsLogo} alt="js skill" className="tech-stack-logo" />
              <span className="tooltip">JS</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={bootstrapLogo} alt="bootstrap skill" className="tech-stack-logo" />
              <span className="tooltip">BOOTSTRAP</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={reactLogo} alt="react skill" className="tech-stack-logo" />
              <span className="tooltip">REACT</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={nodeLogo} alt="node skill" className="tech-stack-logo" />
              <span className="tooltip">NODE JS</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={flutterLogo} alt="flutter skill" className="tech-stack-logo" />
              <span className="tooltip">Flutter</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={kotlinLogo} alt="kotlin skill" className="tech-stack-logo" style={{ width: '80px' }} />
              <span className="tooltip">Kotlin</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
