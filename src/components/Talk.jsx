import React, { Fragment } from 'react';

const Talk = ({
  presenter,
  title,
  description,
}) => (
  <Fragment>
    <h3 className="talk-presenter">
      {presenter}
    </h3>
    <p className="talk-title">
      {title}
    </p>
    <p className="talk-description">
      {description}
    </p>
  </Fragment>
);

export default Talk;
