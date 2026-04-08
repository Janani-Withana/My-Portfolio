// src/PortfolioPage.js

import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import NpmPackageCard from '../components/NpmPackageCard';
import '../formatted.css'; // Import your CSS file for styling

// Importing images
import prj1Favicon from'../Assets/webp/LilyLanka.png';
import prj2Favicon from '../Assets/webp/ChargeMapLogo.png';
import prj3Favicon from '../Assets/webp/Sri GoviyaLogo.png';
import prj4Favicon from '../Assets/webp/SnapMindLogo.png';
import prj5Favicon from '../Assets/webp/IMSLogo.png';
import prj6Favicon from '../Assets/webp/IbsonsChoiceCafeLogo.png';
import prj7Favicon from '../Assets/webp/EcoRentalsLogo.png';
import prj8Favicon from '../Assets/webp/NasaLogo.png';
import prj9Favicon from '../Assets/webp/ThilinaLogo.png';
import prj10Favicon from '../Assets/webp/MovieTicketBookinglogo.png';
import prj11Favicon from '../Assets/webp/Cognivex.png';




import prj1Image from '../Assets/webp/LilyLankaFlyer.png';
import prj2Image from '../Assets/webp/ChargeMapFlyer.jpg';
import prj3Image from '../Assets/webp/SriGoviyaFlyer.png';
import prj4Image from '../Assets/webp/SnapMindFlyer.png';
import prj8Image from '../Assets/webp/CosmoScopeBanner.png';
import prj9Image from '../Assets/webp/ThilinaInstitute.png';
import prj10Image from '../Assets/webp/MovieTicketBooking2.jpg';
import prj11Image from '../Assets/webp/CognivexBanner.png';

const COGNIVEX_FIGMA =
  'https://www.figma.com/proto/Qi3WzXAXN0I37aVXnunlU4/Cognivex?node-id=1-2&p=f&t=la0ny4sHGrgWfBaU-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1';

