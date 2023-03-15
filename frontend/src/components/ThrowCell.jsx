import React from 'react';

const ThrowCell = ({type, throwDice}) => {
  return (
    <div className={`throw-cell ${type}`}>{throwDice}</div>
  );
};

export default React.memo(ThrowCell);