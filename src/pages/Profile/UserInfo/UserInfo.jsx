import React from "react";
import "./UserInfo.scss";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import Edit from "../../../assets/edit.svg";
import { useForm } from "react-hook-form";
// import PhoneInput from "react-phone-number-input";

const UserInfo = () => {
  const {
    register,
    handleSubmit,
    pattern,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="userInfo">
      <h1>Şəxsi məlumatlar</h1>
      <div className="infos">
        <div className="inputGroup">
          <label htmlFor="">Ad</label>
          <input type="text" {...register("firstname")} placeholder="John" />
        </div>
        <div className="inputGroup">
          <label htmlFor="">Soyad</label>
          <input type="text" {...register("lastname")} placeholder="Doe" />
        </div>
        <div className="inputGroup">
          <label htmlFor="">E-mail</label>
          <input
            type="text"
            {...register("email")}
            placeholder="John.Doe@gmail.com"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="">Mobil nömrə</label>
          <input
            type="text"
            {...register("email")}
            placeholder="000 - 00 - 00"
          />
        </div>

        <Button img={Edit} btn={"Məlumatları yenilə"} />
      </div>
    </form>
  );
};
{
  /* <Input
type={"email"}
name={"Ad"}
register={register}
pattern={pattern}
errors={errors}
label={"Ad"}
validation={{
  pattern: {
    value: /^[a-zA-Z]+$/,
  },
}}
/>
<Input
type={"email"}
name={"Soyad"}
register={register}
pattern={pattern}
errors={errors}
label={"Soyad"}
validation={{
  pattern: {
    value: /^[a-zA-Z]+$/,
  },
}}
/>
<Input
type={"email"}
name={"E-mail"}
register={register}
pattern={pattern}
errors={errors}
label={"E-mail"}
validation={{
  pattern: {
    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
}}
/>
<Input
type={"email"}
name={"Mobil nömrə"}
register={register}
pattern={pattern}
errors={errors}
label={"Nomre"}
validation={{
  pattern: {
    value: /994(40|5[015]|60|7[07])\d{7}/,
  },
}}
/> */
}
export default UserInfo;
