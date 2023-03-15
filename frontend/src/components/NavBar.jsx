import React from 'react';
import {NavLink} from "react-router-dom";
import {BATTLE_ROUTE} from "../utils/const";

import "../styles/navbar.scss";

const NavBar = () => {

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink style={{ color: 'white' }} to={BATTLE_ROUTE}>DnD toolkit</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;