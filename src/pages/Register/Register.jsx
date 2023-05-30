import React, { useState } from "react";
import "./Register.scss";
import WithSocial from "../Login/WithSocial/WithSocial";
import Input from "../../components/Input/Input";
import LoginImage from "../Login/LoginImage/LoginImage";
import Button from "../../components/Button/Button";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const Register = () => {
  const [value, setValue] = useState();
  return (
    <div className="container register">
      <div className="register-content">
        <h3>Qeydiyyat</h3>
        <WithSocial />
        <span className="or">və ya</span>
        <form>
          <Input
            placeholder={"Ad və soyadınızı daxil edin"}
            type={"text"}
            name={"Ad, Soyad"}
          />
          <Input
            placeholder={"nümunə@gmail.com"}
            type={"email"}
            name={"E-mail"}
          />
          <PhoneInput
            placeholder="00-000-00-00"
            value={value}
            onChange={setValue}
            name={"Mobil nömrə"}
            defaultCountry="AZ"
          />
          {/* 
        <Input
          placeholder={"Şifrənizi daxil edin"}
          type={"password"}
          name={"Şifrə"}
        /> */}
          <Button btn={"Qeydiyyat"} />
        </form>
      </div>
      <LoginImage
        question={"Artıq hesabınız var? "}
        page={"/login"}
        message={"Daxil olun "}
      />
    </div>
  );
};

export default Register;
