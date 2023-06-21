import React from "react";
import WithSocial from "./WithSocial/WithSocial.jsx";
import "./Login.scss";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import LoginImage from "./LoginImage/LoginImage.jsx";
// import { useForm } from "react-hook-form";

const Login = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   pattern,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => console.log(data);
  return (
    <div className="login container">
      <div className="login-form">
        <h3>Daxil ol</h3>
        <WithSocial />
        <span className="or">və ya</span>
        <form>
          <Input
            placeholder={"nümunə@gmail.com"}
            name={"E-mail"}
            // register={register}
            // pattern={pattern}
            // errors={errors}
          />
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
