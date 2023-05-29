import React from "react";
import "./Input.scss";

const Form = ({ name, type, placeholder,id }) => {
  return (
    <div  className="inputGroup">
      <label htmlFor="">{name}</label>
      <input id="" placeholder={placeholder} type={type} />
    </div>
  );
};

export default Form;
