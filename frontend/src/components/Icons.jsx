import React from 'react';
import "../styles/icons.scss";

const statusMap = {
  'armor': '/assets/img/armor.svg#armor',
  'attention': '/assets/img/attention.svg#attention',
  'speed': '/assets/img/speed.svg#speed',
  'initiative': '/assets/img/initiative.svg#initiative',
}

const Icon = ({icon, value, className}) => {
  const logo = statusMap[icon];
  return (
    <div className={className}>
      <svg className="bi-icon" style={{height: '16px', width: '16px'}}>
        <use href={logo}></use>
      </svg>
      <label>{value}</label>
    </div>
  );
};

export default Icon;