import React from 'react';
import PropTypes from 'prop-types';
import '../formatted.css';

const NpmPackageCard = ({ project, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 80}
      className="npm-package-wrapper"
    >
      <article className="npm-package-card" id={project.boxId}>
        <div className="npm-package-card-glow" aria-hidden="true" />
        <div className="npm-package-card-inner">
          <div className="npm-package-top">
            <span className="npm-package-badge">
              <span className="npm-package-badge-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M0 7.334v8h6.666V24h10.668V15.334H24V7.334H0zm6.666 6.666H3.333V10.667h3.333v3.333zm10.668 0h-3.334V10.667h3.334v3.333zm0-6.667H3.333V3.333h14.001v3.999z" />
                </svg>
              </span>
              npm
            </span>
            <a
              href="https://www.npmjs.com/~codehogs"
              target="_blank"
              rel="noopener noreferrer"
              className="npm-package-scope"
              aria-label="View @codehogs npm organization profile"
            >
              @codehogs
            </a>
          </div>

          <h3 className="npm-package-name">{project.shortName}</h3>
          <p className="npm-package-fullname" title={project.displayName}>
            {project.displayName}
          </p>
          <p className="npm-package-description">{project.description}</p>

          {project.technologies && project.technologies.length > 0 && (
            <div className="npm-package-tags">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="npm-package-tag">{tech}</span>
              ))}
            </div>
          )}

          <a
            href={project.npmLink}
            target="_blank"
            rel="noopener noreferrer"
            className="npm-package-cta"
            aria-label={`View ${project.displayName} on npm`}
          >
            <span>View on npm</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </article>
    </div>
  );
};

NpmPackageCard.propTypes = {
  project: PropTypes.shape({
    boxId: PropTypes.string.isRequired,
    shortName: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    npmLink: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  index: PropTypes.number
};

export default NpmPackageCard;
