import React from "react";
import "./Amount.scss";
import AZN from "../../../assets/azn.svg";

const Amount = () => {
  return (
    <div className="amount ">
      <h2>Ümumi</h2>
      <ul>
        <li>
          Məbləğ
          <span>
            66.50 <img src={AZN} alt="AZN" />
          </span>
        </li>
        <li>
          Çatdırılma
          <span>
            0.00 <img src={AZN} alt="AZN" />
          </span>
        </li>
        <li>
          Hədiyyə paketi
          <span>
            0.00 <img src={AZN} alt="AZN" />
          </span>
        </li>
        <li>
          Promo kod
          <span>
            0.00
            <img src={AZN} alt="AZN" />
          </span>
        </li>
      </ul>
      <div className="total">
        <span>Cəmi</span>
        <span>
          66.50
          <img src={AZN} alt="AZN" />
        </span>
      </div>
    </div>
  );
};

export default Amount;
