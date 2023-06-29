import React from "react";
import "./Input.scss";

const Form = ({ errors, register, name, placeholder, label, validation }) => {
  return (
    <div className="inputGroup">
      <label htmlFor="">{name}</label>
      <input
        {...register(name, validation)}
        placeholder={placeholder}
        
      />
      {errors?.[name] && <span>Yanlış {label}</span>}
    </div>
  );
};

export default Form;
