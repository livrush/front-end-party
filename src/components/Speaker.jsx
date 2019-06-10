import React from 'react';
import presenters from '../archive/presenters.json';

const Speaker = ({
  title,
  presenter,
  description,
  style,
}) => {
  const speaker = presenters[presenter];

  console.log(speaker);

  return (
    <div style={style} className="speaker">
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
