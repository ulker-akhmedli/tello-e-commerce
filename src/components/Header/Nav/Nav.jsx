import React, { useState } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = ({ loading, categories }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const handleMouseOver = () => {
  //   setIsDropdownOpen((prev) => !prev);
  // };

  return (
    <nav>
      <ul className="navbar">
        {categories.slice(2.6).map((el) => {
          return (
            <li key={el.id}>
              <Link to={`products/${el.slug}`}>{el.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
