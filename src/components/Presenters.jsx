import React, { Component, Fragment } from 'react';
import moment from 'moment';
import archive from '../archive/meetups.json';
import Speaker from './Speaker';

class Presenters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardStyles: [
        {
          'zIndex': 30,
          top: '0rem',
        },
        {
          'zIndex': 20,
          top: '1rem',
        },
        {
          'zIndex': 10,
          top: '2rem',
        },
      ],
    };
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick() {
    const { cardStyles } = this.state;
    const [ one, two, three ] = cardStyles;
    console.log(one, two, three);
    this.setState({ cardStyles: [ three, one, two ]});
  }

  render() {
    const { cardStyles } = this.state;

    const today = moment();
    const month = today.format('MMMM');
    const year = today.format('YYYY');

    const [ mostRecentMeetup ] = archive;
    const { date } = mostRecentMeetup;
    /* eslint-disable-next-line no-unused-vars */
    const [ recentMonth, recentDay, recentYear ] = date.split(' ');

    let speakers;
    if (month === recentMonth && year === recentYear) {
      const speakerCards = mostRecentMeetup.talks.map((talk, i) => {
        return <Speaker key={talk + i} style={cardStyles[i]} {...talk} />;
      });
      speakers = (
        <div className="presenters-container">
          <div className="presenters" onClick={this.handleCardClick}>
            {speakerCards}
          </div>
          <p>
            Our next meetup will be on <span className="bold">{date}</span>.&nbsp;
            <a
              href={mostRecentMeetup.meetup}
              className="rainbow-text link-delay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check out the Meetup page for this month's event">RSVP today!</a>
          </p>
        </div>
      );
    } else {
      speakers = (
        <Fragment>
          <p className="emoji-lg no-speaker-monkey">
            <span role="img" aria-label="monkey-with-eyes-closed-emoji">
              &#128584;
            </span>
          </p>
          <p className="presenters-tbd">
            Come back soon for this month's speakers!
          </p>
        </Fragment>
      );
    }

    return speakers;
  };
};

export default Presenters;
