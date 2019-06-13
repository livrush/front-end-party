import React, { Fragment } from 'react';
import Talk from './Talk';

const Meetup = ({
  id,
  date,
  meetup,
  talks,
}) => {
  const meetupTalks = talks.map(talk => <Talk {...talk} />);
  return (
    <Fragment>
      <div className="meetup">
        <div className="meetup-header">
          <h1 className="meetup-number">#FrontEndParty {id}</h1>
          <h2 className="meetup-date">
            <span role="img" aria-label="Calendar">
              &#128197;
            </span>
            &nbsp;
            <a
              className="rainbow-text link-delay"
              href={meetup}
              target="_blank"
              rel="noopener noreferrer"
            >
              {date}
            </a>
          </h2>
          {meetupTalks}
        </div>
      </div>
      <hr className="meetup-divider" />
    </Fragment>
  );
};

export default Meetup;