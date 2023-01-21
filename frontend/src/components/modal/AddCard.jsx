import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {onHide} from "../../store/reducers/UiSlice";
import FormCard from "./FormCard.jsx";
import {useFormik} from "formik";
import {actions as cardActions} from "../../store/reducers/CardSlice";
import {rollDice} from "../../utils/diceRoll";

const cardMap = {
  addEnemy: {
    title: "Добавить врага",
    values: {
      type: "enemy",
      creaturesIds: [],
      lastCreatureIndex: 0,
    }
  },
  addPlayer: {
    title: "Добавить игрока",
    values: {
      type: "player"
    }
  }
}

const initialValues = {
  name: "",
  strength: 10,
  dexterity: 10,
  constitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10,
  speed: 30,
  attention: 10,
  armor: 10,
  initiativeBonus: 0
};

const AddCard = () => {
  const dispatch = useDispatch();
  const modalName = useSelector((state) => state.ui.modalName);
  const card = cardMap?.[modalName];
  const show = card ?? false;

  const formik = useFormik({
    initialValues
  });

  const close = () => {
    formik.setValues(initialValues);
    dispatch(onHide())
  };

  const onClick = (e) => {
    e.preventDefault();
    const initiative = rollDice(20) + formik.values.initiativeBonus;
    const values = {...formik.values, id: Date.now(), ...card.values, initiative};
    dispatch(cardActions.addCard(values));
    close();
  }

  return (
    <Modal
      show={show}
      onHide={close}
      centered
    >
      <Modal.Header closeButton>
        <h5>{card?.title}</h5>
      </Modal.Header>
      <Modal.Body>
        <FormCard formik={formik}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={onClick}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCard;