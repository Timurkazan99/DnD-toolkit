import React from 'react';

const Header = ({className, children}) => {
  return (
    <div className={`popover-header ${className}`}>
      {children}
    </div>
  );
};

export default Header;