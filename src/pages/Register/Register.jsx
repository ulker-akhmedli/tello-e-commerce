import React, { useState } from "react";
import "./Register.scss";
import WithSocial from "../Login/WithSocial/WithSocial";
import Input from "../../components/Input/Input";
import LoginImage from "../Login/LoginImage/LoginImage";
import Button from "../../components/Button/Button";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { userRegister } from "../../store/actions/login";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    pattern,
    formState: { errors },
  } = useForm();
  // const name = watch("Ad, Soyad");
  // const email=watch("E-mail")
  // const number=watch()

  const onSubmit = (data) => {
    navigate("/login");
    console.log(data);
    // if (!errors) {
    //   navigate("/login");
    //   console.log(data);
    // }
  };
  const [value, setValue] = useState();
  return (
    <div className="container register">
      <div className="register-content">
        <h3>Qeydiyyat</h3>
        <WithSocial />
        <span className="or">və ya</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder={"Ad və soyadınızı daxil edin"}
            type={"text"}
            name={"Ad, Soyad"}
            register={register}
            pattern={pattern}
            errors={errors}
            label={"Ad Soyad"}
            validation={{
              pattern: {
                value: /^[a-zA-Z]+ [a-zA-Z]+$/,
              },
            }}
          />
          <Input
            placeholder={"nümunə@gmail.com"}
            type={"email"}
            name={"E-mail"}
            register={register}
            pattern={pattern}
            errors={errors}
            label={"e-mail"}
            validation={{
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              },
            }}
          />
          <PhoneInput
            placeholder="00-000-0000"
            value={value}
            onChange={setValue}
            name={"Mobil nömrə"}
            defaultCountry="AZ"
          />
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
