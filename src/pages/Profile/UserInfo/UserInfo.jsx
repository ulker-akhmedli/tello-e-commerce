import React from "react";
import "./UserInfo.scss";
import Form from "../../Login/Form/Form";
import Button from "../../Login/Form/Button/Button";
import Edit from "../../../assets/edit.svg";

const UserInfo = () => {
  return (
    <form className="userInfo">
      <h1>Şəxsi məlumatlar</h1>
      <div className="infos">
        <Form type={"email"} name={"Ad"} />
        <Form type={"email"} name={"Soyad"} />
        <Form type={"email"} name={"E-mail"} />
        <Form type={"email"} name={"Mobil nömrə"} />
        <Button img={Edit} btn={"Məlumatları yenilə"} />
      </div>
    </form>
  );
};

export default UserInfo;
