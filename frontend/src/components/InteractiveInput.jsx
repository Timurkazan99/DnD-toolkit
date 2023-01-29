import React, {useEffect, useState}  from 'react';
import useDebounce from "../hooks/useDebounce";
import {useDispatch} from "react-redux";

const InteractiveInput = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(props.value);
  const [edit, setEdit] = useState(false);
  const debouncedSearchTerm = useDebounce(value, 1000);

  useEffect(() => {
      if (debouncedSearchTerm && edit) {
        setEdit(false);
        dispatch(props.action({id: props.id, changes: {[props.name]: value}}));
      }
    },
    [debouncedSearchTerm]
  );

  return (
    <>
      {!edit ?
        <a
          className={props.linkClass}
          onClick={() => {
            setValue(props.value)
            setEdit(true)
          }
          }
        >
          {props.value}
        </a>
        :
        <input
          type="number"
          className={props.inputClass}
          value={value}
          onInput={({target}) => {
            setValue(target.value);
          }
          }
        />
      }
    </>
  );
};

InteractiveInput.defaultProps = {
  inputClass: "",
  linkClass: ""
}

export default InteractiveInput;