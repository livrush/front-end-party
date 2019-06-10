import React from 'react';

const Header = () => (
  <header className="header">
    <h1 className="emoji-lg">
      <span role="img" aria-label="Party Popper">
        &#127881;
      </span>
    </h1>
    <h2 className="title-2">
      #FrontEndParty
    </h2>
    <p className="title-4">
      A monthly&nbsp;
      <a 
        href="https://www.meetup.com/FrontEndParty/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="link-delay rainbow-text"
      >
        meetup
      </a>
      &nbsp;in <strong>New Orleans</strong>
      <br />
      for <strong>front-end developers</strong> and <strong>designer professionals</strong>.
    </p>
    <p className="title-4">
      Every <strong>third Tuesday</strong> at&nbsp;
      <a 
        href="https://www.acehotel.com/neworleans/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="link-delay rainbow-text"
      >
        <strong>Ace Hotel</strong>
      </a>
    </p>
  </header>
);

export default Header;