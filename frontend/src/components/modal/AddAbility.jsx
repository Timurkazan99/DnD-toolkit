import React, {useEffect} from 'react';
import {batch, useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {onHide} from "../../store/reducers/UiSlice";
import Modal from "../../atoms/Modal";
import FloatingLabel from "../../atoms/FloatingLabel";
import {getActiveAbility} from "../../store/selectors";
import {actions as abilityActions} from "../../store/reducers/AbilitiesSlice";
import CommonFooter from "./CommonFooter.jsx";
import "../../styles/customModal.scss";

const modalMap = {
  addAbility: {
    title: "Добавить способность",
    edit: false,
  },
  editAbility: {
    title: "Изменить способность",
    edit: true,
  }
}

const initialValues = {
  name: "",
  description: "",
}

const AddAbility = ({modalName}) => {
  const dispatch = useDispatch();
  const ability = useSelector(getActiveAbility);
  const enemyId = useSelector((state) => state.cards.selected);
  const modal = modalMap?.[modalName];

  const formik = useFormik({
    initialValues
  });

  useEffect(() => {
    if(modal?.edit) {
      formik.setValues(ability, false);
    } else {
      formik.setValues(initialValues, false);
    }
  }, [modalName])

  const addAbility = (e) => {
    e.preventDefault();
    const values = {id: Date.now(), ...formik.values, enemyId};
    batch(() => {
      dispatch(abilityActions.addAbility(values));
      dispatch(onHide());
    });
  }

  const updateAbility = (e) => {
    e.preventDefault();
    batch(() => {
      dispatch(abilityActions.updateAbility({id: ability.id, changes: {...formik.values}}));
      dispatch(onHide());
    });
  }

  const removeAbility = (e) => {
    e.preventDefault();
    batch(() => {
      dispatch(abilityActions.removeAbility(ability.id));
      dispatch(onHide());
    });
  }

  return (
    <>
      <Modal.Header closeButton>
        <h5>{modal?.title}</h5>
      </Modal.Header>
      <Modal.Body>
        <form>
          <FloatingLabel
            label="Название"
            className="mb-3"
          >
            <input
              type="text"
              name="name"
              placeholder=" "
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </FloatingLabel>
          <FloatingLabel
            label="Описание"
            className="mb-3"
          >
            <textarea
              name="description"
              placeholder=" "
              rows="5"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </FloatingLabel>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <CommonFooter
          edit={modal?.edit}
          add={addAbility}
          update={updateAbility}
          remove={removeAbility}
        />
      </Modal.Footer>
    </>
  );
};

export default AddAbility;