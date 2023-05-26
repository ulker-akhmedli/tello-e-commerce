import React, { useState } from "react";
import "./MobileNav.scss";
import Close from "../../../assets/close.svg";
import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo";

const MobileNav = () => {
  return (
    <div className="mobileNav">
      <div className="mobile-title">
        <img src={Close} alt="close" />
        <Logo />
      </div>
      <ul>
        <li>
          <Link>Yeni</Link>
        </li>
        <li>
          <Link>Apple</Link>
        </li>
        <li>
          <Link>Samsung</Link>
        </li>
        <li>
          <Link>Xiaomi</Link>
        </li>
        <li>
          <Link>Redmi</Link>
        </li>
        <li>
          <Link>Bütün Brendlər</Link>
        </li>
        <li>
          <Link>Endirimlər</Link>
        </li>
      </ul>
      <div className="login-buttons">
        <button className="first button">Daxil ol</button>
        <button className="second button">Qeydiyyat</button>
      </div>
    </div>
  );
};

export default MobileNav;
