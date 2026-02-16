// src/App.js

import React, { useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import PortfolioPage from './pages/PortfolioPage';
import SkillsPage from './pages/SkillsPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar'; // Import NavBar component
import 'aos/dist/aos.css';
import './formatted.css'; // Import your CSS file for styling
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <NavBar/>
      <HomePage />
      <AboutPage />
      <ExperiencePage />
      <SkillsPage />
      <PortfolioPage />
      <Footer/>
    </div>
  );
}

export default App;
