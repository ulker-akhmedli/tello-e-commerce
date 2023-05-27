import React from "react";
import "./Form.scss";

const Form = ({ name, type,placeholder }) => {
  return (
    <form>
      <div className="formDetail">
        <label htmlFor="">{name}</label>
        <input placeholder={placeholder} type={type} />
      </div>
    </form>
  );
};

export default Form;
