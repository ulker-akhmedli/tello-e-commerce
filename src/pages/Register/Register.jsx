import React, { useState } from "react";
import "./Register.scss";
import WithSocial from "../Login/WithSocial/WithSocial";
import LoginImage from "../Login/LoginImage/LoginImage";
import Button from "../../components/Button/Button";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../store/actions/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  firstname: z.string().min(3),
  lastname: z.string().min(4),
  email: z.string().email(),
});

const Register = () => {
  const [phone, setPhone] = useState("");
  const phoneIsValid = phone?.length == 13;

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = ({ firstname, lastname, email }) => {
    if (phoneIsValid) {
      userRegister({
        firstname,
        lastname,
        email,
        phone,
      });
      navigate("/login");
    }
  };
  return (
    <div className="container register">
      <div className="register-content">
        <h3>Qeydiyyat</h3>
        <WithSocial />
        <span className="or">və ya</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputGroup">
            <label htmlFor="">Ad</label>
            <input
              type="text"
              {...register("firstname")}
              placeholder="Adınızı daxil edin"
            />
            <label htmlFor="">Soyad</label>
            <input
              type="text"
              {...register("lastname")}
              placeholder="Soyadınızı daxil edin"
            />
            <label htmlFor="">E-mail</label>
            <input
              type="text"
              {...register("email")}
              placeholder="nümunə@gmail.com"
            />
            {errors.email && <span>Yanlış email</span>}
          </div>
          <PhoneInput
            placeholder="00-000-0000"
            value={phone}
            onChange={setPhone}
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


