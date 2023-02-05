import React, {forwardRef} from 'react';
import {Popover} from "react-bootstrap";
import {batch, useDispatch} from "react-redux";
import {actions as abilityActions} from "../store/reducers/AbilitiesSlice";
import {onShow} from "../store/reducers/UiSlice";
import Icon from "./Icons.jsx";
import "../styles/abilityPopover.scss";

//

const AbilityPopover = forwardRef(({ id, name, description, setShow, ...props}, ref) => {
  const dispatch = useDispatch();

  const onClick = () => batch(() => {
    setShow(false)
    dispatch(abilityActions.setActive(id))
    dispatch(onShow('editAbility'))
  })

  return (
    <Popover
      ref={ref}
      {...props}
      className="ability-popover"
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
          onClick={() => setShow(false)}
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
  );
});

export default AbilityPopover;