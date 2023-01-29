import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import Icon from "./Icons.jsx";
import "../styles/card.scss";
import EnemyList from "./EnemyList.jsx";
import {actions as cardActions} from "../store/reducers/CardSlice";
import InteractiveInput from "./InteractiveInput.jsx";
import {onShow} from "../store/reducers/UiSlice";
import {batch, useDispatch} from "react-redux";
import AbilityList from "./AbilityList.jsx";

const skills = ['armor', 'attention', 'speed', 'initiativeBonus'];
const abilities = ['strength', 'dexterity', 'constitution', 'wisdom', 'intelligence', 'charisma']

const PlayerCard = ({card}) => {
  const dispatch = useDispatch()

  return (
    <Card className="player-card">
      <Card.Header className="player-card-header">
        <a
          className="card-name"
          onClick={() => {
            batch(() => {
              dispatch(onShow("editCard"))
              dispatch(cardActions.setActive(card.id))
            });
          }}
        >
          {card.name}
        </a>
        {
          card.type === "player" && (
            <div>
              <Icon
                icon="hp"
                className="me-1"
              />
              <InteractiveInput
                inputClass="hp-input"
                id={card.id}
                value={card.hp}
                name="hp"
                action={cardActions.updateCard}
              />
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
            <AbilityList
              enemyId={card.id}
            />
            <hr/>
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