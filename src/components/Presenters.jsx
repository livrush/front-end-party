import React from 'react';
import moment from 'moment';
import archive from '../archive/meetups.json';
import Speaker from './Speaker';

const Presenters = () => {
  const today = moment();
  const month = today.format('MMMM');
  const year = today.format('YYYY');

  const [ mostRecentMeetup ] = archive;
  const { date } = mostRecentMeetup;
  /* eslint-disable-next-line no-unused-vars */
  const [ recentMonth, recentDay, recentYear ] = date.split(' ');

  let speakers;
  if (month === recentMonth && year === recentYear) {
    speakers = mostRecentMeetup.talks.map((talk, i) => {
      return <Speaker key={talk + i} {...talk} />;
    });
  } else {
    speakers = 'Check back soon for this month\'s speakers!';
  }

  return (
    <div className="presenters">
      { speakers }
    </div>
  );
};

export default Presenters;
