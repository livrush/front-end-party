import React, { Fragment } from 'react';

const Talk = ({
  presenter,
  title,
  description,
}) => (
  <Fragment>
    <h4 className="talk-title">{title}</h4>
    <p className="talk-presenter">
      {presenter}
    </p>
    <p className="talk-description">
      {description}
    </p>
  </Fragment>
);

export default Talk;
