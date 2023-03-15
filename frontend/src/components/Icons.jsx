import React from 'react';
import "../styles/icons.scss";

const statusMap = {
  'armor': '/assets/img/armor.svg#armor',
  'attention': '/assets/img/attention.svg#attention',
  'speed': '/assets/img/speed.svg#speed',
  'initiativeBonus': '/assets/img/initiative.svg#initiative',
  'add': '/assets/img/add.svg#add',
  'hp': '/assets/img/hp.svg#hp',
  'delete': '/assets/img/delete.svg#delete',
  'previous': '/assets/img/previous.svg#previous',
  'next': '/assets/img/next.svg#next',
  'edit': '/assets/img/edit.svg#edit'
}

const Icon = ({icon, className}) => {
  const logo = statusMap[icon];
  return (
    <svg className={`bi-icon ${className}`}>
      <use href={logo}></use>
    </svg>
  );
};

Icon.defaultProps = {
  className: null
}

export default React.memo(Icon);