import React from 'react';
import presenters from '../archive/presenters.json';

const Speaker = ({
  title,
  presenter,
  description,
  style,
}) => {
  const speaker = presenters[presenter];

  const headshot = speaker.headshot
    ? speaker.headshot
    : `https://avatars.dicebear.com/v2/identicon/${speaker.name}.svg`;

  return (
    <div style={style} className="speaker">
      <div className="speaker-top">
        <div className="speaker-headshot-container">
          <img className="speaker-headshot" src={`/images/headshots/${headshot}`} alt="" />
        </div>
        <div className="speaker-information">
          <h3 className="speaker-text--side speaker-name">{presenter}</h3>
          {speaker.position ? (
            <p className="speaker-text--side speaker-position">{speaker.position}</p>
          ) : null}
          <div className="speaker-text--side speaker-social-media">
            {speaker.social.website ? (
              <a
                href={speaker.social.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Check out this speaker's website"
                className="speaker-social-link link-delay rainbow-text"
              >
                <i className="fas fa-globe" />
              </a>
            ) : null}
            {speaker.social.github ? (
              <a
                href={speaker.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Check out this speaker's Github"
                className="speaker-social-link link-delay rainbow-text"
              >
                <i className="fab fa-github" />
              </a>
            ) : null}
            {speaker.social.linkedin ? (
              <a
                href={speaker.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Check out this speaker's LinkedIn"
                className="speaker-social-link link-delay rainbow-text"
              >
                <i className="fab fa-linkedin" />
              </a>
            ) : null}
            {speaker.social.twitter ? (
              <a
                href={speaker.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Check out this speaker's Twitter"
                className="speaker-social-link link-delay rainbow-text"
              >
                <i className="fab fa-twitter" />
              </a>
            ) : null}
          </div>
          <h4 className="speaker-text--side speaker-presentation">{title}</h4>
        </div>
      </div>
      <p className="speaker-description">{description}</p>
    </div>
  );
};

export default Speaker;
