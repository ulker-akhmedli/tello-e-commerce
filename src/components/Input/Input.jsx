import React from "react";
import "./Input.scss";

const Form = ({ errors,register, name, type, placeholder, id }) => {
  return (
    <div className="inputGroup">
      <label htmlFor="">{name}</label>
      <input
        // {...register(name, {
        //   pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        // })}
        placeholder={placeholder}
      />
      {/* {errors?.[name] && <span>Please enter invalid data</span>} */}
    </div>
  );
};

export default Form;
