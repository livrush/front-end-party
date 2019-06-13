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
          <img className="speaker-headshot" src={headshot} alt="" />
        </div>
        <div className="speaker-information">
          <h3 class="speaker-name">{presenter}</h3>
          <div className="organizer-social-media">
            {speaker.social.website ? (
              <a
                href={speaker.social.website}
                className="speaker-social-link link-delay rainbow-text"
              >
                <i className="fas fa-globe" />
              </a>
            ) : null}
            {speaker.social.github ? (
              <a
                href={speaker.social.github}
                className="speaker-social-link link-delay rainbow-text"
              >
                <i className="fab fa-github" />
              </a>
            ) : null}
            {speaker.social.linkedin ? (
              <a
                href={speaker.social.linkedin}
                className="speaker-social-link link-delay rainbow-text"
              >
                <i className="fab fa-linkedin" />
              </a>
            ) : null}
            {speaker.social.twitter ? (
              <a
                href={speaker.social.twitter}
                className="speaker-social-link link-delay rainbow-text"
              >
                <i className="fab fa-twitter" />
              </a>
            ) : null}
          </div>
          <p className="speaker-presentation">{title}</p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Speaker;
