import React from "react";
import WithSocial from "./WithSocial/WithSocial.jsx";
import "./Login.scss";
import LoginImage from "../../assets/login.png";
import { Link } from "react-router-dom";
import Form from "./Form/Form";
import Button from "./Form/Button/Button";
const Login = () => {
  return (
    <div className="login container">
      <div className="login-form">
        <h3>Daxil ol</h3>
        <WithSocial />
        <span className="or">və ya</span>
        <Form placeholder={"nümunə@gmail.com"} type={"email"} name={"E-mail"} />
        <Form
          placeholder={"Şifrənizi daxil edin"}
          type={"password"}
          name={"Şifrə"}
        />
        <Link>Şifrəni unutmusunuz?</Link>

        <Button btn={"Daxil ol"} />
      </div>
      <div className="loginImage">
        <img src={LoginImage} alt="login" />
        <div className="login-quest">
          <span>Hesabınız yoxdur? </span>
          <Link>Qeydiyyatdan keçin</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
