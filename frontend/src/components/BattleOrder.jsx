import React from 'react';
import {Button} from "react-bootstrap";
import "../styles/battleOrder.scss";
import InitiativeCell from "./InitiativeCell.jsx";

const BattleOrder = () => {
  return (
    <div className="sidebar">
      <Button className="order-button" variant="outline-light">
        ↑
      </Button>
      <div className="d-flex flex-grow-1 px-1">
        <InitiativeCell />
      </div>
      <Button className="order-button" variant="outline-light">
        ↓
      </Button>
    </div>
  );
};

export default BattleOrder;