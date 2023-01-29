import React, {useEffect} from 'react';
import {batch, useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {onHide} from "../../store/reducers/UiSlice";
import {FloatingLabel, Form, Modal} from "react-bootstrap";
import {getActiveAbility, getModalName} from "../../store/selectors";
import {actions as abilityActions} from "../../store/reducers/AbilitiesSlice";
import CommonFooter from "./CommonFooter.jsx";

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

const AddAbility = () => {
  const dispatch = useDispatch();
  const modalName = useSelector(getModalName);
  const ability = useSelector(getActiveAbility);
  const enemyId = useSelector((state) => state.cards.selected);
  const modal = modalMap?.[modalName];
  const show = modal ?? false;

  const formik = useFormik({
    initialValues
  });

  const close = () => {
    dispatch(onHide());
  };

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
    <Modal
      show={show}
      onHide={close}
      centered
    >
      <Modal.Header closeButton>
        <h5>{modal?.title}</h5>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FloatingLabel
            label="Название"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Название"
            />
          </FloatingLabel>
          <FloatingLabel
            label="Описание"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              placeholder="Описание"
            />
          </FloatingLabel>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <CommonFooter
          edit={modal?.edit}
          add={addAbility}
          update={updateAbility}
          remove={removeAbility}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default AddAbility;