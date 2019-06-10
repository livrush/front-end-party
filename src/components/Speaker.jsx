import React from 'react';
import presenters from '../archive/presenters.json';

const Speaker = ({
  title,
  presenter,
  description,
}) => {
  const speaker = presenters[presenter];

  console.log(speaker);

  return (
    <div className="speaker">
      <p>
        {presenter}
      </p>
      <p>
        {title}
      </p>
      <p>
        {description}
      </p>
    </div>
  );
};

export default Speaker;
