import React, { useState } from "react";
import "./Filter.scss";
import Plus from "../../../assets/plus.svg";
import Minus from "../../../assets/minus.svg";
// import { commerce } from "../../../commerce";
const Filter = () => {

  const [filter, setFilter] = useState(false);

  const setFilterOpen = () => {
    setFilter((prev) => !prev);
  };
  return (
    <div className="filter">
      <div className="filter-title">
        <h3>Brend</h3>
        {filter ? (
          <img onClick={setFilterOpen} src={Minus} alt="minus" />
        ) : (
          <img onClick={setFilterOpen} src={Plus} alt="plus" />
        )}
      </div>
      {filter && (
        <ul className="options">
          <li>
            <input type="checkbox" />
            <label htmlFor="">Apple</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Samsung</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Xiaomi</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Honor</label>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
