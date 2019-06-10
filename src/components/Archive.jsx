import React from 'react';
import Meetup from './Meetup';
import archive from '../archive/meetups.json';

const Archive = () => {
  const meetups = archive.map(meetup => (
    <Meetup {...meetup} />
  ));
  return (
    <div className="archive">
      {meetups}
    </div>
  );
};

export default Archive;
