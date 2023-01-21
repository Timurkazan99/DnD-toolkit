import React from 'react';
import Icon from "./Icons.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getCreaturesByEnemyId} from "../store/selectors";
import {actions as creatureActions} from "../store/reducers/CreatureSlice";
import EnemyItem from "./EnemyItem.jsx";

const EnemyList = ({name, enemyId, lastIndex}) => {
  const dispatch = useDispatch();
  const creatures = useSelector((state) => getCreaturesByEnemyId(state, enemyId));
  const onClick = () => {
    dispatch(creatureActions.addCreature({id: Date.now(), enemyId, index: lastIndex + 1}));
  }

  return (
    <>
      <ul className="enemy-list">
        {creatures.map(({id, index}) => (
            <EnemyItem
              key={id}
              index={index}
              name={name}
              id={id}
              enemyId={enemyId}
            />
        ))}
        <li>
          <button className="add-creature" onClick={onClick}><Icon icon="add"/></button>
        </li>
      </ul>

    </>
  );
};

export default EnemyList;