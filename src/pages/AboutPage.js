// src/AboutSection.js

import React from 'react';
import '../formatted.css'; // Import your CSS file for styling
import ProfileImage from '../Assets/png/dp.jpg';
import resumePDF from '../Assets/pdf/Janani-Withana-Mobile-Developer.pdf';
import resumePDF1 from '../Assets/pdf/Withana J.W.J Resume.pdf';
import resumePDF2 from '../Assets/pdf/Withana J.W.J Resume ATS Format.pdf';

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
              Hi! I'm <strong>Janani Withana</strong>, a <strong>Mobile Developer (React Native)</strong> with 1+ year of industry experience building scalable, production-ready mobile applications for both <strong>iOS and Android</strong> platforms.
            </p>
            <br/>
            <p tabIndex="0">
              Currently working as an <strong>Associate Software Engineer (Mobile – React Native)</strong> at WebAppClouds LLC, I specialize in cross-platform mobile development using <strong>React Native</strong>, JavaScript, and TypeScript. 
              As a <strong>Mobile Developer (React Native)</strong>, I design and develop reusable, scalable UI components, implement <strong>React Navigation</strong>, REST API integrations, and client-side state management for mobile applications.
            </p>
            <br/>
            <p tabIndex="0">
              My expertise as a <strong>Mobile Developer (React Native)</strong> includes secure authentication systems, Firebase messaging, payment integrations, and delivering consumer-facing and enterprise mobile applications. 
              I thrive on tackling complex challenges in mobile development, collaborating with cross-functional teams, and maintaining high standards of performance, security, and code quality. 
              Passionate about continuous learning and building impactful <strong>mobile products</strong> that enhance user experiences on iOS and Android platforms.
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
            <img src={ProfileImage} alt="Janani Withana" tabIndex="0" aria-label="image of janani" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
