import React, {useRef, useState} from 'react';
import {Overlay} from "react-bootstrap";
import AbilityPopover from "./AbilityPopover.jsx";

const AbilityItem = ({id, name, description}) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const handleClick = (event) => {
    setShow(true);
  };

  return (
      <li className="custom-item" >
        <a
          onClick={handleClick}
          ref={target}
        >
          {name}
        </a>
        <Overlay
          show={show}
          target={target.current}
          placement="bottom"
          rootClose
          onHide={() => setShow(false)}
        >
          <AbilityPopover
            id={id}
            name={name}
            description={description}
            setShow={setShow}
          />
        </Overlay>
      </li>
  );
};

export default AbilityItem;