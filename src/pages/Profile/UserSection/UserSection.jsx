import React from "react";
import "./UserSection.scss";
import Profile from "../../../assets/profile.svg";
import LogOut from "../../../assets/logout.svg";

const UserSection = () => {
  return (
    <div className="section">
      <h5>Profilim</h5>
      <ul>
        <li className="active">
          <img src={Profile} alt="profile" />
          Şəxsi məlumatlar
        </li>
        <li>
          <img src={LogOut} alt="logout" />
          Çıxış
        </li>
      </ul>
    </div>
  );
};

export default UserSection;
