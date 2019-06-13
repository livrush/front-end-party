import React from 'react';
import organizers from '../archive/organizers';

const Organizers = () => (
  <div className="organizers">
    {
      organizers.map(organizer => (
        <div className="organizer">
          <img src={organizer.headshot} className="organizer-headshot" alt={`${organizer.name}-headshot`} />
          <h4 className="organizer-name">{organizer.name}</h4>
          <p className="organizer-social-media">
            {
              organizer.social.website ?
              <a href={organizer.social.website} className="organizer-social-link link-delay rainbow-text">
                <i className="fas fa-globe"></i>
              </a> :
              null
            }
            {
              organizer.social.github ?
              <a href={organizer.social.github} className="organizer-social-link link-delay rainbow-text">
                <i className="fab fa-github"></i>
              </a> :
              null
            }
            {
              organizer.social.linkedin ?
              <a href={organizer.social.linkedin} className="organizer-social-link link-delay rainbow-text">
                <i className="fab fa-linkedin"></i>
              </a> :
              null
            }
            {
              organizer.social.twitter ?
              <a href={organizer.social.twitter} className="organizer-social-link link-delay rainbow-text">
                <i className="fab fa-twitter"></i>
              </a> :
              null
            }
          </p>
          <span className="organizer-emoji" role="img">{organizer.emoji}</span>
        </div>
      ))
    }
  </div>
);

export default Organizers;
