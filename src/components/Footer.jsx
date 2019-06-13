import React from 'react';
import links from '../archive/links';

const Footer = () => (
  <footer className="footer">
    <h1 className="emoji-lg">
      <span role="img" aria-label="Party Popper">
        &#128064;
      </span>
    </h1>
    <h3 className="title-3">Hope to see you at the party!</h3>
    <div className="links-out title-3">
      <div className="links-out-section">
        <a
          href={links.meetup}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link link-delay rainbow-text"
        >
          <i className="fab fa-meetup" />
        </a>
        <a
          href={links.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link link-delay rainbow-text"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          href={links.presentationApplication}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link link-delay rainbow-text"
        >
          <i className="fas fa-paper-plane" />
        </a>
      </div>
      <div className="links-out-section">
        <a href="/archive" className="footer-link link-delay rainbow-text">
          <i className="fas fa-book" />
        </a>
        <a
          href="/code-of-conduct"
          className="footer-link link-delay rainbow-text"
        >
          <i className="fas fa-gavel" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;