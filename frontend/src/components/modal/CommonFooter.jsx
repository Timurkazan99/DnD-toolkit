import React from 'react';
import {Button} from "react-bootstrap";

const CommonFooter = ({edit, add, remove, update}) => {
  return (
    <>
      {
        !edit ?
          (
            <>
              <Button variant="outline-primary" onClick={add}>
                Добавить
              </Button>
            </>
          )
          :
          (
            <>
              <Button variant="outline-danger" onClick={remove}>
                Удалить
              </Button>
              <Button variant="outline-primary" onClick={update}>
                Изменить
              </Button>
            </>
          )
      }
    </>
  );
};

export default CommonFooter;