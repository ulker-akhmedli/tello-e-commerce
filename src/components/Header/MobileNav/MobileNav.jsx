import React, { useState } from "react";
import "./MobileNav.scss";
import Close from "../../../assets/close.svg";
import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo";

const MobileNav = ({ setMobileNavbar, mobileNavbar, categories }) => {
  const closeNavbar = () => {
    setMobileNavbar(false);
  };
  return (
    <div className={mobileNavbar ? `mobileNav opened` : "mobileNav"}>
      <div className="mobile-title">
        <img onClick={closeNavbar} src={Close} alt="close" />
        <Logo />
      </div>
      <ul className="navbar">
        {categories.slice(2.6).map((el) => {
          return (
            <li key={el.id}>
              <Link to={`products/${el.slug}`}>{el.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className="login-buttons">
        <button className="first button">Daxil ol</button>
        <button className="second button">Qeydiyyat</button>
      </div>
    </div>
  );
};

export default MobileNav;
