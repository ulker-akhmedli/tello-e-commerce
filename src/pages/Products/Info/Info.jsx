import React, { useState } from "react";
import "./Info.scss";
import Sort from "../../../assets/sort.svg";

const Info = ({ loading, products }) => {
  const [sortDropDown, setSortDropDown] = useState(false);

  const setDropdownOpen = () => {
    setSortDropDown((prev) => !prev);
  };

  return (
    <div className="info">
      <div className="product-number">
        {loading
          ? "Axtarılır..."
          : `${products.meta?.pagination.total} məhsul tapıldı`}
      </div>
      <div className="sort" onClick={setDropdownOpen}>
        <span>Ən yenilər</span>
        <img src={Sort} alt="icon" />
        {sortDropDown && (
          <div className="sort-dropdown">
            <div className="sort-option">Azdan çoxa</div>
            <div className="sort-option">Çoxdan aza</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;
