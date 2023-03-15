import React, {useState} from 'react';
import {throwDice} from "../utils/diceRoll";
import {addThrow} from "../store/reducers/UiSlice";
import {useDispatch} from "react-redux";

const ThrowInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  const onClick = () => {
    const result = throwDice(value);
    dispatch(addThrow(result));
  }

  const onChange = ({target}) => setValue(target.value);

  return (
    <div className="dice-group">
      <input
        className="dice-input"
        value={value}
        onChange={onChange}
      />
      <button
        className="custom-button dice-button"
        onClick={onClick}
      >
        Roll
      </button>
    </div>
  );
};

export default ThrowInput;