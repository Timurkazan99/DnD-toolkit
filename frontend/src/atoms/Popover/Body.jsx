import React from 'react';

const Body = ({className, children}) => {
  return (
    <div className={`popover-body ${className}`}>
      {children}
    </div>
  );
};

export default Body;