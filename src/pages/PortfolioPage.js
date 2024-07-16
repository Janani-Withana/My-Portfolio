// src/PortfolioPage.js

import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../formatted.css'; // Import your CSS file for styling

// Importing images
import prj1Favicon from '../Assets/webp/NasaLogo.png';
import prj2Favicon from '../Assets/webp/ThilinaLogo.png';
import prj3Favicon from '../Assets/webp/MovieTicketBookinglogo.png';
import prj4Favicon from '../Assets/webp/Sri GoviyaLogo.png';
import prj5Favicon from '../Assets/webp/SnapMindLogo.png';

import prj1Image from '../Assets/webp/NasaLandingPage.PNG';
import prj2Image from '../Assets/webp/ThilinaInstitute.png';
import prj3Image from '../Assets/webp/MovieTicketBooking2.jpg';
import prj4Image from '../Assets/webp/SriGoviyaFlyer.png';
import prj5Image from '../Assets/webp/SnapMindFlyer.png';

const projects = [
  {
    boxClass: 'project-box1',
    boxId: 'project-box1',
    faviconSrc: prj1Favicon,
    title: 'NASA API Portal',
    description: "A responsive website built using React and Material UI. It utilizes NASA's public APIs to showcase intriguing images from space, including APOD images and Mars Rover photos.",
    githubLink: 'https://github.com/Janani-Withana/NasaApiPortal',
    liveLink: 'https://nasa-api-portal.vercel.app/apod',
    imageSrc: prj1Image
  },
  {
    boxClass: 'project-box2',
    boxId: 'project-box2',
    faviconSrc: prj2Favicon,
    title: 'Thilina Institute',
    description: 'Educational Institute Management System for Thilina Institute Hanwella, developed with the MERN stack. This features timetables, monthly payments, tutorials, and educational resources, streamlining administration and enhancing learning experiences.',
    githubLink: 'https://github.com/SLIITITP/ITP_WD_B02_08',
    // liveLink: '',
    imageSrc: prj2Image
  },
  {
    boxClass: 'project-box3',
    boxId: 'project-box3',
    faviconSrc: prj3Favicon,
    title: 'Quick Tickets',
    description: 'Quick Tickets is a robust Movie Ticket Booking System developed with HTML, PHP, CSS, and SQL. Users can easily book movie tickets at their preferred theaters, with payments securely processed via Stripe.',
    githubLink: 'https://github.com/Janani-Withana/Movie-Ticket-Booking-System',
    //liveLink: '',
    imageSrc: prj3Image
  },
  {
    boxClass: 'project-box4',
    boxId: 'project-box4',
    faviconSrc: prj4Favicon,
    title: 'Sri Goviya',
    description: ' A Mobile app developed with Flutter-Firebase enabling farmers to sell harvests directly to buyers. Offers tools for crop management, weather forecasts, pest control, and more to enhance the farming experience.',
    githubLink: 'https://github.com/Pamitha-Pankaja/UEE-WE-53',
    //liveLink: '',
    imageSrc: prj4Image
  },
  {
    boxClass: 'project-box5',
    boxId: 'project-box5',
    faviconSrc: prj5Favicon,
    title: 'Snap Mind',
    description: 'SnapMind is a cutting-edge Android app powered by the Gemini Pro API, designed using Kotlin to enhance image intelligence experience. SnapMind is the perfect tool for quick and precise image analysis.',
    githubLink: 'https://github.com/Janani-Withana/SnapMind',
    //liveLink: '',
    imageSrc: prj5Image
  },
];

const PortfolioPage = () => {
  return (
    <section className="projects-section-container" id="projects">
      <div className="projects-section-div">
        <div className="section-heading" data-aos="fade-up">
          <h2 className="section-heading-article" tabIndex="0" aria-label="My projects start from here">
            &#60;/Projects&#62;
          </h2>
          <p className="sectionHeadingP"></p>
        </div>
        <div className="project-boxes-div">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
