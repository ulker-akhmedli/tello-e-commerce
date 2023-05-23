import React ,{useState}from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import DropDown from "../DropDown/DropDown";


const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleMouseOver = () => {
    setIsDropdownOpen(prev => !prev);
  };
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink onMouseEnter={handleMouseOver} to="/">
            Yeni
          </NavLink>
          {isDropdownOpen && <DropDown />}
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
