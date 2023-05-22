import React from "react";
import "./Banner.scss";
import { Link } from "react-router-dom";
import BannerIcon from "../../../assets/banner-icon.svg";
import Xiaomi from "../../../assets/xiaomi6.png";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-title">
        <h3>Telefon</h3>
        <span>Məhsul sayı: 322</span>
        <Link>
          Məhsullara keçid
          <img src={BannerIcon} alt="icon" />
        </Link>
      </div>
      <img className="xiaomi" src={Xiaomi} alt="Xiaomi" />
    </div>
  );
};

export default Banner;
