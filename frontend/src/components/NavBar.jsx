import React from 'react';
import {NavLink} from "react-router-dom";
import {Button, Container, Navbar} from "react-bootstrap";
import {BATTLE_ROUTE} from "../utils/const";

const NavBar = () => {

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex justify-content-between">
        <NavLink style={{ color: 'white' }} to={BATTLE_ROUTE}>DnD toolkit</NavLink>
      </Container>
    </Navbar>
  );
};

export default NavBar;