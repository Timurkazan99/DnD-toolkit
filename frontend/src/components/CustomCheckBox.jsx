import React, {useEffect, useRef, useState} from 'react';
import {Form} from "react-bootstrap";
import "../styles/checkbox.scss";

const titles = {
  "acrobatics": "Акробатика",
  "investigation": "Раследование",
  "athletics": "Атлетика",
  "perception": "Внимание",
  "survival": "Выживание",
  "performance": "Выступление",
  "intimidation": "Запугивание",
  "history": "История",
  "sleightOfHand": "Ловкость рук",
  "arcana": "Магия",
  "medicine": "Медицина",
  "deception": "Обман",
  "nature": "Природа",
  "insight": "Проницательность",
  "religion": "Религия",
  "stealth": "Скрытность",
  "persuasion": "Убеждение",
  "animalHandling": "Дрессировка",
  "saveThrow": "Спасбросок"
};

const profLevels = ['unown', 'own', 'pro']

const CustomCheckBox = ({name, isTristate, variant, state}) => {
  const [checkState, setCheckState] = useState(profLevels[state]);
  const marker = useRef(null);
  const labelClass = variant === 'skill' ? "skill-label" : "ability-label";

  useEffect(() => {
    if (checkState === 'unown') {
      marker.current.style.setProperty('--customCheckboxScale', 0)
    } else {
      marker.current.style.setProperty('--customCheckboxScale', 0.7)
    }
  }, [checkState])

  const onChange = () => {
    if (checkState === 'unown') {
      setCheckState('own');
      return;
    }
    if (isTristate) {
      if (checkState === 'own') {
        setCheckState('pro');
        return;
      }
    }
    setCheckState('unown');
    return;
  }

  return (
    <Form.Check className="d-flex h-100 w-100 p-0">
      <Form.Check.Label className={labelClass}>
        <Form.Check.Input className="real-checkbox" onChange={onChange}/>
        <span className="custom-checkbox" ref={marker}>
          {isTristate && (checkState === 'pro') ? <span className="double-check" /> : null}
        </span>
        <a>{titles[name]}</a>
      </Form.Check.Label>
    </Form.Check>
  );
};

export default CustomCheckBox;