import React from 'react';

const CommonFooter = ({edit, add, remove, update}) => {
  return (
    <>
      {
        !edit ?
          (
            <>
              <button className="custom-button accept" onClick={add}>
                Добавить
              </button>
            </>
          )
          :
          (
            <>
              <button className="custom-button delete" onClick={remove}>
                Удалить
              </button>
              <button className="custom-button accept" onClick={update}>
                Изменить
              </button>
            </>
          )
      }
    </>
  );
};

export default CommonFooter;