import React from 'react';
import Modal from "../../atoms/Modal";
import AddCard from "./AddCard.jsx";
import AddAbility from "./AddAbility.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getModalName} from "../../store/selectors";
import {onHide} from "../../store/reducers/UiSlice";

const modalMap = {
  addAbility: AddAbility,
  editAbility: AddAbility,
  addEnemy: AddCard,
  addPlayer: AddCard,
  editCard: AddCard
}

const nullComp = () => (<></>);

const CommonModal = () => {
  const dispatch = useDispatch();
  const modalName = useSelector(getModalName);
  const Component = modalMap?.[modalName] ?? nullComp;
  const show = modalName !== "";

  return (
    <Modal
      show={show}
      onHide={() => dispatch(onHide())}
      className="custom-modal"
    >
      <Component modalName={modalName}/>
    </Modal>
  );
};

export default CommonModal;