import React from "react";
import Swap from "../../../assets/swap.svg";
import Filter from "../../../assets/filter.svg";
import "./MobileOption.scss"

const MobileOption = () => {
  return (
    <div className="mobile-option">
      <div className="swap">
        <img src={Swap} alt="" />
        Sıralama
      </div>
      <div className="filter">
        <img src={Filter} alt="" />
        Sıralama
      </div>
    </div>
  );
};

export default MobileOption;
