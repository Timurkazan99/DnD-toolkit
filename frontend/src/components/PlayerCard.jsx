import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import Icon from "./Icons.jsx";
import "../styles/card.scss";
import EnemyList from "./EnemyList.jsx";

const skills = ['armor', 'attention', 'speed', 'initiativeBonus'];
const abilities = ['strength', 'dexterity', 'constitution', 'wisdom', 'intelligence', 'charisma']

const PlayerCard = ({card}) => {
  const [hp, setHp] = useState(10);

  const changeHp = (change) => setHp(hp + change);

  return (
    <Card className="player-card">
      <Card.Header className="d-flex justify-content-between">
        <label>{card.name}</label>
        {
          card.type === "player" && (
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
          )
        }
      </Card.Header>
      <Card.Body className="player-card-body">
        <div className="stat-wrapper">
          {skills.map((skill) => (
            <div>
              <Icon icon={skill} className="me-1"/>
              <label>{card[skill]}</label>
            </div>
          ))}
        </div>
        <div className="stat-wrapper">
          {abilities.map((ability) => (
            <div className="ability-box">
              {card[ability]}
            </div>
          ))}
        </div>
      </Card.Body>
      {
        (card.type === "enemy") && (
          <Card.Footer className="player-card-footer">
            <EnemyList
              name={card.name}
              enemyId={card.id}
              lastIndex={card.lastCreatureIndex}
            />
          </Card.Footer>
        )
      }
    </Card>
  );
};

PlayerCard.defaultProps = {
  armor: 10,
  attention: 10,
  speed: 30,
  initiativeBonus: 0,
  strength: 10,
  dexterity: 10,
  constitution: 10,
  wisdom: 10,
  intelligence: 10,
  charisma: 10
}

export default PlayerCard;