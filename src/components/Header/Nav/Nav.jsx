import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import DropDown from "../DropDown/DropDown";

const Nav = ({ categories }) => {
  return (
    <nav>
      <ul className="navbar">
        {categories.slice(0, 9).map((el, index) => {
          return (
            <li key={el.id}>
              <Link to={`products/${el.slug}`}>{el.name}</Link>
              <DropDown subCategories={categories[index].children} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
