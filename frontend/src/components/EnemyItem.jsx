import React from 'react';
import Icon from "./Icons.jsx";
import {useDispatch} from "react-redux";
import {actions as creatureActions} from "../store/reducers/CreatureSlice";

const EnemyItem = ({name, index, id, enemyId}) => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(creatureActions.delCreature({id, enemyId}));

  return (
    <li className="custom-item">
      <button
        className="enemy-delete me-1"
        onClick={onClick}
      >
        <Icon icon="delete"/>
      </button>
      <span>
        {name} {index}
      </span>
      <span>
        <Icon icon="hp" className="me-1"/>
        <input className="enemy-hp" type="text"/>
      </span>
    </li>
  );
};

export default EnemyItem;