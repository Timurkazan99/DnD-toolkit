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
      <div className="d-flex justify-content-between">
        <span>Миньоны</span>
        <button className="add-button" onClick={onClick}><Icon icon="add"/></button>
      </div>
      <ul className="custom-list">
        {creatures.map(({id, index}) => (
            <EnemyItem
              key={id}
              index={index}
              name={name}
              id={id}
              enemyId={enemyId}
            />
        ))}
      </ul>
    </>
  );
};

export default EnemyList;