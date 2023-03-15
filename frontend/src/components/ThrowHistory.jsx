import React, {useRef, useEffect} from 'react';
import "../styles/throwHistory.scss"

import {useSelector} from "react-redux";
import ThrowInput from "./ThrowInput.jsx";
import ThrowCell from "./ThrowCell.jsx";

const ThrowHistory = () => {
  const throws = useSelector((state) => state.ui.throwHistory);
  const throwsBox = useRef(null);

  useEffect(() => {
    throwsBox.current.scrollTop = 999999;
  }, [throws]);

  return (
    <div className="sidebar throwHistory">
      <div ref={throwsBox} className="throw-container">
        {
          throws.map(({throwDice, type}) => (
            <ThrowCell type={type} throwDice={throwDice}/>
          ))
        }
      </div>
      <ThrowInput />
    </div>
  );
};

export default ThrowHistory;