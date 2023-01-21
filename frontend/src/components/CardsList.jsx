import React from 'react';
import PlayerCard from "./PlayerCard.jsx";
import Icon from "./Icons.jsx";
import {useDispatch, useSelector} from "react-redux";
import {onShow} from "../store/reducers/UiSlice";
import {getCardsByType} from "../store/selectors";

const map = {
  enemies: {
    className: "enemies-area",
    modalName: "addEnemy",
    cardType: "enemy"
  },
  players: {
    className: "players-area",
    modalName: "addPlayer",
    cardType: "player"
  },
}

const CardList = ({type}) => {
  const {className, modalName, cardType} = map[type];
  const cards = useSelector((state) => getCardsByType(state, cardType));
  const dispatch = useDispatch();

  return (
    <div className={className}>
      {cards.map((card) => (
        <PlayerCard card={card}/>
      ))}
      <div className="button-wrapper">
        <button
          className="add-card"
          onClick={() => dispatch(onShow(modalName))}
        >
          <Icon icon="add"></Icon>
        </button>
      </div>
    </div>
  );
};

export default CardList;