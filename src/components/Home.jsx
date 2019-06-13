import React from 'react';
import Content from './Content';
import Presenters from './Presenters';
import Organizers from './Organizers';

const Home = () => {
  return (
    <div className="Home">
      <Content emoji="&#128161;" title="The Idea">
        <p>
          Are you a developer on the front-end side of things, looking to
          learn the latest HTML5 / CSS3 / Javascript tricks and hacks?
        </p>
        <p>
          Are you a designer who would love a second set of eyes on their
          latest work, or to talk about the newest design trends and styles?
        </p>
        <p>
          If this sounds like you, then come join us at the next
          #FrontEndParty and throw your ideas into the mix!
        </p>
      </Content>
      <Content emoji="&#127873;" title="The Format">
        <p>
          <strong>Three 15 minute presentations</strong>
        </p>
        <p>
          Each meeting will start with three lightning talks about front-end
          development and design, which should range from 5 to 15 minutes
          each. Want to talk about Backbone.js? Got some tips on Angular?
          Opinionated on OOCSS? Looking for design critiques from experienced
          professionals? We want to see you present!{' '}
          <a
            className="rainbow-text link-delay"
            href="https://docs.google.com/forms/d/e/1FAIpQLScFo6zMLuMkzkbbLTuSCfkDI-gI--t-633NXpzg9jJ9fz4LHQ/viewform?formkey=dC1SQlBHdU5yS2xKODR0bjR5QTFENHc6MQ"
          >
            Apply here to talk!
          </a>
        </p>
        <p>
          <strong>Discuss & Network</strong>
        </p>
        <p>
          After our presentations, we’ll open the room up to general
          conversation so folks can network with both the speakers and each
          other. One of our main goals for this meetup is help introduce
          developers to each other and possibly share ideas / solutions to
          common front-end development problems.
        </p>
      </Content>
      <Content emoji="&#128111;" title="This Month's Presenters">
        <Presenters />
        <p>
          Check out our{' '}
          <a href="/archive" className="rainbow-text link-delay">
            presentation archive!
          </a>
        </p>
      </Content>
      <Content emoji="&#128205;" title="The When & Where">
        <p>#FrontEndParty meets the third Tuesday of every month.</p>
        <p>
          Our gracious host for the meetup is the&nbsp;
          <a
            className="rainbow-text link-delay"
            href="http://threekeysnola.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            3 Keys Lounge
          </a>
          &nbsp;at the&nbsp;
          <a
            className="rainbow-text link-delay"
            href="https://www.acehotel.com/neworleans/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ace Hotel
          </a>
          .
        </p>
        <p>
          We start the presentations around 7:00pm or so, but feel free to
          come earlier if you like and grab a drink at the lobby bar.&nbsp;
          <a
            className="rainbow-text link-delay"
            href="http://nolahacknight.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hack Night
          </a>
          &nbsp;will be running around the same time, so there will be cool
          people around!
        </p>
        <p>
          You can find all of this information and more on our&nbsp;
          <a
            className="rainbow-text link-delay"
            href="https://www.meetup.com/FrontEndParty/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meetup page
          </a>
          .
        </p>
      </Content>
      <Content emoji="&#127752;" title="The Organizers">
        <p>Here are some helpful faces to look for when you arrive:</p>
        <Organizers />
      </Content>
    </div>
  );
};

export default Home;
