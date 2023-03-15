import React from 'react';
import {actions as cardActions} from "../store/reducers/CardSlice";
import InteractiveInput from "./InteractiveInput.jsx";

const InitiativeCell = ({card, active}) => {

  return (
    <div
      className={`initiative-cell ${active && 'active'}`}
    >
      <InteractiveInput
        inputClass="initiative-input"
        id={card.id}
        value={card.initiative}
        name="initiative"
        action={cardActions.updateCard}
      />
      <label>{card?.name}</label>
    </div>
  );
};

export default React.memo(InitiativeCell);