import React, {useState, useRef, useEffect} from 'react';
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
  const initiativeBox = useRef(null);
  const index = active % players.length;
  const activeIndex = index >= 0 ? index : (index + players.length);

  const changeActive = (change) => {
    setActive(active + change)
  };
  const throwInitiative = () => {
    dispatch(cardActions.throwInitiative())
    setActive(0);
  };

  useEffect(() => {
    const cell = document.querySelector(".initiative-cell");
    if(cell) {
      const cellStyles = window.getComputedStyle(cell);
      const cellHeight = parseFloat(cellStyles['marginTop']) + parseFloat(cellStyles['marginBottom']) + cell?.offsetHeight;
      initiativeBox.current.scrollTop = activeIndex * cellHeight;
    }
  }, [activeIndex])

  return (
    <div className="sidebar battleOrder">
      <div className="order-header">
        <button
          className="custom-button order-button"
          onClick={() => changeActive(-1)}
        >
          <Icon icon="previous"/>
        </button>
        <button
          className="custom-button initiative-button"
          onClick={throwInitiative}
        >
          Бросить инициативу
        </button>
        <button
          className="custom-button order-button"
          onClick={() => changeActive(1)}
        >
          <Icon icon="next"/>
        </button>
      </div>
      <div
        ref={initiativeBox}
        className="d-flex flex-column flex-grow-1 px-1 overflow-auto"
      >
        {[...players]
          .sort((a, b) => parseFloat(b.initiative) - parseFloat(a.initiative))
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