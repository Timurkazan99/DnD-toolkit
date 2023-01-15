import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import Icon from "./Icons.jsx";
import "../styles/card.scss";

const skills = ['armor', 'attention', 'speed', 'initiative'];
const abilities = ['strength', 'dexterity', 'constitution', 'wisdom', 'intelligence', 'charisma']

const PlayerCard = (props) => {
  const [hp, setHp] = useState(props.initHp);

  const changeHp = (change) => setHp(hp + change);

  return (
    <Card className="player-card">
      <Card.Header className="d-flex justify-content-between">
        <label>Player Name</label>
        <div>
          <button
            className="hp-button"
            onClick={() => changeHp(-1)}
          >
            -
          </button>
          <label className="me-1">{hp}</label>
          <button
            className="hp-button"
            onClick={() => changeHp(1)}
          >
            +
          </button>
        </div>
      </Card.Header>
      <Card.Body className="card-content">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center">
            {skills.map((name) => (
              <Icon icon={name} value={props[name]} className="me-3"/>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            {abilities.map((ability) => (
              <div className="ability-box">
                {props[ability]}
              </div>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

PlayerCard.defaultProps = {
  initHp: 0,
  armor: 10,
  attention: 10,
  speed: 30,
  initiative: 0,
  strength: 10,
  dexterity: 10,
  constitution: 10,
  wisdom: 10,
  intelligence: 10,
  charisma: 10
}

export default PlayerCard;