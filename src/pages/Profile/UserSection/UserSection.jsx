import React from "react";
import "./UserSection.scss";
import Profile from "../../../assets/profile.svg";
import LogOut from "../../../assets/logout.svg";
import { useNavigate } from "react-router-dom";
import { commerce } from "../../../commerce";

const UserSection = () => {
  const navigate = useNavigate();

  const logOut = () => {
    commerce.customer.logout();

    navigate("/");
  };
  return (
    <div className="section">
      <h5>Profilim</h5>
      <ul>
        <li className="active">
          <img src={Profile} alt="profile" />
          Şəxsi məlumatlar
        </li>
        <li onClick={logOut}>
          <img src={LogOut} alt="logout" />
          Çıxış
        </li>
      </ul>
    </div>
  );
};

export default UserSection;
