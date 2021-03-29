import React from "react";

const TextInput = ({ name, label, placeholder, onChange, value, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        className="form-control"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></input>
      {error ? <div className="alert alert-danger">Hata</div> : ''}
    </div>
  );
};
export default TextInput;
