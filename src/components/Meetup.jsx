import React from 'react';
import Talk from './Talk';

const Meetup = ({
  id,
  date,
  meetup,
  talks,
}) => {
  const meetupTalks = talks.map(talk => <Talk {...talk} />);
  return (
    <div className="meetup">
      <div className="meetup-header">
        <h2>#FrontEndParty {id}</h2>
        <h3>
          <span role="img" aria-label="Calendar">&#128197;</span>
          &nbsp;
          <a
            className="rainbow-text link-delay"
            href={meetup}
            target="_blank"
            rel="noopener noreferrer"
          >
            {date}
          </a>
        </h3>
        {meetupTalks}
      </div>
    </div>
  )
};

export default Meetup;