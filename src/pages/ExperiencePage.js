// src/ExperiencePage.js

import React from 'react';
import '../formatted.css';

// Import company logos
import wacLogo from '../Assets/webp/WACLogo.jpeg';
import lilyLankaLogo from '../Assets/webp/LilyLanka.png';

const experiences = [
  {
    id: 1,
    title: 'Associate Software Engineer',
    subtitle: 'Mobile – React Native',
    company: 'WebAppClouds LLC',
    location: 'Colombo, Sri Lanka',
    period: 'July 2025 – Present',
    type: 'Full-time',
    responsibilities: [
      'Design, develop, and maintain cross-platform mobile applications using React Native',
      'Build reusable, scalable UI components with JavaScript and TypeScript',
      'Implement React Navigation, REST API integrations, and client-side state management',
      'Collaborate with design, backend, and QA teams to deliver secure, high-performance features',
      'Participate in code reviews, sprint planning, debugging, and continuous improvement'
    ],
    logoSrc: wacLogo,
    gradient: 'blue'
  },
  {
    id: 2,
    title: 'Android Developer',
    subtitle: 'Intern',
    company: 'WebAppClouds LLC',
    location: 'Colombo, Sri Lanka',
    period: 'October 2023 – May 2024',
    type: 'Internship',
    responsibilities: [
      'Delivered production-grade Android applications with authentication, payments, and notifications',
      'Integrated PayHere payment gateway and Firebase Cloud Messaging (FCM)',
      'Applied MVVM architecture to improve code structure and testability',
      'Performed unit testing using JUnit and supported debugging and code reviews'
    ],
    logoSrc: wacLogo,
    gradient: 'pink'
  },
  {
    id: 3,
    title: 'React Native Developer',
    subtitle: 'Freelance',
    company: 'LilyLanka',
    location: 'Colombo, Sri Lanka',
    period: 'October 2025 – Present',
    type: 'Freelance',
    responsibilities: [
      'Developing a production-grade React Native cross-platform tourism management mobile application',
      'Build core application features including bookings, tour management, itinerary handling, and real-time location-based functionality',
      'Implement reusable UI components and a scalable navigation architecture to support complex user flows',
      'Integrate RESTful APIs for dynamic content, real-time updates, and backend-driven workflows',
      'Translate UI/UX designs into responsive, accessible, and user-friendly mobile interfaces',
      'Ensure clean, maintainable code, performance optimization, and architectural consistency'
    ],
    logoSrc: lilyLankaLogo,
    gradient: 'purple'
  },

];

const ExperiencePage = () => {
  return (
    <section className="experience-section-container" id="experience">
      <div className="experience-section">
        <div className="section-heading" data-aos="fade-up">
          <h2 className="section-heading-article" tabIndex="0" aria-label="My experience timeline">
            &#60;/Experience&#62;
          </h2>
          <p className="sectionHeadingP"></p>
        </div>

        <div className="timeline-container" data-aos="fade-up" data-aos-delay="200">
          <div className="timeline-line"></div>
          
          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={300 + (index * 100)}
            >
              <div className="timeline-marker">
                <div className={`marker-icon gradient-${experience.gradient}`}>
                  {experience.logoSrc && (
                    <img 
                      src={experience.logoSrc} 
                      alt={`${experience.company} logo`} 
                      className="company-logo-icon"
                    />
                  )}
                </div>
                <div className="marker-pulse"></div>
              </div>
              
              <div className={`timeline-card gradient-${experience.gradient}`}>
                <div className="timeline-card-header">
                  <div className="card-title-section">
                    <h3 className="card-title">{experience.title}</h3>
                    <span className="card-subtitle">{experience.subtitle}</span>
                  </div>
                  <span className="card-type">{experience.type}</span>
                </div>
                
                <div className="timeline-card-body">
                  <div className="card-company">
                    <span className="company-name">{experience.company}</span>
                    <span className="company-location">📍 {experience.location}</span>
                  </div>
                  
                  <div className="card-period">
                    <span className="period-text">{experience.period}</span>
                  </div>
                  
                  <div className="card-responsibilities">
                    <h4 className="responsibilities-title">Key Responsibilities:</h4>
                    <ul className="responsibilities-list">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="responsibility-item">
                          <span className="bullet-point"></span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
