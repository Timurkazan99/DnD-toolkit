import React from 'react';
import Icon from "./Icons.jsx";
import {useDispatch} from "react-redux";
import {actions as creatureActions} from "../store/reducers/CreatureSlice";

const EnemyItem = ({name, index, id, enemyId}) => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(creatureActions.delCreature({id, enemyId}));

  return (
    <li className="enemy-item">
      <span>
        <button
          className="enemy-delete"
          onClick={onClick}
        >
          <Icon icon="delete"/>
        </button>
        {name} {index}
      </span>
      <span>
        <Icon icon="hp"/>
        <input className="enemy-hp" type="text"/>
      </span>
    </li>
  );
};

export default EnemyItem;