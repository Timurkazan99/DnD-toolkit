import React from 'react';
import "../styles/battleArea.scss";
import CardsList from "./CardsList.jsx";

const BattleArea = () => {
  return (
    <div className="battle-area">
      <CardsList type="players"/>
      <div className="enemy-header">
        <div className="line"/>
        <label>Враги</label>
        <div className="line"/>
      </div>
      <CardsList type="enemies"/>
    </div>
  );
};

export default BattleArea;