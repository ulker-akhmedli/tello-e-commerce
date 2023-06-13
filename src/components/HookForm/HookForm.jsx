import React from "react";
import "./HookForm.scss";

const HookForm = () => {


  return (
    <form >
      <input defaultValue="test" {...register("example")} />
      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};

export default HookForm;
