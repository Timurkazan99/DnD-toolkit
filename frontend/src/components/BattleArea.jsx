import React from 'react';
import PlayersArea from "./PlayersArea.jsx";
import EnemysArea from "./EnemysArea.jsx";
import "../styles/battleArea.scss";

const BattleArea = () => {
  return (
    <div className="flex-grow-1 d-flex flex-column">
      <PlayersArea/>
      <div className="enemy-header">
        <div className="line"/>
        <label>Враги</label>
        <div className="line"/>
      </div>
      <EnemysArea/>
    </div>
  );
};

export default BattleArea;