// src/SkillsSection.js

import React from 'react';
import '../formatted.css'; // Import your CSS file for styling
import reactLogo from '../Assets/png/reactlogo.png';
import jsLogo from '../Assets/png/jslogo.png';
import typescriptLogo from '../Assets/png/typescript.png';
import flutterLogo from '../Assets/png/flutterLogo1.png';
import kotlinLogo from '../Assets/png/kotlinlogo.png';
import nodeLogo from '../Assets/png/nodelogo.png';
import gitLogo from '../Assets/png/gitlogo.png';
import androidStudioLogo from '../Assets/png/androidstudiologo.png';
import xcodeLogo from '../Assets/png/xcodelogo.png';
import htmlLogo from '../Assets/png/htmllogo.png';
import cssLogo from '../Assets/png/csslogo.png';

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
            <li className="tech-stack-box react-native-box" data-aos="fade-up">
              <img src={reactLogo} alt="React Native skill" className="tech-stack-logo" />
              <span className="tech-stack-label">React Native</span>
              <span className="tooltip">React Native</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={flutterLogo} alt="Flutter skill" className="tech-stack-logo" />
              <span className="tooltip">Flutter</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={kotlinLogo} alt="Kotlin skill" className="tech-stack-logo" style={{ width: '80px' }} />
              <span className="tooltip">Kotlin</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={jsLogo} alt="JavaScript skill" className="tech-stack-logo" />
              <span className="tooltip">JavaScript</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={typescriptLogo} alt="TypeScript skill" className="tech-stack-logo" />
              <span className="tooltip">TypeScript</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={reactLogo} alt="React skill" className="tech-stack-logo" />
              <span className="tooltip">React</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={nodeLogo} alt="Node.js skill" className="tech-stack-logo" />
              <span className="tooltip">Node.js</span>
            </li>
            {/* <li className="tech-stack-box" data-aos="fade-up">
              <img src={htmlLogo} alt="HTML skill" className="tech-stack-logo" />
              <span className="tooltip">HTML</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={cssLogo} alt="CSS skill" className="tech-stack-logo" />
              <span className="tooltip">CSS</span>
            </li> */}
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={gitLogo} alt="Git skill" className="tech-stack-logo" />
              <span className="tooltip">Git</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={androidStudioLogo} alt="Android Studio skill" className="tech-stack-logo" />
              <span className="tooltip">Android Studio</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img src={xcodeLogo} alt="Xcode skill" className="tech-stack-logo" />
              <span className="tooltip">Xcode</span>
            </li>
          </ul>
        </div>
        {/* 
        <div className="frontend-dev-section" style={{ marginTop: '60px' }}>
          <h3 className="frontend-dev-heading" data-aos="fade-up" tabIndex="0" aria-label="Additional technologies and tools">
            Technologies & Tools
          </h3>
          <div className="skills-text-list" data-aos="fade-up">
            <div className="skills-category">
              <h4 className="skills-category-title">State Management</h4>
              <p className="skills-items">Redux, Zustand, Context API</p>
            </div>
            <div className="skills-category">
              <h4 className="skills-category-title">Backend & APIs</h4>
              <p className="skills-items">RESTful APIs, Firebase, SQLite, MySQL, MongoDB</p>
            </div>
            <div className="skills-category">
              <h4 className="skills-category-title">Tools & Platforms</h4>
              <p className="skills-items">Android Studio, Xcode, App Store Connect, Postman, Swagger, AWS</p>
            </div>
            <div className="skills-category">
              <h4 className="skills-category-title">Testing & DevOps</h4>
              <p className="skills-items">Jest, JUnit, CI/CD fundamentals</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SkillsPage;
