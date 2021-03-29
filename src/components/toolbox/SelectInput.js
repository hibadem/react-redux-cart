import React from "react";

const SelectInput = ({ name, value, defaultOption, options, label,onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} value={value} className="form-control" onChange={onChange}>
        <option value="">{defaultOption}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectInput;
