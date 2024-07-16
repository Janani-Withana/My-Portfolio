// src/AboutSection.js

import React from 'react';
import '../formatted.css'; // Import your CSS file for styling
import ProfileImage from '../Assets/png/dp5.jpg';
import resumePDF from '../Assets/pdf/Withana J.W.J Resume.pdf';

const AboutPage = () => {
  const openURL = () => {
    window.open(resumePDF, "_blank");
  };

  return (
    <section className="about-section-container" id="about" data-aos="fade-up">
      <div className="about-section">
        <div className="section-heading"> 
          <h2 className="section-heading-article" tabIndex="0" aria-label="About me heading">
            &#60;/AboutMe&#62;
          </h2>
          <p className="sectionHeadingP"></p>
        </div>

        <div className="info-dp-section">
          <div className="about-info">
            <p tabIndex="0">
              Hi! My name is Janani. I'm an undergraduate student at SLIIT, pursuing Software Engineering. 
              I've also gained practical experience as a trainee Software Engineer.
            </p>
            <br/>
            <p tabIndex="0">
              My passion spans mobile and web development, creating intuitive interfaces and robust backend systems. 
              I specialize in immersive mobile apps and responsive web solutions, blending technical expertise with creative innovation.
            </p>
            <br/>
            <p tabIndex="0">
              I thrive on tackling complex challenges and delivering impactful solutions that enhance user experiences and drive business success.
              I like to code things from scratch and enjoy bringing ideas to life in the browser.
            </p>

            {/* Resume button */}
            <button className="resume-btn" id="resume-btn" onClick={openURL}>
              <div className="sign">
                <svg viewBox="0 0 640 512">
                  <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
                </svg>
              </div>
              <div className="text">Resume</div>
            </button>
          </div>

          <div className="dp" data-aos="fade-up">
            <img src={ProfileImage} alt="Vinod Jangid" tabIndex="0" aria-label="image of vinod" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
