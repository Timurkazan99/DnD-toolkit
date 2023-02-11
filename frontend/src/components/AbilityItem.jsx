import React, {useRef, useState} from 'react';
import Popover from "../atoms/Popover";
import Icon from "./Icons.jsx";
import {batch, useDispatch} from "react-redux";
import {actions as abilityActions} from "../store/reducers/AbilitiesSlice";
import {onShow} from "../store/reducers/UiSlice";
import "../styles/abilityPopover.scss";

const AbilityItem = ({name, description, id}) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const targetRef = useRef(null);

  const onClick = () => batch(() => {
    setShow(false);
    dispatch(abilityActions.setActive(id))
    dispatch(onShow('editAbility'));
  })

  return (
      <li className="custom-item" >
        <a
          ref={targetRef}
          onClick={() => setShow(!show)}
        >
          {name}
        </a>
        <Popover
          targetRef={targetRef}
          className="ability-popover"
          show={show}
          onHide={() => setShow(false)}
        >
          <Popover.Header
            className="ability-popover-header"
          >
            <button
              className="edit-button"
              onClick={onClick}
            >
              <Icon icon="edit"/>
            </button>
            <span>{name}</span>
            <button
              className="close-button"
            >
              <Icon icon="delete"/>
            </button>
          </Popover.Header>
          <Popover.Body
            className="ability-popover-body"
          >
            {description}
          </Popover.Body>
        </Popover>
      </li>
  );
};

export default AbilityItem;