import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actions as cardActions} from "../store/reducers/CardSlice";
import {selectors as cardSelectors} from "../store/reducers/CardSlice";
import useDebounce from "../hooks/useDebounce";

const InitiativeCell = ({id, active}) => {
  const dispatch = useDispatch();
  const card = useSelector((state) => cardSelectors.selectById(state, id));
  const [value, setValue] = useState(card.initiative);
  const [edit, setEdit] = useState(false);
  const debouncedSearchTerm = useDebounce(value, 1000);

  useEffect(() => {
      if (debouncedSearchTerm) {
        setEdit(false);
        dispatch(cardActions.updateCard({id, changes: {initiative: value}}));
      }
    },
    [debouncedSearchTerm]
  );

  return (
    <div className={`initiative-cell ${active && 'active'}`}>
      {!edit ?
        <a
          onClick={() => {
            setValue(card.initiative)
            setEdit(true)
          }
          }
        >
          {card.initiative}
        </a>
        :
        <input
          type="number"
          className="initiative-input"
          value={value}
          onInput={({target}) => {
            setValue(target.value);
          }
          }
        />
      }
      <label>{card?.name}</label>
    </div>
  );
};

export default InitiativeCell;