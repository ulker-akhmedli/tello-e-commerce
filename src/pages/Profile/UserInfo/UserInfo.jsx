import React from "react";
import "./UserInfo.scss";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import Edit from "../../../assets/edit.svg";

const UserInfo = () => {
  return (
    <form className="userInfo">
      <h1>Şəxsi məlumatlar</h1>
      <div className="infos">
        <Input type={"email"} name={"Ad"} />
        <Input type={"email"} name={"Soyad"} />
        <Input type={"email"} name={"E-mail"} />
        <Input type={"email"} name={"Mobil nömrə"} />
        <Button img={Edit} btn={"Məlumatları yenilə"} />
      </div>
    </form>
  );
};

export default UserInfo;
