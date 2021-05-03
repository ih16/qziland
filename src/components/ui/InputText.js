import React from "react";
const InputText = (props) => {
  return (
    <label
      htmlFor={props.id}
      className="flex flex-col py-3 w-full font-semibold text-gray-800"
    >
      {props.label}
      <input
        onChange={props.onChange}
        onBlur={props.onBlur}
        id={props.id}
        name={props.name}
        type={"type" in props ? props.type : "text"}
        value={props.value}
        className="shadow rounded border-0 p-3 mt-2"
        placeholder={props.placeholder}
      />
    </label>
  );
};
export default InputText;
