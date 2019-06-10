import React from 'react';

const Content = ({
  children,
  emoji,
  title,
}) => (
  <div className="content">
    <h2 className="content-title">
      {emoji}&nbsp;{title}
    </h2>
    <div className="content-body">
      {children}
    </div>
  </div>
);

export default Content;
