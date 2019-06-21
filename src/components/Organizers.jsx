import React from 'react';
import organizers from '../archive/organizers';

const Organizers = () => (
  <div className="organizers">
    {organizers.map(organizer => (
      <div className="organizer">
        <img
          src={organizer.headshot}
          className="organizer-headshot"
          alt={`${organizer.name}-headshot`}
        />
        <h4 className="organizer-name">{organizer.name}</h4>
        <p className="organizer-social-media">
          {organizer.social.website ? (
            <a
              href={organizer.social.website}
              className="organizer-social-link link-delay rainbow-text"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check out this organizer's website"
            >
              <i className="fas fa-globe" />
            </a>
          ) : null}
          {organizer.social.github ? (
            <a
              href={organizer.social.github}
              className="organizer-social-link link-delay rainbow-text"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check out this organizer's Github"
            >
              <i className="fab fa-github" />
            </a>
          ) : null}
          {organizer.social.linkedin ? (
            <a
              href={organizer.social.linkedin}
              className="organizer-social-link link-delay rainbow-text"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check out this organizer's LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
          ) : null}
          {organizer.social.twitter ? (
            <a
              href={organizer.social.twitter}
              className="organizer-social-link link-delay rainbow-text"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check out this organizer's Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
          ) : null}
        </p>
        <span className="organizer-emoji" role="img" alt="organizer-emoji">
          {organizer.emoji}
        </span>
      </div>
    ))}
  </div>
);

export default Organizers;
