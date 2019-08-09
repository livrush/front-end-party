import React from 'react';
import Meetup from './Meetup';
import archive from '../archive/meetups.json';

const Archive = () => {
  const meetups = archive.map(meetup => (
    <Meetup key={`fep-${meetup.id}`} {...meetup} />
  ));
  return (
    <div className="archive">
      {meetups}
    </div>
  );
};

export default Archive;
