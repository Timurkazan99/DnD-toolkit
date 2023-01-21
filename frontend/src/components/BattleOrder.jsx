import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import "../styles/battleOrder.scss";
import InitiativeCell from "./InitiativeCell.jsx";
import Icon from "./Icons.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectors} from "../store/reducers/CardSlice";
import {actions as cardActions} from "../store/reducers/CardSlice";

const BattleOrder = () => {
  const dispatch = useDispatch();
  const players = useSelector(selectors.selectAll);
  const [active, setActive] = useState(0);
  const index = active % players.length;
  const activeIndex = index >= 0 ? index : (index + players.length);
  console.log(activeIndex)

  const changeActive = (change) => setActive(active + change);
  const throwInitiative = () => dispatch(cardActions.throwInitiative());

  return (
    <div className="sidebar battleOrder">
      <div className="order-header">
        <Button
          className="order-button"
          variant="outline-light"
          onClick={() => changeActive(-1)}
        >
          <Icon icon="previous"/>
        </Button>
        <Button
          className="initiative-button"
          variant="outline-light"
          onClick={throwInitiative}
        >
          Бросить инициативу
        </Button>
        <Button
          className="order-button"
          variant="outline-light"
          onClick={() => changeActive(1)}
        >
          <Icon icon="next"/>
        </Button>
      </div>
      <div className="d-flex flex-column flex-grow-1 px-1">
        {[...players]
          .sort((a, b) => parseFloat(a.initiative) - parseFloat(b.initiative))
          .map(({id, name, initiative}, index) => (
          <InitiativeCell
            active={index === activeIndex}
            name={name}
            initiative={initiative}
            id={id}
          />
        ))}
      </div>

    </div>
  );
};

export default BattleOrder;