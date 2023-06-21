import React, { useState } from "react";
import "./Register.scss";
import WithSocial from "../Login/WithSocial/WithSocial";
import Input from "../../components/Input/Input";
import LoginImage from "../Login/LoginImage/LoginImage";
import Button from "../../components/Button/Button";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import { useForm } from "react-hook-form";

const Register = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   pattern,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => console.log(data);
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
            // register={register}
            // pattern={pattern}
            // errors={errors}
          />
          <Input
            placeholder={"nümunə@gmail.com"}
            type={"email"}
            name={"E-mail"}
            // register={register}
            // pattern={pattern}
            // errors={errors}
          />
          <PhoneInput
            placeholder="00-000-00-00"
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
