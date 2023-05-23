import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink to="/">Yeni</NavLink>
        </li>
        <li>
          <NavLink to="/">Apple</NavLink>
        </li>
        <li>
          <NavLink>Samsung</NavLink>
        </li>
        <li>
          <NavLink>Xiaomi</NavLink>
        </li>
        <li>
          <NavLink>Redmi</NavLink>
        </li>
        <li>
          <NavLink>Bütün Brendlər</NavLink>
        </li>
        <li>
          <NavLink>Aksessuarlar</NavLink>
        </li>
        <li>
          <NavLink>Endirimlər</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
