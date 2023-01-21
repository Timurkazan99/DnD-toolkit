import React, {useState} from 'react';
import "../styles/throwHistory.scss"
import {InputGroup, Form, Button} from "react-bootstrap";
import {throwDice} from "../utils/diceRoll";
import {useDispatch, useSelector} from "react-redux";
import {addThrow} from "../store/reducers/UiSlice";

const ThrowHistory = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const throws = useSelector((state) => state.ui.throwHistory);

  const onClick = () => {
    const result = throwDice(value);
    dispatch(addThrow(result));
  }

  return (
    <div className="sidebar throwHistory p-3">
      <div className="throw-container flex-grow-1">
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
        <Button
          className="dice-button"
          variant="outline-light"
          onClick={onClick}
        >
          Roll
        </Button>
      </InputGroup>
    </div>
  );
};

export default ThrowHistory;