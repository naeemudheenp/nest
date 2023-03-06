import React from "react";

function FormInput({ name, func, title }) {
  return (
    <input
      type="text"
      name={name}
      placeholder={name}
      value={title}
      onChange={(e) => func(e)}
    ></input>
  );
}

export default FormInput;
