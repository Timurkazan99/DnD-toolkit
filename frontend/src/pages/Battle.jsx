import React from 'react';
import BattleOrder from "../components/BattleOrder.jsx";
import BattleArea from "../components/BattleArea.jsx";
import ThrowHistory from "../components/ThrowHistory.jsx";
import AddCard from "../components/modal/AddCard.jsx";
import AddAbility from "../components/modal/AddAbility.jsx";

const Battle = () => {
  return (
    <div className="wrapper">
      <BattleOrder/>
      <BattleArea/>
      <ThrowHistory/>
      <AddCard/>
      <AddAbility/>
    </div>
  );
};

export default Battle;