const projects = [

  /* Mobile Projects */
  {
    boxClass: 'project-box1',
    boxId: 'project-box1',
    faviconSrc: prj1Favicon,
    title: 'Lily Lanka',
    description: 'A production-grade React Native cross-platform tourism management app for Sri Lanka. Features bookings, tour management, itineraries, and real-time location-based experiences with reusable UI, scalable navigation, and RESTful API integrations.',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.lilylanka_mobile',
    appStoreLink: 'https://apps.apple.com/lk/app/lily-lanka/id6760127534',
    imageSrc: prj1Image,
    category: 'Mobile',
    technologies: ['React Native', 'JavaScript', 'REST APIs', 'Maps', 'Navigation']
  },
  {
    boxClass: 'project-box2',
    boxId: 'project-box2',
    faviconSrc: prj2Favicon,
    title: 'WAC Charge Map',
    description: 'A cross-platform mobile app for discovering and crowdsourcing EV charging station locations with real-time geolocation and map navigation. Features secure JWT-based authentication with Google OAuth, OTP verification, and modular architecture using Context API for state management.',
    // githubLink: '', // Add GitHub link if available
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.webappclouds.evmapdev',
    appStoreLink: 'https://apps.apple.com/lk/app/wac-charge-map/id6753712398',
    imageSrc: prj2Image,
    category: 'Mobile',
    technologies: ['React Native', 'JavaScript', 'REST APIs', 'JWT', 'Google OAuth', 'Context API']
  },
  {
    boxClass: 'project-box3',
    boxId: 'project-box3',
    faviconSrc: prj3Favicon,
    title: 'Sri Goviya',
    description: 'A Mobile app developed with Flutter-Firebase enabling farmers to sell harvests directly to buyers. Offers tools for crop management, weather forecasts, pest control, and more to enhance the farming experience.',
    githubLink: 'https://github.com/Pamitha-Pankaja/UEE-WE-53',
    //liveLink: '',
    imageSrc: prj3Image,
    category: 'Mobile',
    technologies: ['Flutter', 'Firebase', 'Dart']
  },
  {
    boxClass: 'project-box4',
    boxId: 'project-box4',
    faviconSrc: prj4Favicon,
    title: 'Snap Mind',
    description: 'SnapMind is a cutting-edge Android app powered by the Gemini Pro API, designed using Kotlin to enhance image intelligence experience. SnapMind is the perfect tool for quick and precise image analysis.',
    githubLink: 'https://github.com/Janani-Withana/SnapMind',
    //liveLink: '',
    imageSrc: prj4Image,
    category: 'Mobile',
    technologies: ['Kotlin', 'Android', 'Gemini Pro API']
  },
  {
    boxClass: 'project-box5',
    boxId: 'project-box5',
    faviconSrc: prj5Favicon,
    title: 'IMS PO Receiving App',
    description: 'A cross-platform mobile app (iOS/Android) to streamline purchase orders received for warehouse operations. Features JWT authentication with auto-refresh tokens, real-time dashboard with status filters, search, and pagination. Includes items receiving workflow with quantity validation, image capture, and multi-business support.',
    // githubLink: '', // Add GitHub link if available
    //liveLink: '',
    imageSrc: null,
    category: 'Mobile',
    technologies: ['React Native', 'JavaScript', 'REST APIs', 'JWT', 'iOS', 'Android']
  },
  {
    boxClass: 'project-box6',
    boxId: 'project-box6',
    faviconSrc: prj6Favicon,
    title: "Ibson's Choice Cafe App",
    description: 'A multi-branch food ordering app with menu browsing, custom cake ordering, and table reservations. Integrated PayHere payment gateway with secure server-side verification, real-time order tracking using FCM push notifications, and offline cart persistence using AsyncStorage. Built with clean architecture and 120+ reusable components.',
    // githubLink: '', // Add GitHub link if available
    //liveLink: '',
    imageSrc: null,
    category: 'Mobile',
    technologies: ['React Native', 'JavaScript', 'Firebase', 'PayHere', 'REST APIs', 'FCM', 'AsyncStorage']
  },
  {
    boxClass: 'project-box7',
    boxId: 'project-box7',
    faviconSrc: prj7Favicon,
    title: "Ibson's Eco Rentals App",
    description: 'A cross-platform mobile application for an eco-friendly electric vehicle rental service with booking system supporting both iOS and Android. Features scalable navigation architecture using React Navigation, global state management using Zustand and Context API with light/dark theme support, and native features including deep linking and platform-specific date pickers.',
    // githubLink: '', // Add GitHub link if available
    //liveLink: '',
    imageSrc: null,
    category: 'Mobile',
    technologies: ['React Native', 'TypeScript', 'Zustand', 'REST APIs', 'React Navigation', 'iOS', 'Android']
  },

  /* Web Projects */
  {
    boxClass: 'project-box8',
    boxId: 'project-box8',
    faviconSrc: prj8Favicon,
    title: 'CosmoScope',
    description: 'A modern, interactive space exploration web app built with React and Vite, powered by NASA public APIs. Explore Astronomy Picture of the Day, Mars Rover imagery, Earth imagery, and more—with animated, responsive UI using Tailwind CSS and Framer Motion.',
    githubLink: 'https://github.com/Janani-Withana/CosmoScope',
    liveLink: 'https://cosmo-scope.vercel.app/',
    imageSrc: prj8Image,
    category: 'Web',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'NASA API']
  },
  {
    boxClass: 'project-box9',
    boxId: 'project-box9',
    faviconSrc: prj9Favicon,
    title: 'Thilina Institute',
    description: 'Educational Institute Management System for Thilina Institute Hanwella, developed with the MERN stack. This features timetables, monthly payments, tutorials, and educational resources, streamlining administration and enhancing learning experiences.',
    githubLink: 'https://github.com/SLIITITP/ITP_WD_B02_08',
    // liveLink: '',
    imageSrc: prj9Image,
    category: 'Web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    boxClass: 'project-box10',
    boxId: 'project-box10',
    faviconSrc: prj10Favicon,
    title: 'Quick Tickets',
    description: 'Quick Tickets is a robust Movie Ticket Booking System developed with HTML, PHP, CSS, and SQL. Users can easily book movie tickets at their preferred theaters, with payments securely processed via Stripe.',
    githubLink: 'https://github.com/Janani-Withana/Movie-Ticket-Booking-System',
    //liveLink: '',
    imageSrc: prj10Image,
    category: 'Web',
    technologies: ['HTML', 'PHP', 'CSS', 'SQL', 'Stripe']
  },

  /* UI/UX Projects */
  {
    boxClass: 'project-box11',
    boxId: 'project-box11',
    faviconSrc: prj11Favicon,
    title: 'Cognivex',
    description:
      'Product UX exploration in Figma—interactive flows, layout hierarchy, and micro-interactions in a clickable prototype. Demonstrates structured thinking from information architecture to polished UI before engineering.',
    figmaLink: COGNIVEX_FIGMA,
    imageSrc: prj11Image,
    category: 'UI/UX',
    technologies: ['Figma', 'Prototyping', 'UX', 'Interaction design']
  },

  /* OpenSource Projects */
  {
    boxId: 'npm-otp-fields',
    shortName: 'react-native-otp-fields',
    displayName: '@codehogs/react-native-otp-fields',
    description: 'Configurable OTP input fields for React Native with masking, auto-focus, and validation—built for smooth auth and verification flows.',
    npmLink: 'https://www.npmjs.com/package/@codehogs/react-native-otp-fields',
    category: 'OpenSource',
    projectType: 'npm',
    technologies: ['React Native', 'OTP', 'UI']
  },
  {
    boxId: 'npm-theme-engine',
    shortName: 'react-native-theme-engine',
    displayName: '@codehogs/react-native-theme-engine',
    description: 'A flexible theme engine for React Native apps—manage light/dark modes, tokens, and runtime theme switching with minimal boilerplate.',
    npmLink: 'https://www.npmjs.com/package/@codehogs/react-native-theme-engine',
    category: 'OpenSource',
    projectType: 'npm',
    technologies: ['React Native', 'Theming', 'Context']
  },
  {
    boxId: 'npm-country-phone',
    shortName: 'rn-country-phone-codes',
    displayName: '@codehogs/rn-country-phone-codes',
    description: 'Country dial codes and phone utilities for React Native—pickers, formatting helpers, and consistent international input handling.',
    npmLink: 'https://www.npmjs.com/package/@codehogs/rn-country-phone-codes',
    category: 'OpenSource',
    projectType: 'npm',
    technologies: ['React Native', 'i18n', 'Phone']
  },
  {
    boxId: 'npm-form-builder',
    shortName: 'form-auto-builder',
    displayName: '@codehogs/form-auto-builder',
    description: 'Schema-driven form builder utilities to generate and validate forms with less manual wiring—ideal for dashboards and admin flows.',
    npmLink: 'https://www.npmjs.com/package/@codehogs/form-auto-builder',
    category: 'OpenSource',
    projectType: 'npm',
    technologies: ['JavaScript', 'Forms', 'Validation']
  },


];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Mobile', 'Web', 'UI/UX', 'OpenSource'];

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
            filteredProjects.map((project, index) =>
              project.projectType === 'npm' ? (
                <NpmPackageCard key={project.boxId} project={project} index={index} />
              ) : (
                <ProjectCard key={project.boxId} project={project} index={index} />
              )
            )
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
