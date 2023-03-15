import React from 'react';
import FloatingLabel from "../../atoms/FloatingLabel";

const FormCard = ({formik}) => {
  return (
    <form>
      <FloatingLabel
        label="Имя"
        className="mb-3"
      >
        <input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder=" "
        />
      </FloatingLabel>
      <hr/>
      <div className="row">
        <div className="col">
          <FloatingLabel
            label="Сила"
            className="mb-3"
          >
            <input
              type="number"
              name="strength"
              value={formik.values.strength}
              onChange={formik.handleChange}
              placeholder="Сила"
            />
          </FloatingLabel>
          <FloatingLabel
            label="Ловкость"
            className="mb-3"
          >
            <input
              type="number"
              name="dexterity"
              value={formik.values.dexterity}
              onChange={formik.handleChange}
              placeholder="Ловкость"
            />
          </FloatingLabel>
          <FloatingLabel
            label="Выносливость"
            className="mb-3"
          >
            <input
              type="number"
              name="constitution"
              value={formik.values.constitution}
              onChange={formik.handleChange}
              placeholder="Выносливость"
            />
          </FloatingLabel>
        </div>
        <div className="col">
          <FloatingLabel
            label="Интелект"
            className="mb-3"
          >
            <input
              type="number"
              name="intelligence"
              value={formik.values.intelligence}
              onChange={formik.handleChange}
              placeholder="Интелект"
            />
          </FloatingLabel>
          <FloatingLabel
            label="Мудрость"
            className="mb-3"
          >
            <input
              type="number"
              name="wisdom"
              value={formik.values.wisdom}
              onChange={formik.handleChange}
              placeholder="Мудрость"
            />
          </FloatingLabel>
          <FloatingLabel
            label="Харизма"
          >
            <input
              type="number"
              name="charisma"
              value={formik.values.charisma}
              onChange={formik.handleChange}
              placeholder="Харизма"
            />
          </FloatingLabel>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <FloatingLabel
            label="Скорость"
            className="mb-3"
          >
            <input
              type="number"
              name="speed"
              value={formik.values.speed}
              onChange={formik.handleChange}
              placeholder="Скорость"
            />
          </FloatingLabel>
          <FloatingLabel
            label="Класс Брони"
            className="mb-3"
          >
            <input
              type="number"
              name="armor"
              value={formik.values.armor}
              onChange={formik.handleChange}
              placeholder="Класс Брони"
            />
          </FloatingLabel>
        </div>
        <div className="col">
          <FloatingLabel
            label="Пас. внимание"
            className="mb-3"
          >
            <input
              type="number"
              name="attention"
              value={formik.values.attention}
              onChange={formik.handleChange}
              placeholder="Пас. внимание"
            />
          </FloatingLabel>
          <FloatingLabel
            label="Инициатива"
            className="mb-3"
          >
            <input
              type="number"
              name="initiativeBonus"
              value={formik.values.initiativeBonus}
              onChange={formik.handleChange}
              placeholder="Инициатива"
            />
          </FloatingLabel>
        </div>
      </div>
    </form>
  );
};

export default FormCard;