import React from 'react';
import {NavLink} from "react-router-dom";
import {BATTLE_ROUTE} from "../utils/const";
import "../styles/navbar.scss";
import Icon from "./Icons.jsx";
import {useDispatch} from "react-redux";
import {changeTheme} from "../store/reducers/UiSlice";
import useThemeChange from "../hooks/useThemeChange";

const icon = {
  dark: 'bright',
  bright: 'dark'
}

const NavBar = () => {
  const dispatch = useDispatch();
  const theme = useThemeChange();

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to={BATTLE_ROUTE}>DnD toolkit</NavLink>
        <button
          className={`theme-button ${theme}`}
          onClick={() => dispatch(changeTheme())}
        >
          <Icon icon={icon[theme]}/>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;