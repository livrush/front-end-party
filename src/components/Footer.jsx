import React from 'react';

const Footer = () => (
  <footer className="footer">
    <h1 className="emoji-lg">
      <span role="img" aria-label="Party Popper">
        &#128064;
      </span>
    </h1>
    <h3 className="title-3">Hope to see you at the party!</h3>
    <div className="links-out title-3">
      <a
        href="https://www.meetup.com/FrontEndParty/events/"
        target="_blank"
        rel="noopener noreferrer"
        className="link-delay rainbow-text"
      >
        Meetup
      </a>
      &nbsp;
      <a
        href="https://twitter.com/frontendparty"
        target="_blank"
        rel="noopener noreferrer"
        className="link-delay rainbow-text"
      >
        Twitter
      </a>
      &nbsp;
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScFo6zMLuMkzkbbLTuSCfkDI-gI--t-633NXpzg9jJ9fz4LHQ/viewform?formkey=dC1SQlBHdU5yS2xKODR0bjR5QTFENHc6MQ"
        target="_blank"
        rel="noopener noreferrer"
        className="link-delay rainbow-text"
      >
        Apply
      </a>
    </div>
  </footer>
);

export default Footer;