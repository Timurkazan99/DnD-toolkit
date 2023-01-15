import React from 'react';
import BattleOrder from "../components/BattleOrder.jsx";
import BattleArea from "../components/BattleArea.jsx";
import ThrowHistory from "../components/ThrowHistory.jsx";


const Battle = () => {
  return (
    <div className="d-flex" style={{height: 'calc(100% - 54px)', paddingTop: '0.5rem'}}>
      <BattleOrder/>
      <BattleArea/>
      <ThrowHistory/>
    </div>
  );
};

export default Battle;