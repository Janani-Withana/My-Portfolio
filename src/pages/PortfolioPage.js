// src/PortfolioPage.js

import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../formatted.css'; // Import your CSS file for styling

// Importing images
import prj1Favicon from '../Assets/webp/NasaLogo.png';
import prj2Favicon from '../Assets/webp/MovieTicketBookinglogo.png';
import prj3Favicon from '../Assets/svg/aquaregia-favicon.svg';
import prj4Favicon from '../Assets/webp/qr-favicon.webp';
import prj5Favicon from '../Assets/ico/netflixfavicon.ico';
import prj6Favicon from '../Assets/webp/axocean-favicon.webp';

import prj1Image from '../Assets/webp/NasaLandingPage.PNG';
import prj2Image from '../Assets/webp/MovieTicketBooking2.jpg';
import prj3Image from '../Assets/webp/Aquaregia-project.webp';
import prj4Image from '../Assets/webp/QRgeneratorProject.webp';
import prj5Image from '../Assets/webp/NetflixCloneProject.webp';
import prj6Image from '../Assets/webp/AXOCEAN-project.webp';

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
    title: 'Quick Tickets',
    description: 'Quick Tickets is a robust Movie Ticket Booking System developed with HTML, PHP, CSS, and SQL. Users can easily book movie tickets at their preferred theaters, with payments securely processed via Stripe.',
    githubLink: 'https://github.com/Janani-Withana/Movie-Ticket-Booking-System',
    //liveLink: '',
    imageSrc: prj2Image
  },
  // {
  //   boxClass: 'project-box3',
  //   boxId: 'project-box3',
  //   faviconSrc: prj3Favicon,
  //   title: 'Aquaregia',
  //   description: 'A website for University Maharaja College fest "Aquaregia" for event registrations.',
  //   githubLink: 'https://github.com/vinodjangid07/Aquaregia',
  //   liveLink: 'https://vinodjangid.site/Aquaregia/',
  //   imageSrc: prj3Image
  // },
  // {
  //   boxClass: 'project-box4',
  //   boxId: 'project-box4',
  //   faviconSrc: prj4Favicon,
  //   title: 'QR Generator',
  //   description: 'A webpage to make a QR Code from text using API.',
  //   githubLink: 'https://github.com/vinodjangid07/QR-Generator',
  //   liveLink: 'https://vinodjangid.site/QR-Generator/',
  //   imageSrc: prj4Image
  // },
  // {
  //   boxClass: 'project-box5',
  //   boxId: 'project-box5',
  //   faviconSrc: prj5Favicon,
  //   title: 'React Netflix Clone',
  //   description: 'A webpage to categorize the shows to redirect user to watch the show.',
  //   githubLink: 'https://github.com/vinodjangid07/Netflix-clone',
  //   liveLink: 'https://react-project-20.netlify.app/',
  //   imageSrc: prj5Image
  // },
  // {
  //   boxClass: 'project-box6',
  //   boxId: 'project-box6',
  //   faviconSrc: prj6Favicon,
  //   title: 'AXOCEAN',
  //   description: 'E-commerce website frontend work to choose people their favorite design of product and redirect to flipkart shopping site.',
  //   githubLink: 'https://github.com/vinodjangid07/AXOCEAN',
  //   liveLink: 'https://www.vinodjangid.site/AXOCEAN/',
  //   imageSrc: prj6Image
  // }
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
