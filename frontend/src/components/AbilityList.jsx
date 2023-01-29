import React from 'react';
import Icon from "./Icons.jsx";
import {batch, useDispatch, useSelector} from "react-redux";
import {getAbilitiesByEnemyId} from "../store/selectors";
import AbilityItem from "./AbilityItem.jsx";
import {onShow} from "../store/reducers/UiSlice";
import {actions as cardActions} from "../store/reducers/CardSlice";

const AbilityList = ({enemyId}) => {
  const dispatch = useDispatch();
  const abilities = useSelector((state) => getAbilitiesByEnemyId(state, enemyId));
  const onClick = () => {
    batch(() => {
      dispatch(cardActions.setSelected(enemyId))
      dispatch(onShow("addAbility"));
    });
  }

  return (
    <>
      <div className="d-flex justify-content-between">
        <span>Способности</span>
        <button className="add-button" onClick={onClick}><Icon icon="add"/></button>
      </div>
      <ul className="custom-list">
        {abilities.map(({id, name, description}) => (
          <AbilityItem
            key={id}
            name={name}
            id={id}
            description={description}
          />
        ))}
      </ul>
    </>
  );
};

export default AbilityList;