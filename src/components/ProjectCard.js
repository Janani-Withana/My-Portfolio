import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import githubSVG from '../Assets/svg/github.svg'
import '../formatted.css'; // Import your CSS file for styling

const ProjectCard = ({ project, index }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const openImageModal = () => {
    setIsImageModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isImageModalOpen) {
        setIsImageModalOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    if (isImageModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isImageModalOpen]);

  return (
    <>
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
              {project.playStoreLink && (
                <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer" className="cta cta-android" aria-label={`${project.title} on Google Play`}>
                  <span>Android</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              )}
              {project.appStoreLink && (
                <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer" className="cta cta-ios" aria-label={`${project.title} on App Store`}>
                  <span>iOS</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              )}
              {project.liveLink && !project.playStoreLink && !project.appStoreLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="cta" aria-label={`Visit ${project.title} live`}>
                  <span>Live view</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              )}
              {project.liveLink && (project.playStoreLink || project.appStoreLink) && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="cta" aria-label={`Visit ${project.title} live`}>
                  <span>Web</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              )}
            </div>
          </div>
          {project.imageSrc && (
            <div
              className="image-div"
              onClick={openImageModal}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openImageModal(); } }}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
              aria-label={`View full size ${project.title} preview`}
            >
              <div className="image-overlay" aria-hidden="true" />
              <span className="image-preview-hint">Tap to preview</span>
              <img src={project.imageSrc} alt={`${project.title} preview`} loading="lazy" />
            </div>
          )}
        </div>
      </div>

      {/* Image Preview Modal */}
      {isImageModalOpen && project.imageSrc && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal} aria-label="Close image preview">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            <img src={project.imageSrc} alt={`${project.title} full preview`} className="image-modal-img" />
            <div className="image-modal-title">{project.title}</div>
          </div>
        </div>
      )}
    </>
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
    playStoreLink: PropTypes.string,
    appStoreLink: PropTypes.string,
    imageSrc: PropTypes.string,
    category: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  index: PropTypes.number
};

export default ProjectCard;
