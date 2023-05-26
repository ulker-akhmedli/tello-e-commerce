import React from "react";
import "./Logo.scss";
import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="tello" />
      <h2>Tello</h2>
    </div>
  );
};

export default Logo;
