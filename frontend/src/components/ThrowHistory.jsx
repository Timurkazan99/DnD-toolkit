import React, {useRef, useState} from 'react';
import "../styles/throwHistory.scss"
import {InputGroup, Form, Button} from "react-bootstrap";
import {throwDice} from "../utils/diceRoll";
import {useDispatch, useSelector} from "react-redux";
import {addThrow} from "../store/reducers/UiSlice";

const ThrowHistory = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const throws = useSelector((state) => state.ui.throwHistory);
  const throwsBox = useRef(null);

  const onClick = () => {
    const result = throwDice(value);
    dispatch(addThrow(result));
    throwsBox.current.scrollTop = 999999;
  }

  return (
    <div className="sidebar throwHistory">
      <div ref={throwsBox} className="throw-container">
        {
          throws.map(({throwDice, type}) => (
            <div className={`throw-cell ${type}`}>{throwDice}</div>
          ))
        }
      </div>
      <InputGroup className="dice-group">
        <Form.Control
          className="dice-input"
          value={value}
          onChange={({target}) => setValue(target.value)}
        />
        <button
          className="custom-button dice-button"
          onClick={onClick}
        >
          Roll
        </button>
      </InputGroup>
    </div>
  );
};

export default ThrowHistory;