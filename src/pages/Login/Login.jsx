import React from "react";
import WithSocial from "./WithSocial/WithSocial.jsx";
import "./Login.scss";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import LoginImage from "./LoginImage/LoginImage.jsx";
// import HookForm from "../../components/HookForm/HookForm.jsx";
const Login = () => {
  return (
    <div className="login container">
      <div className="login-form">
        <h3>Daxil ol</h3>
        <WithSocial />
        <span className="or">və ya</span>
        <form>
          {/* <HookForm/> */}
          <Input
            placeholder={"nümunə@gmail.com"}
            type={"email"}
            name={"E-mail"}
          />
          {/* <Form
          placeholder={"Şifrənizi daxil edin"}
          type={"password"}
          name={"Şifrə"}
        />
        <Link>Şifrəni unutmusunuz?</Link> */}
          <Button btn={"Daxil ol"} />
        </form>
      </div>
      <LoginImage
        question={"Hesabınız yoxdur? "}
        page={"/register"}
        message={"Qeydiyyatdan keçin"}
      />
    </div>
  );
};

export default Login;
