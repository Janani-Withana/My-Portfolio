// src/PortfolioPage.js

import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../formatted.css'; // Import your CSS file for styling

// Importing images
import prj1Favicon from '../Assets/webp/NasaLogo.png';
import prj2Favicon from '../Assets/webp/ThilinaLogo.png';
import prj3Favicon from '../Assets/webp/MovieTicketBookinglogo.png';
import prj4Favicon from '../Assets/webp/Sri GoviyaLogo.png';
import prj5Favicon from '../Assets/webp/SnapMindLogo.png';
import prj6Favicon from '../Assets/webp/ChargeMapLogo.png';
import prj7Favicon from '../Assets/webp/IMSLogo.png';
import prj8Favicon from '../Assets/webp/IbsonsChoiceCafeLogo.png';
import prj9Favicon from '../Assets/webp/EcoRentalsLogo.png';

import prj1Image from '../Assets/webp/NasaLandingPage.PNG';
import prj2Image from '../Assets/webp/ThilinaInstitute.png';
import prj3Image from '../Assets/webp/MovieTicketBooking2.jpg';
import prj4Image from '../Assets/webp/SriGoviyaFlyer.png';
import prj5Image from '../Assets/webp/SnapMindFlyer.png';
import prj6Image from '../Assets/webp/ChargeMapFlyer.jpg';

