import React from "react";
import WithSocial from "./WithSocial/WithSocial.jsx";
import "./Login.scss";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import LoginImage from "./LoginImage/LoginImage.jsx";
import { useForm } from "react-hook-form";
import LoginMessage from "./LoginMessage/LoginMessage.jsx";

const Login = () => {
  const [loginMessage, setLoginMessage] = React.useState(true);

  const {
    register,
    handleSubmit,
    watch,
    pattern,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      {loginMessage ? (
        <LoginMessage />
      ) : (
        <div className="login container">
          <div className="login-form">
            <h3>Daxil ol</h3>
            <WithSocial />
            <span className="or">və ya</span>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder={"nümunə@gmail.com"}
                name={"E-mail"}
                register={register}
                errors={errors}
                label={"e-mail"}
                validation={{
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  },
                }}
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
      )}
    </div>
  );
};

export default Login;
