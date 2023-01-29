import React, {useEffect} from 'react';
import {Modal} from "react-bootstrap";
import {batch, useDispatch, useSelector} from "react-redux";
import {onHide} from "../../store/reducers/UiSlice";
import FormCard from "./FormCard.jsx";
import {useFormik} from "formik";
import {actions as cardActions} from "../../store/reducers/CardSlice";
import {rollDice} from "../../utils/diceRoll";
import {getActiveCard, getModalName} from "../../store/selectors";
import CommonFooter from "./CommonFooter.jsx";

const modalMap = {
  addEnemy: {
    title: "Добавить врага",
    values: {
      type: "enemy",
      creaturesIds: [],
      abilitiesIds: [],
      lastCreatureIndex: 0,
    },
    edit: false
  },
  addPlayer: {
    title: "Добавить игрока",
    values: {
      type: "player",
      hp: 10
    },
    edit: false
  },
  editCard: {
    title: "Изменить карточку",
    edit: true
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
  const modalName = useSelector(getModalName);
  const card = useSelector(getActiveCard);
  const modal = modalMap?.[modalName];
  const show = modal ?? false;

  const formik = useFormik({
    initialValues,
  });

  const close = () => {
    dispatch(onHide());
  };
  
  useEffect(() => {
    if(modal?.edit) {
      formik.setValues(card, false);
    } else {
      formik.setValues(initialValues, false);
    }
  }, [modalName])

  const addCard = (e) => {
    e.preventDefault();
    const initiative = rollDice(20) + formik.values.initiativeBonus;
    const values = {...formik.values, id: Date.now(), ...modal.values, initiative};
    batch(() => {
      dispatch(cardActions.addCard(values));
      dispatch(onHide());
    });
  }

  const updateCard = (e) => {
    e.preventDefault();
    batch(() => {
      dispatch(cardActions.updateCard({id: card.id, changes: {...formik.values}}));
      dispatch(onHide());
    });
  }

  const removeCard = (e) => {
    e.preventDefault();
    batch(() => {
      dispatch(cardActions.removeCard(card.id));
      dispatch(onHide());
    });
  }

  return (
    <Modal
      show={show}
      onHide={close}
      centered
    >
      <Modal.Header closeButton>
        <h5>{modal?.title}</h5>
      </Modal.Header>
      <Modal.Body>
        <FormCard formik={formik}/>
      </Modal.Body>
      <Modal.Footer>
        <CommonFooter
          edit={modal?.edit}
          add={addCard}
          update={updateCard}
          remove={removeCard}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default AddCard;