const projects = [
  {
    boxClass: 'project-box1',
    boxId: 'project-box1',
    faviconSrc: prj4Favicon,
    title: 'Sri Goviya',
    description: 'A Mobile app developed with Flutter-Firebase enabling farmers to sell harvests directly to buyers. Offers tools for crop management, weather forecasts, pest control, and more to enhance the farming experience.',
    githubLink: 'https://github.com/Pamitha-Pankaja/UEE-WE-53',
    //liveLink: '',
    imageSrc: prj4Image,
    category: 'Mobile',
    technologies: ['Flutter', 'Firebase', 'Dart']
  },
  {
    boxClass: 'project-box2',
    boxId: 'project-box2',
    faviconSrc: prj5Favicon,
    title: 'Snap Mind',
    description: 'SnapMind is a cutting-edge Android app powered by the Gemini Pro API, designed using Kotlin to enhance image intelligence experience. SnapMind is the perfect tool for quick and precise image analysis.',
    githubLink: 'https://github.com/Janani-Withana/SnapMind',
    //liveLink: '',
    imageSrc: prj5Image,
    category: 'Mobile',
    technologies: ['Kotlin', 'Android', 'Gemini Pro API']
  },
  {
    boxClass: 'project-box3',
    boxId: 'project-box3',
    faviconSrc: prj6Favicon,
    title: 'WAC Charge Map',
    description: 'A cross-platform mobile app for discovering and crowdsourcing EV charging station locations with real-time geolocation and map navigation. Features secure JWT-based authentication with Google OAuth, OTP verification, and modular architecture using Context API for state management.',
    // githubLink: '', // Add GitHub link if available
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.webappclouds.evmapdev',
    appStoreLink: 'https://apps.apple.com/lk/app/wac-charge-map/id6753712398',
    imageSrc: prj6Image,
    category: 'Mobile',
    technologies: ['React Native', 'JavaScript', 'REST APIs', 'JWT', 'Google OAuth', 'Context API']
  },
  {
    boxClass: 'project-box4',
    boxId: 'project-box4',
    faviconSrc: prj7Favicon,
    title: 'IMS PO Receiving App',
    description: 'A cross-platform mobile app (iOS/Android) to streamline purchase orders received for warehouse operations. Features JWT authentication with auto-refresh tokens, real-time dashboard with status filters, search, and pagination. Includes items receiving workflow with quantity validation, image capture, and multi-business support.',
    // githubLink: '', // Add GitHub link if available
    //liveLink: '',
    imageSrc: null,
    category: 'Mobile',
    technologies: ['React Native', 'JavaScript', 'REST APIs', 'JWT', 'iOS', 'Android']
  },
  {
    boxClass: 'project-box5',
    boxId: 'project-box5',
    faviconSrc: prj8Favicon,
    title: "Ibson's Choice Cafe App",
    description: 'A multi-branch food ordering app with menu browsing, custom cake ordering, and table reservations. Integrated PayHere payment gateway with secure server-side verification, real-time order tracking using FCM push notifications, and offline cart persistence using AsyncStorage. Built with clean architecture and 120+ reusable components.',
    // githubLink: '', // Add GitHub link if available
    //liveLink: '',
    imageSrc: null,
    category: 'Mobile',
    technologies: ['React Native', 'JavaScript', 'Firebase', 'PayHere', 'REST APIs', 'FCM', 'AsyncStorage']
  },
  {
    boxClass: 'project-box6',
    boxId: 'project-box6',
    faviconSrc: prj9Favicon,
    title: "Ibson's Eco Rentals App",
    description: 'A cross-platform mobile application for an eco-friendly electric vehicle rental service with booking system supporting both iOS and Android. Features scalable navigation architecture using React Navigation, global state management using Zustand and Context API with light/dark theme support, and native features including deep linking and platform-specific date pickers.',
    // githubLink: '', // Add GitHub link if available
    //liveLink: '',
    imageSrc: null,
    category: 'Mobile',
    technologies: ['React Native', 'TypeScript', 'Zustand', 'REST APIs', 'React Navigation', 'iOS', 'Android']
  },
  {
    boxClass: 'project-box7',
    boxId: 'project-box7',
    faviconSrc: prj1Favicon,
    title: 'NASA API Portal',
    description: "A responsive website built using React and Material UI. It utilizes NASA's public APIs to showcase intriguing images from space, including APOD images and Mars Rover photos.",
    githubLink: 'https://github.com/Janani-Withana/NasaApiPortal',
    liveLink: 'https://nasa-api-portal.vercel.app/apod',
    imageSrc: prj1Image,
    category: 'Web',
    technologies: ['React', 'Material UI', 'NASA API']
  },
  {
    boxClass: 'project-box8',
    boxId: 'project-box8',
    faviconSrc: prj2Favicon,
    title: 'Thilina Institute',
    description: 'Educational Institute Management System for Thilina Institute Hanwella, developed with the MERN stack. This features timetables, monthly payments, tutorials, and educational resources, streamlining administration and enhancing learning experiences.',
    githubLink: 'https://github.com/SLIITITP/ITP_WD_B02_08',
    // liveLink: '',
    imageSrc: prj2Image,
    category: 'Web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    boxClass: 'project-box9',
    boxId: 'project-box9',
    faviconSrc: prj3Favicon,
    title: 'Quick Tickets',
    description: 'Quick Tickets is a robust Movie Ticket Booking System developed with HTML, PHP, CSS, and SQL. Users can easily book movie tickets at their preferred theaters, with payments securely processed via Stripe.',
    githubLink: 'https://github.com/Janani-Withana/Movie-Ticket-Booking-System',
    //liveLink: '',
    imageSrc: prj3Image,
    category: 'Web',
    technologies: ['HTML', 'PHP', 'CSS', 'SQL', 'Stripe']
  },
];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Mobile', 'Web'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="projects-section-container" id="projects">
      <div className="projects-section-div">
        <div className="section-heading" data-aos="fade-up">
          <h2 className="section-heading-article" tabIndex="0" aria-label="My projects start from here">
            &#60;/Projects&#62;
          </h2>
          <p className="sectionHeadingP"></p>
        </div>

        {/* Category Filter Buttons */}
        <div className="project-filter-container" data-aos="fade-up" data-aos-delay="200">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
              aria-label={`Filter projects by ${category}`}
            >
              <span className="filter-btn-text">{category}</span>
              <span className="filter-btn-bg"></span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="project-boxes-div">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project.boxId} project={project} index={index} />
            ))
          ) : (
            <div className="no-projects-message" data-aos="fade-up">
              <p>No {activeFilter.toLowerCase()} projects to display.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
