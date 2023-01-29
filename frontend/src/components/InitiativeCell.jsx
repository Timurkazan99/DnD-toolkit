import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actions as cardActions} from "../store/reducers/CardSlice";
import {selectors as cardSelectors} from "../store/reducers/CardSlice";
import useDebounce from "../hooks/useDebounce";
import InteractiveInput from "./InteractiveInput.jsx";

const InitiativeCell = ({id, active}) => {
  const card = useSelector((state) => cardSelectors.selectById(state, id));

  return (
    <div
      className={`initiative-cell ${active && 'active'}`}
    >
      <InteractiveInput
        inputClass="initiative-input"
        id={id}
        value={card.initiative}
        name="initiative"
        action={cardActions.updateCard}
      />
      <label>{card?.name}</label>
    </div>
  );
};

export default InitiativeCell;