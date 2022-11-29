import React from "react";
import { NavLink } from "react-router-dom";

const Hamburger = () => {

  return (
    <>
      <h1>
        Menú
      </h1>
    <nav className="main-navigation">
        <ul>
            <li><NavLink to="/sesiones">Mis sesiones</NavLink></li>
            <li><NavLink to="/calendar">Calendario</NavLink></li>
        </ul>
      </nav>
    </>

  )
};

export default Hamburger;