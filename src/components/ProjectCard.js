import React from 'react';
import PropTypes from 'prop-types';
import githubSVG from '../Assets/svg/github.svg'
import '../formatted.css'; // Import your CSS file for styling

const ProjectCard = ({ project, index }) => {
  return (
    <div 
      data-aos="fade-up" 
      data-aos-delay={index * 100}
      className="project-box-wrapper"
    >
      <div className={`project-box ${project.boxClass} ${!project.imageSrc ? 'no-image' : ''}`} id={project.boxId}>
        <div className="info-div">
          <div className="project-header">
            <img src={project.faviconSrc} alt={`${project.title} favicon`} className="faviconforProject" />
            {project.category && (
              <span className={`project-category-badge category-${project.category.toLowerCase()}`}>
                {project.category}
              </span>
            )}
          </div>
          <article className="ProjectHeading">{project.title}</article>
          <p className="ProjectDescription">{project.description}</p>
          
          {project.technologies && project.technologies.length > 0 && (
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          )}

          <div className="project-buttons">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-redirect" aria-label={`Visit ${project.title} on GitHub`}>
                <img src={githubSVG} alt="github redirect button" />
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="cta" aria-label={`Visit ${project.title} live`}>
                <span>Live view</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            )}
          </div>
        </div>
        {project.imageSrc && (
          <div className="image-div">
            <div className="image-overlay"></div>
            <img src={project.imageSrc} alt={`${project.title} preview`} />
          </div>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    boxClass: PropTypes.string.isRequired,
    boxId: PropTypes.string.isRequired,
    faviconSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    githubLink: PropTypes.string,
    liveLink: PropTypes.string,
    imageSrc: PropTypes.string,
    category: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  index: PropTypes.number
};

export default ProjectCard;
