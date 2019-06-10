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
      <div className="speaker-header">
        <div className="speaker-header-left">
          <img className="speaker-headshot" src={headshot} alt=""/>
        </div>
        <div className="speaker-header-right">
          <p>
            <strong>
              {presenter}
            </strong>
          </p>
        </div>
      </div>
      <p>
        {title}
      </p>
      <p>
        {description}
      </p>
    </div>
  );
};

export default Speaker;
