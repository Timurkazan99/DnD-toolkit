import React from 'react';
import BattleOrder from "../components/BattleOrder.jsx";
import BattleArea from "../components/BattleArea.jsx";
import ThrowHistory from "../components/ThrowHistory.jsx";
import CommonModal from "../components/modal/CommonModal.jsx";


const Battle = () => {
  return (
    <div className="wrapper">
      <BattleOrder/>
      <BattleArea/>
      <ThrowHistory/>
      <CommonModal/>
    </div>
  );
};

export default Battle;